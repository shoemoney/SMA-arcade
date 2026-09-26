<script setup>
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGamepad, faTrophy, faVolumeXmark, faCode, faRotateRight, faBolt, faCirclePause, faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { games } from './games.js';
import { createArcadeField } from './arcade-field.js';
const field = ref(null);
const copyrightDate = new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'America/Chicago' }).format(new Date());
const reduced = ref(matchMedia('(prefers-reduced-motion: reduce)').matches);
const paused = ref(reduced.value);
const scores = reactive(Object.fromEntries(games.map(game => [game.slug, { status: 'loading', rows: [] }])));
const previewFailed = reactive({});
let dispose = () => {};
const requests = new Set();
const pending = new Set();
const channel = typeof BroadcastChannel === 'function' ? new BroadcastChannel('shoemoney-arcade-scores') : null;
const refreshBoards = () => { if (document.visibilityState !== 'hidden') games.forEach(game => loadScores(game.slug)); };
const receiveScore = event => { if (games.some(game => game.slug === event.data?.game)) loadScores(event.data.game); };
async function loadScores(slug) {
  if (pending.has(slug)) return;
  pending.add(slug);
  if (!scores[slug].rows.length) scores[slug].status = 'loading';
  const controller = new AbortController(); requests.add(controller);
  const timeout = setTimeout(() => controller.abort(), 10000);
  try {
    const response = await fetch(`/api/games/${encodeURIComponent(slug)}/scores`, { signal: controller.signal });
    if (!response.ok) throw new Error('Scores unavailable');
    const body = await response.json();
    if (!Array.isArray(body.scores)) throw new Error('Invalid scores');
    scores[slug].rows = body.scores.filter(row => typeof row.name === 'string' && Number.isFinite(row.score)).slice(0, 10);
    scores[slug].status = 'ready';
  } catch { scores[slug].status = 'error'; }
  finally { clearTimeout(timeout); requests.delete(controller); pending.delete(slug); }
}
function toggleMotion() { paused.value = !paused.value; document.documentElement.classList.toggle('motion-paused', paused.value); }
function tilt(event) {
  if (paused.value || event.pointerType === 'touch') return;
  const rect = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty('--tilt-x', `${(event.clientY - rect.top - rect.height / 2) / 75}deg`);
  event.currentTarget.style.setProperty('--tilt-y', `${-(event.clientX - rect.left - rect.width / 2) / 90}deg`);
}
function untilt(event) { event.currentTarget.style.setProperty('--tilt-x', '0deg'); event.currentTarget.style.setProperty('--tilt-y', '0deg'); }
onMounted(async () => {
  document.documentElement.classList.toggle('motion-paused', paused.value);
  games.forEach(game => loadScores(game.slug));
  window.addEventListener('focus', refreshBoards);
  document.addEventListener('visibilitychange', refreshBoards);
  channel?.addEventListener('message', receiveScore);
  dispose = await createArcadeField(field.value, () => paused.value);
});
onBeforeUnmount(() => { window.removeEventListener('focus',refreshBoards); document.removeEventListener('visibilitychange',refreshBoards); channel?.close(); dispose(); requests.forEach(request => request.abort()); });
</script>

<template>
  <canvas ref="field" class="gpu-field" aria-hidden="true"></canvas>
  <div class="ambient-grid" aria-hidden="true"></div>
  <header class="site-header">
    <a class="brand" href="/" aria-label="ShoeMoney Arcade home"><img class="brand-stamp" src="/brand/shoemoney-logo.webp" alt="" width="161" height="130"><span><strong>SHOEMONEY</strong><span class="brand-sub">ARCADE</span></span></a>
    <nav aria-label="Main navigation"><a href="#games">The games</a><a class="home-link" href="https://www.shoemoney.com">ShoeMoney.com</a><button class="motion-button" @click="toggleMotion" :aria-pressed="paused" :aria-label="paused ? 'Resume ambient animation' : 'Pause ambient animation'"><FontAwesomeIcon :icon="paused ? faCirclePlay : faCirclePause"/><span>{{ paused ? 'Motion off' : 'Motion on' }}</span></button></nav>
  </header>
  <main>
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-copy"><p class="eyebrow"><span class="live-light"></span> THE SHOEMONEY ARCADE</p><h1 id="hero-title">ALL GAME.<br><span>NO QUARTERS.</span></h1><p class="hero-description">Built for the love of the game.<br>Played for the bragging rights.</p><a class="primary-button" href="#games"><FontAwesomeIcon :icon="faGamepad"/> Pick your game</a><p class="hero-note">Free to play. Right in your browser.</p></div>
      <div class="robot-stage" aria-hidden="true"><div class="orbit orbit-one"></div><div class="orbit orbit-two"></div><div class="robot-halo"></div><img class="robot" src="/brand/shoemoney-robot.webp" alt="" width="1400" height="1126"><div class="robot-ground"></div><div class="signal-badge"><FontAwesomeIcon :icon="faBolt"/> CHALLENGE ACCEPTED</div></div>
      <div class="hero-bottom"><span>HUMAN SKILL. MACHINE ATTITUDE.</span><span class="quarter-line"></span><span>EST. SHOEMONEY</span></div>
    </section>
    <section id="games" class="games-section" aria-labelledby="games-title">
      <div class="section-heading"><div><p class="eyebrow">STEP UP. STAND OUT.</p><h2 id="games-title">Choose your challenge<span>.</span></h2></div><span class="game-count">{{ games.length === 1 ? 'One game. Zero excuses.' : `${games.length} games. Zero excuses.` }}</span></div>
      <article v-for="(game, index) in games" :key="game.slug" class="game-row" :class="{ reverse: index % 2 }" :aria-labelledby="`${game.slug}-title`">
        <div class="game-feature"><div class="game-screen" @pointermove="tilt" @pointerleave="untilt"><div class="screen-top"><span><span class="live-light"></span> {{ game.genre }}</span><span>SHOEMONEY ORIGINAL</span></div><div class="screen-picture"><img :src="paused || previewFailed[game.slug] ? game.poster : game.preview" :alt="`${game.title} gameplay`" width="1280" height="720" @error="previewFailed[game.slug] = true"><div class="screen-vignette"></div><div class="preview-badge"><FontAwesomeIcon :icon="faVolumeXmark"/> {{ paused || previewFailed[game.slug] ? 'Gameplay capture' : 'Gameplay preview' }}</div></div><div class="screen-base"><span class="screen-dot"></span><span>PLAY HARD. LEAVE YOUR MARK.</span><span class="screen-dot"></span></div></div><div class="game-description"><p class="eyebrow">{{ game.genre }}</p><h3 :id="`${game.slug}-title`">{{ game.title }}</h3><p>{{ game.description }}</p><a class="primary-button play-button" :href="game.href"><FontAwesomeIcon :icon="faGamepad"/> Test your skill</a></div></div>
        <aside class="score-panel" :aria-label="`${game.title} high scores`"><div class="score-heading"><span class="trophy-frame"><FontAwesomeIcon :icon="faTrophy"/></span><div><p class="eyebrow">PUT YOUR NAME UP HERE</p><h3>The score board</h3></div></div><div class="board-title"><span>TOP 10 SCORES</span><span>YOUR NEXT TARGET</span></div><div aria-live="polite" class="score-content"><p v-if="scores[game.slug].status === 'loading'" class="score-state">Warming up the score board…</p><div v-else-if="scores[game.slug].status === 'error'" class="score-state"><p>The score board is taking a breather.</p><button class="text-button" @click="loadScores(game.slug)"><FontAwesomeIcon :icon="faRotateRight"/> Try again</button></div><div v-else-if="!scores[game.slug].rows.length" class="empty-board"><span class="empty-trophy"><FontAwesomeIcon :icon="faTrophy"/></span><h4>A clean slate.<br>A new legend.</h4><p>No scores yet. Your first run could be the one that starts it all.</p><a :href="game.href" class="text-button">Set the first score</a></div><ol v-else class="scores"><li v-for="(score, rank) in scores[game.slug].rows" :key="`${score.createdAt}-${rank}`"><span class="rank">{{ String(rank + 1).padStart(2, '0') }}</span><span class="player-name">{{ score.name }}</span><strong>{{ new Intl.NumberFormat().format(score.score) }}</strong></li></ol></div><p class="board-footer">Reach the top ten. Enter your name.<br>Give the next player something to beat.<br><span class="score-integrity">Scores are reported by each player’s browser.</span></p></aside>
      </article>
    </section>
    <section class="open-source"><div class="code-badge"><FontAwesomeIcon :icon="faCode"/></div><div><p class="eyebrow">MADE TO PLAY. OPEN TO BUILD.</p><h2>Great games start with<br>“what if?”</h2><p>This is our playground. More games are on the way.<br>Choose a mission. Make it yours.</p></div><a class="secondary-button" href="https://github.com/shoemoney?q=SMA-"><FontAwesomeIcon :icon="faCode"/> Get the source</a></section>
  </main>
  <footer><a class="footer-brand" href="https://www.shoemoney.com">SHOEMONEY<span>ARCADE</span></a><p>Free games. Serious bragging rights.</p><p style="font-size:20px;line-height:1.5">Copyright Jeremy Schoemaker &amp; <a href="https://shoemoney.com">ShoeMoney</a> INC {{ copyrightDate }}</p><a href="#games">Back to the games</a></footer>
</template>
