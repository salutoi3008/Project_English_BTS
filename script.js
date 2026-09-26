document.addEventListener("DOMContentLoaded", function () {

  // === Accordéon des risques : une seule carte ouverte à la fois ===
  const riskHeaders = document.querySelectorAll('.risk-header');

  riskHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const card = header.closest('.risk-card');
      const isAlreadyOpen = card.classList.contains('open');

      // Ferme toutes les cartes
      document.querySelectorAll('.risk-card').forEach(c => {
        c.classList.remove('open');
        c.querySelector('.risk-header').setAttribute('aria-expanded', 'false');
      });

      // Rouvre celle-ci seulement si elle n'était pas déjà ouverte
      if (!isAlreadyOpen) {
        card.classList.add('open');
        header.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // === Modales (Help + More infos) : fonction générique réutilisable ===
  function setupModal(btnId, modalId, closeId) {
    const btn = document.getElementById(btnId);
    const modal = document.getElementById(modalId);
    const closeBtn = document.getElementById(closeId);
    if (!btn || !modal) return;

    btn.addEventListener('click', () => {
      modal.classList.add('is-open');
    });
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        modal.classList.remove('is-open');
      });
    }
    modal.addEventListener('click', e => {
      if (e.target === modal || e.target.classList.contains('help-modal__backdrop')) {
        modal.classList.remove('is-open');
      }
    });
  }

  setupModal('helpBtn', 'helpModal', 'helpModalClose');
  setupModal('infoBtn', 'infoModal', 'infoModalClose');

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

});
