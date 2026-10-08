document.addEventListener("DOMContentLoaded", function () {

  // === Risk accordion: only one card open at a time ===
  document.querySelectorAll('.risk-header').forEach(header => {
    header.addEventListener('click', () => {
      const card = header.closest('.risk-card');
      const open = !card.classList.contains('open');

      // Close all cards
      document.querySelectorAll('.risk-card').forEach(c => {
        c.classList.remove('open');
        c.querySelector('.risk-header').setAttribute('aria-expanded', 'false');
      });

      // Reopen it only if it wasn't already open.
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

  // === Back-to-top button ===
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('is-visible', window.scrollY > 500);
    });
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // === Overlay zoom : image enlargement on click ===
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

    // Close with the Esc key
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') overlay.classList.remove('show');
    });
  }

});
