// Drill-down translation function
function applyTranslations(translations) {
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.dataset.key;
    const value = key.split('.').reduce((o, i) => o?.[i], translations);

    if (!value) return;

    if (Array.isArray(value)) {
      el.innerHTML = ''; // clear existing content
      value.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        el.appendChild(li);
      });
    } else {
      el.textContent = value;
    }
  });
}

// Load JSON for selected language
async function loadLanguage(lang) {
  try {
    const res = await fetch(`languages/${lang}.json`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const translations = await res.json();
    applyTranslations(translations);
    localStorage.setItem('siteLang', lang);
  } catch (err) {
    console.error('Failed to load language:', err);
  }
}

// Initialize language selector
document.addEventListener('DOMContentLoaded', () => {
  const selector = document.getElementById('lang');
  const savedLang = localStorage.getItem('siteLang') || 'en';
  selector.value = savedLang;
  loadLanguage(savedLang);

  selector.addEventListener('change', e => loadLanguage(e.target.value));
});
