  console.log('tabs.js loaded');
(function () {
  const tabs   = [...document.querySelectorAll('.tabs__list .tab')];
  const panels = [...document.querySelectorAll('.tabs__panels .tab-panel')];
  if (!tabs.length || !panels.length) return;

  const keyOf = (btn) => btn.dataset.target;           // "about"
  const idOf  = (key) => 'panel-' + key;               // "panel-about"
  const idxOf = (key) => tabs.findIndex(t => keyOf(t) === key);

  // ensure no legacy [hidden] remains (safety)
  panels.forEach(p => p.removeAttribute('hidden'));

  // initial active tab/panel
  const startTab = document.querySelector('.tabs__list .tab.is-active') || tabs[0];
  let activeKey = keyOf(startTab);

  // apply initial state
  tabs.forEach(btn => {
    const on = keyOf(btn) === activeKey;
    btn.classList.toggle('is-active', on);
    btn.setAttribute('aria-selected', on ? 'true' : 'false');
    btn.setAttribute('tabindex', on ? '0' : '-1');
  });
  panels.forEach(p => {
    const on = p.id === idOf(activeKey);
    p.classList.toggle('is-active', on);
    p.setAttribute('aria-hidden', on ? 'false' : 'true');
  });

  function animateTo(nextKey) {
    if (nextKey === activeKey) return;

    const curPanel  = document.getElementById(idOf(activeKey));
    const nextPanel = document.getElementById(idOf(nextKey));
    if (!curPanel || !nextPanel) return;

    const curIdx = idxOf(activeKey);
    const nxtIdx = idxOf(nextKey);
    const dir = nxtIdx > curIdx ? 'right' : 'left';

    // prepare entering panel off-screen
    nextPanel.classList.add('is-active', dir === 'right' ? 'enter-from-right' : 'enter-from-left');
    nextPanel.setAttribute('aria-hidden', 'false');

    // animate current out
    curPanel.classList.add(dir === 'right' ? 'leave-to-left' : 'leave-to-right');

    // force reflow so the enter transform is applied before removing it
    // eslint-disable-next-line no-unused-expressions
    nextPanel.offsetHeight;
    nextPanel.classList.remove('enter-from-right', 'enter-from-left');

    // cleanup when current panel finishes its transition
    curPanel.addEventListener('transitionend', function cleanup() {
      curPanel.classList.remove('leave-to-left', 'leave-to-right', 'is-active');
      curPanel.setAttribute('aria-hidden', 'true');
      curPanel.removeEventListener('transitionend', cleanup);
    }, { once: true });

    // update active tab state
    activeKey = nextKey;
    tabs.forEach(btn => {
      const on = keyOf(btn) === activeKey;
      btn.classList.toggle('is-active', on);
      btn.setAttribute('aria-selected', on ? 'true' : 'false');
      btn.setAttribute('tabindex', on ? '0' : '-1');
    });
  }

  // clicks + arrow keys
  tabs.forEach((btn, i) => {
    btn.addEventListener('click', () => animateTo(keyOf(btn)));
    btn.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      const next = e.key === 'ArrowRight' ? (i + 1) % tabs.length : (i - 1 + tabs.length) % tabs.length;
      tabs[next].focus();
      animateTo(keyOf(tabs[next]));
    });
  });
})();
