/* ─── CAROUSEL ───────────────────────────────────────── */
let currentSlide = 1; // start on slide index 1 (active in HTML)
const totalSlides = 3;

function goToSlide(index) {
  const slides = document.querySelectorAll('.slide');
  const dots   = document.querySelectorAll('.dot');
  slides.forEach(s => s.classList.remove('active'));
  dots.forEach(d  => d.classList.remove('active'));
  currentSlide = (index + totalSlides) % totalSlides;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

function changeSlide(dir) {
  goToSlide(currentSlide + dir);
}

// Auto-advance every 5 seconds
setInterval(() => changeSlide(1), 5000);

/* ─── SECTOR TABS ────────────────────────────────────── */
const sectorData = {
  restaurantes: { title: 'Restaurantes y Bares', desc: 'Tecnología diseñada para todos los tipos de negocio de comida.', img: 'assets/sector-restaurantes.png' },
  tiendas: { title: 'Tiendas y Ventas', desc: 'Soluciones de cobro completas para tu tienda física o en línea.', img: 'assets/sector-tiendas.png' },
  salud: { title: 'Salud, Belleza y Bienestar', desc: 'Gestiona citas, pagos y clientes desde una sola plataforma.', img: 'assets/sector-salud.png' },
  educacion: { title: 'Educación, Viajes y Entretenimiento', desc: 'Cobra matrículas, eventos y reservas de manera sencilla.', img: 'assets/sector-educacion.png' },
  servicios: { title: 'Servicios Profesionales', desc: 'Factura fácil y recibe pagos al instante en tu consultorio u oficina.', img: 'assets/sector-servicios.png' }
};
function switchSector(btn) {
  document.querySelectorAll('.stab-sector').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const data = sectorData[btn.dataset.sector] || sectorData.restaurantes;
  const t = document.getElementById('sectorTitle');
  const d = document.getElementById('sectorDesc');
  const i = document.getElementById('sectorImg');
  if (t) t.textContent = data.title;
  if (d) d.textContent = data.desc;
  if (i) i.src = data.img;
}
function toggleAcc(btn) {
  const item = btn.closest('.acc-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.acc-item').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

/* ─── PRODUCT TABS ───────────────────────────────────── */
function switchTab(btn) {
  document.querySelectorAll('.ptab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
}
function switchProdType(btn) {
  document.querySelectorAll('.ptype').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}
function switchSubTab(btn) {
  document.querySelectorAll('.psub').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

/* ─── SIMULADOR TABS ─────────────────────────────────── */
function switchSimTab(btn) {
  document.querySelectorAll('.stab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  calcSim();
}

/* ─── SIMULADOR CALC ─────────────────────────────────── */
function calcSim() {
  const venta = parseFloat(document.getElementById('sim-venta').value) || 0;
  const origenEl = document.querySelector('input[name="origen"]:checked');
  const tasa = origenEl ? parseFloat(origenEl.value) : 0.0409;
  const igv = 0.18;
  const comision = venta * tasa * (1 + igv);
  const deposito = venta - comision;
  document.getElementById('sim-comision').textContent =
    'S/ ' + comision.toFixed(2);
  document.getElementById('sim-deposito').textContent =
    deposito > 0 ? 'S/ ' + deposito.toFixed(2) : 'S/ 0.00';
}

/* ─── TESTIMONIOS SLIDER ─────────────────────────────── */
let testiOffset = 0;
function testiSlide(dir) {
  const track = document.getElementById('testiTrack');
  if (!track) return;
  const items = track.querySelectorAll('.testi-card, .testi-quote');
  const step = 432; // card 400px + 32px gap
  const max = (items.length / 2 - 1) * step;
  testiOffset = Math.max(0, Math.min(testiOffset + dir * step, max));
  track.style.transform = `translateX(-${testiOffset}px)`;
}

/* ─── HAMBURGER ──────────────────────────────────────── */
const menuBtn = document.getElementById('menuBtn');
if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    const links   = document.querySelector('.nav-links');
    const actions = document.querySelector('.nav-actions');
    if (links) links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
    if (actions) actions.style.display = actions.style.display === 'flex' ? 'none' : 'flex';
  });
}

/* ─── NAVBAR SCROLL ──────────────────────────────────── */
const navbar = document.querySelector('.navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });
}
