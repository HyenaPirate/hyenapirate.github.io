async function loadLanguage(lang) {
  try {
    const res = await fetch(`languages/${lang}.json`);
    const translations = await res.json();

    document.querySelectorAll("[data-key]").forEach(el => {
      const key = el.getAttribute("data-key");
      const value = translations[key];

      if (!value) return;

      // if value is an array, assume list
      if (Array.isArray(value)) {
        el.innerHTML = "";
        value.forEach(item => {
          const li = document.createElement("li");
          li.textContent = item;
          el.appendChild(li);
        });
      } else {
        el.textContent = value;
      }
    });

    localStorage.setItem("siteLang", lang);
  } catch (err) {
    console.error("Failed to load language:", err);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const selector = document.getElementById("lang");
  const savedLang = localStorage.getItem("siteLang") || "en";
  selector.value = savedLang;
  loadLanguage(savedLang);

  selector.addEventListener("change", e => loadLanguage(e.target.value));
});
