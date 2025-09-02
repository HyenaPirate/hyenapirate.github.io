async function loadLanguage(lang) {
  try {
    const res = await fetch(`languages/${lang}.json`);
    const translations = await res.json();
    applyTranslations(translations);
    localStorage.setItem("siteLang", lang);
  } catch (err) {
    console.error("Failed to load language:", err);
  }
}

function applyTranslations(translations) {
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.dataset.key;
    const value = key.split('.').reduce((o,i) => (o && o[i] !== undefined ? o[i] : undefined), translations);

    if (Array.isArray(value)) {
      const firstLi = el.querySelector('li');
      const liClass = firstLi ? firstLi.className : '';
      el.innerHTML = '';
      value.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        if (liClass) li.className = liClass;
        el.appendChild(li);
      });
    } else if (value !== undefined && value !== null) {
      el.textContent = value;
    }
  });
}


// Init
document.addEventListener("DOMContentLoaded", () => {
  const selector = document.getElementById("lang");
  const savedLang = localStorage.getItem("siteLang") || "en";
  selector.value = savedLang;
  loadLanguage(savedLang);

  selector.addEventListener("change", e => loadLanguage(e.target.value));
});
