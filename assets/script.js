// Simulador de comisiones
function calcularSimulador() {
  const ventas = parseFloat(document.getElementById('sim-ventas').value) || 0;
  const tasa = parseFloat(document.getElementById('sim-tipo').value) || 3.49;
  const comision = ventas * (tasa / 100);
  document.getElementById('sim-resultado').textContent =
    'S/ ' + comision.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Tabs de productos
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});

// Navbar hamburger (mobile)
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.navbar-links');
const navActions = document.querySelector('.navbar-actions');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    const open = navLinks.style.display === 'flex';
    navLinks.style.cssText = open ? '' : 'display:flex;flex-direction:column;position:absolute;top:68px;left:0;right:0;background:#fff;padding:16px 24px;box-shadow:0 8px 24px rgba(0,0,0,.1);gap:4px;z-index:99';
    navActions.style.cssText = open ? '' : 'display:flex;flex-direction:column;position:absolute;top:calc(68px + ' + (navLinks.children.length * 40) + 'px);left:0;right:0;background:#fff;padding:16px 24px 24px;box-shadow:0 8px 24px rgba(0,0,0,.1);gap:8px;z-index:99';
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Intersection Observer for fade-in animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.producto-card, .digi-card, .rubro-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity .5s ease, transform .5s ease';
  observer.observe(el);
});
