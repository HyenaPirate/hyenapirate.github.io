(function () {
  // Match if an item's text contains ALL query tokens (AND search). Case-insensitive.
  function matchesText(el, tokens) {
    if (tokens.length === 0) return true;
    const text = el.textContent.toLowerCase();
    return tokens.every(t => text.includes(t));
  }

  // Filter one panel (a search input + its nearest .categorised container)
  function attachSearch(input) {
    // Find the .categorised container in the same tab/panel
    const panel = input.closest('.tab-panel') || document;
    const root = panel.querySelector('.categorised');
    if (!root) return;

    const categories = Array.from(root.querySelectorAll('.categorised__category'));

    function run() {
      const q = input.value.trim().toLowerCase();
      const tokens = q.split(/\s+/).filter(Boolean);

      categories.forEach(cat => {
        const items = Array.from(cat.querySelectorAll('.categorised__item'));
        let visibleCount = 0;

        items.forEach(item => {
          const show = matchesText(item, tokens);
          item.hidden = !show;
          if (show) visibleCount++;
        });

        // hide whole category if none of its items match
        cat.hidden = (visibleCount === 0);
      });
    }

    input.addEventListener('input', run);
    // Optional: clear on Esc
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && input.value) {
        input.value = '';
        input.dispatchEvent(new Event('input'));
      }
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.categorised-search__input').forEach(attachSearch);
  });
})();
