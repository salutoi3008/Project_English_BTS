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



  // === Modale Help ===
  const helpBtn = document.getElementById('helpBtn');
  const helpModal = document.getElementById('helpModal');
  const helpModalClose = document.getElementById('helpModalClose');

  // Ouvre l'aide //
  if (helpBtn && helpModal) {
    helpBtn.addEventListener('click', () => {
      helpModal.classList.add('is-open');
    });
  }

  // Ferme l'aide avec la croix //
  if (helpModalClose) {
    helpModalClose.addEventListener('click', () => {
      helpModal.classList.remove('is-open');
    });
  }

  // Ferme l'aide en cliquant hors de l'aide // 
  if (helpModal) {
    helpModal.addEventListener('click', e => {
      if (e.target === helpModal || e.target.classList.contains('help-modal__backdrop')) {
        helpModal.classList.remove('is-open');
      }
    });
  }

});
