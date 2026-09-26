import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
export default defineConfig({ plugins: [vue()], preview: { proxy: { '/api': 'http://127.0.0.1:3784' } }, server: { proxy: { '/api': 'http://127.0.0.1:3784', '/last-engineer': { target: 'http://127.0.0.1:5173', rewrite: path => path.replace(/^\/last-engineer/, '') } } } });
