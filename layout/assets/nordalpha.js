// NORDALPHA THEME — nordalpha.js

// Filtre produits
document.querySelectorAll('.na-filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.na-filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.na-product-card').forEach(card => {
      if (filter === 'all' || card.dataset.type === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Copie codes promo
document.querySelectorAll('.na-promo-code-wrap').forEach(el => {
  el.addEventListener('click', () => {
    const code = el.querySelector('.na-promo-code-text').textContent.trim();
    const orig = el.querySelector('.na-promo-code-text').textContent;
    navigator.clipboard.writeText(code).catch(() => {});
    el.querySelector('.na-promo-code-text').textContent = 'Copié !';
    el.style.borderColor = '#F5A623';
    setTimeout(() => {
      el.querySelector('.na-promo-code-text').textContent = orig;
      el.style.borderColor = '';
    }, 1800);
  });
});

// Suivi colis
const trackBtn = document.querySelector('.na-track-btn');
if (trackBtn) {
  trackBtn.addEventListener('click', () => {
    const num = document.querySelector('.na-track-input').value.trim();
    if (num) {
      window.open('https://www.17track.net/fr?nums=' + encodeURIComponent(num), '_blank');
    }
  });
}
