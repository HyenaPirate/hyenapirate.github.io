(function(){
  const sidebar = document.querySelector('.sidebar');
  const toggle  = document.querySelector('.sidebar__toggle');
  const scrim   = document.querySelector('.sidebar__scrim');
  const main    = document.querySelector('.main');

  if (!sidebar || !toggle) return;

  function open() {
    sidebar.classList.add('is-open');
    sidebar.classList.remove('closing');
    toggle.setAttribute('aria-expanded', 'true');
    if (scrim) scrim.hidden = false;
  }

  function close() {
    sidebar.classList.add('closing');
    sidebar.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');

    // Wait for the slide-out animation before hiding scrim
    setTimeout(() => {
      sidebar.classList.remove('closing');
      if (scrim) scrim.hidden = true;
    }, 300); // must match CSS transition duration
  }

  function isNarrow() {
    return window.matchMedia('(max-width: 1099px)').matches;
  }

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    if (!isNarrow()) return;
    sidebar.classList.contains('is-open') ? close() : open();
  });

  // Click-away closes
  scrim && scrim.addEventListener('click', close);
  main  && main.addEventListener('click', () => { if (isNarrow()) close(); });

  // ESC closes on narrow layouts
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isNarrow()) close();
  });

  // On resize, reset properly when leaving mobile mode
  window.addEventListener('resize', () => {
    if (!isNarrow()) {
      sidebar.classList.remove('is-open', 'closing');
      if (scrim) scrim.hidden = true;
    }
  });
})();

document.querySelectorAll('.copy-text').forEach(el => {
    el.addEventListener('click', () => {
      // Copy text
      navigator.clipboard.writeText(el.dataset.value).catch(err => console.error(err));

      // Create tooltip
      let tooltip = document.createElement('span');
      tooltip.className = 'copied-tooltip show';
      tooltip.textContent = 'Copied!';
      el.appendChild(tooltip);

      // Remove tooltip after 1.2s
      setTimeout(() => {
        tooltip.remove();
      }, 1200);
    });
  });



