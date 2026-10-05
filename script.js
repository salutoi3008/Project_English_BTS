document.addEventListener("DOMContentLoaded", function () {

  // === Accordéon des risques : une seule carte ouverte à la fois ===
  document.querySelectorAll('.risk-header').forEach(header => {
    header.addEventListener('click', () => {
      const card = header.closest('.risk-card');
      const open = !card.classList.contains('open');

      // Ferme toutes les cartes
      document.querySelectorAll('.risk-card').forEach(c => {
        c.classList.remove('open');
        c.querySelector('.risk-header').setAttribute('aria-expanded', 'false');
      });

      // Rouvre celle-ci seulement si elle n'était pas déjà ouverte
      card.classList.toggle('open', open);
      header.setAttribute('aria-expanded', open);
    });
  });

  // === Modales (Help + More infos + Sources) ===
  function setupModal(btnId, modalId) {
    const btn = document.getElementById(btnId);
    const modal = document.getElementById(modalId);
    if (!btn || !modal) return;

    btn.addEventListener('click', () => modal.classList.add('is-open'));
    modal.addEventListener('click', e => {
      if (e.target.matches('.help-modal, .help-modal__backdrop, .help-modal__close')) {
        modal.classList.remove('is-open');
      }
    });
  }

  setupModal('helpBtn', 'helpModal');
  setupModal('infoBtn', 'infoModal');
  setupModal('sourcesBtn', 'sourcesModal');

  // === Bouton Retour en haut ===
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('is-visible', window.scrollY > 500);
    });
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // === Overlay zoom : agrandissement des images au clic ===
  const overlay    = document.getElementById('overlay');
  const overlayImg = document.getElementById('overlay-img');

  if (overlay && overlayImg) {
    document.querySelectorAll('.zoomable').forEach(img => {
      img.addEventListener('click', () => {
        overlayImg.src = img.src;
        overlay.classList.add('show');
      });
    });

    overlay.addEventListener('click', () => overlay.classList.remove('show'));

    // Fermeture avec la touche Échap
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') overlay.classList.remove('show');
    });
  }

});
