// Лепестки на первом экране и след за курсором. Без анимации при prefers-reduced-motion.
const COLORS = ['#f3d9d4', '#ddb9b5', '#e9c6c0', '#f8f1e8', '#d9a7a5'];
const TRAIL_COLORS = ['#ddb9b5', '#c98d92', '#d9b77c', '#e9c6c0'];

const random = (min, max) => min + Math.random() * (max - min);
const pick = (list) => list[Math.floor(Math.random() * list.length)];

function drawPetal(ctx, p) {
  ctx.save();
  ctx.translate(p.x, p.y);
  ctx.rotate(p.angle);
  // Переворот по одной оси даёт ощущение объёма при падении
  ctx.scale(1, Math.max(0.25, Math.abs(Math.cos(p.flip))));
  ctx.globalAlpha = p.alpha;
  ctx.fillStyle = p.color;
  ctx.beginPath();
  ctx.moveTo(0, -p.size);
  ctx.bezierCurveTo(p.size * 0.9, -p.size * 0.7, p.size * 0.8, p.size * 0.6, 0, p.size);
  ctx.bezierCurveTo(-p.size * 0.8, p.size * 0.6, -p.size * 0.9, -p.size * 0.7, 0, -p.size);
  ctx.fill();
  ctx.restore();
}

function fitCanvas(canvas) {
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  const { width, height } = canvas.getBoundingClientRect();
  canvas.width = width * ratio;
  canvas.height = height * ratio;
  canvas.getContext('2d').setTransform(ratio, 0, 0, ratio, 0, 0);
  return { width, height };
}

function startHeroPetals(hero) {
  const canvas = document.createElement('canvas');
  canvas.className = 'hero__petals';
  canvas.setAttribute('aria-hidden', 'true');
  hero.append(canvas);
  const ctx = canvas.getContext('2d');
  let size = fitCanvas(canvas);
  window.addEventListener('resize', () => { size = fitCanvas(canvas); });

  const spawn = (p, anywhere) => Object.assign(p, {
    x: random(0, size.width),
    y: anywhere ? random(0, size.height) : random(-60, -10),
    size: random(5, 12),
    speed: random(0.35, 0.95),
    drift: random(0.2, 0.7),
    phase: random(0, Math.PI * 2),
    angle: random(0, Math.PI * 2),
    spin: random(-0.012, 0.012),
    flip: random(0, Math.PI),
    flipSpeed: random(0.012, 0.03),
    alpha: random(0.55, 0.9),
    color: pick(COLORS),
  });
  const count = window.innerWidth < 700 ? 14 : 30;
  const petals = Array.from({ length: count }, () => spawn({}, true));

  let visible = true;
  new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; }).observe(hero);

  const tick = () => {
    if (visible && !document.hidden) {
      ctx.clearRect(0, 0, size.width, size.height);
      petals.forEach((p) => {
        p.phase += 0.012;
        p.y += p.speed;
        p.x += Math.sin(p.phase) * p.drift;
        p.angle += p.spin;
        p.flip += p.flipSpeed;
        if (p.y > size.height + 20) spawn(p, false);
        drawPetal(ctx, p);
      });
    }
    requestAnimationFrame(tick);
  };
  tick();
}

function startCursorTrail() {
  const canvas = document.createElement('canvas');
  canvas.className = 'cursor-trail';
  canvas.setAttribute('aria-hidden', 'true');
  document.body.append(canvas);
  const ctx = canvas.getContext('2d');
  let size = fitCanvas(canvas);
  window.addEventListener('resize', () => { size = fitCanvas(canvas); });

  const petals = [];
  let last = null;
  window.addEventListener('pointermove', (event) => {
    if (event.pointerType !== 'mouse') return;
    const { clientX: x, clientY: y } = event;
    if (last && Math.hypot(x - last.x, y - last.y) < 26) return;
    last = { x, y };
    if (petals.length > 40) petals.shift();
    petals.push({
      x,
      y,
      size: random(4, 8),
      vx: random(-0.5, 0.5),
      vy: random(0.3, 1.1),
      angle: random(0, Math.PI * 2),
      spin: random(-0.05, 0.05),
      flip: random(0, Math.PI),
      alpha: 0.85,
      color: pick(TRAIL_COLORS),
    });
    if (!running) { running = true; requestAnimationFrame(tick); }
  }, { passive: true });

  let running = false;
  const tick = () => {
    ctx.clearRect(0, 0, size.width, size.height);
    for (let i = petals.length - 1; i >= 0; i -= 1) {
      const p = petals[i];
      p.x += p.vx;
      p.y += p.vy;
      p.angle += p.spin;
      p.flip += 0.05;
      p.alpha -= 0.012;
      if (p.alpha <= 0) petals.splice(i, 1);
      else drawPetal(ctx, p);
    }
    if (petals.length) requestAnimationFrame(tick);
    else running = false;
  };
}

function startHeroGlow(hero) {
  hero.addEventListener('pointermove', (event) => {
    const rect = hero.getBoundingClientRect();
    hero.style.setProperty('--glow-x', `${event.clientX - rect.left}px`);
    hero.style.setProperty('--glow-y', `${event.clientY - rect.top}px`);
    hero.classList.add('has-glow');
  }, { passive: true });
  hero.addEventListener('pointerleave', () => hero.classList.remove('has-glow'));
}

export function initEffects() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const hero = document.querySelector('.hero');
  if (hero) startHeroPetals(hero);
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    startCursorTrail();
    if (hero) startHeroGlow(hero);
  }
}
