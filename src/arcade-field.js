export async function createArcadeField(canvas, isPaused) {
  let disposed = false;
  let frame = 0;
  let dirty = true;
  let device;
  let observer;
  const pointer = { x: 0.5, y: 0.5 };
  const move = event => { pointer.x = event.clientX / innerWidth; pointer.y = event.clientY / innerHeight; };
  try {
    const adapter = await navigator.gpu?.requestAdapter({ powerPreference: 'low-power' });
    if (!adapter) throw new Error('WebGPU unavailable');
    device = await adapter.requestDevice();
    const context = canvas.getContext('webgpu');
    const format = navigator.gpu.getPreferredCanvasFormat();
    context.configure({ device, format, alphaMode: 'premultiplied' });
    const module = device.createShaderModule({ code: `
      struct Params { size: vec2f, time: f32, pad: f32, pointer: vec2f, pad2: vec2f }
      @group(0) @binding(0) var<uniform> u: Params;
      @vertex fn vs(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {
        var p = array<vec2f, 3>(vec2f(-1.,-1.),vec2f(3.,-1.),vec2f(-1.,3.));
        return vec4f(p[i],0.,1.);
      }
      @fragment fn fs(@builtin(position) p: vec4f) -> @location(0) vec4f {
        let uv = p.xy / u.size;
        let aspect = u.size.x / u.size.y;
        let center = vec2f(.64 + (u.pointer.x-.5)*.035,.40+(u.pointer.y-.5)*.025);
        let q = (uv-center)*vec2f(aspect,1.);
        let r = length(q);
        let a = atan2(q.y,q.x);
        let tunnel = 1. / max(r,.055);
        let rings = pow(max(0.,sin(tunnel*1.65-u.time*.42)),30.)*.075;
        let spokes = pow(max(0.,cos(a*16.+sin(u.time*.13)*.3)),55.)*.042;
        let fade = smoothstep(.08,.30,r)*(1.-smoothstep(.55,1.5,r));
        let cyan = vec3f(.04,.67,.92);
        let amber = vec3f(1.,.48,.08);
        let haze = exp(-r*3.8)*.085;
        let beam = exp(-abs(q.y+.10*sin(q.x*2.+u.time*.18))*40.)*.025;
        let color = vec3f(.022,.035,.054)+cyan*((rings+spokes)*fade+haze+beam)+amber*exp(-length(q-vec2f(-.7,.25))*5.)*.04;
        return vec4f(color,1.);
      }
    ` });
    const pipeline = device.createRenderPipeline({ layout: 'auto', vertex: { module, entryPoint: 'vs' }, fragment: { module, entryPoint: 'fs', targets: [{ format }] }, primitive: { topology: 'triangle-list' } });
    const buffer = device.createBuffer({ size: 32, usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST });
    const bind = device.createBindGroup({ layout: pipeline.getBindGroupLayout(0), entries: [{ binding: 0, resource: { buffer } }] });
    const resize = () => { const dpr = Math.min(devicePixelRatio, 1.25); canvas.width = Math.round(innerWidth*dpr); canvas.height = Math.round(innerHeight*dpr); dirty = true; };
    observer = new ResizeObserver(resize); observer.observe(document.documentElement); resize();
    window.addEventListener('pointermove', move, { passive: true });
    let time = 0; let previous = 0; let frames = 0;
    canvas.dataset.backend = 'webgpu';
    const draw = now => {
      if (disposed) return;
      frame = requestAnimationFrame(draw);
      if (document.hidden || now-previous < 32) return;
      if (!isPaused()) time += Math.min((now-previous)/1000,.1);
      previous = now;
      if (isPaused() && frames > 0 && !dirty) return;
      device.queue.writeBuffer(buffer, 0, new Float32Array([canvas.width,canvas.height,time,0,pointer.x,pointer.y,0,0]));
      const encoder = device.createCommandEncoder();
      const pass = encoder.beginRenderPass({ colorAttachments: [{ view: context.getCurrentTexture().createView(), loadOp: 'clear', storeOp: 'store', clearValue: { r: .02, g: .03, b: .05, a: 1 } }] });
      pass.setPipeline(pipeline); pass.setBindGroup(0, bind); pass.draw(3); pass.end();
      device.queue.submit([encoder.finish()]); dirty = false; canvas.dataset.frames = String(++frames);
    };
    frame = requestAnimationFrame(draw);
    device.lost.then(() => { if (!disposed) { canvas.dataset.backend = 'fallback'; canvas.style.opacity = '0'; cancelAnimationFrame(frame); } });
  } catch { canvas.dataset.backend = 'fallback'; canvas.style.opacity = '0'; }
  return () => { disposed = true; cancelAnimationFrame(frame); observer?.disconnect(); window.removeEventListener('pointermove', move); device?.destroy(); };
}
