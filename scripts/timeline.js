(function () {
  const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  function formatHuman(iso) {
    if (!iso) return "";
    const v = String(iso).toLowerCase().trim();
    if (v === "present" || v === "now" || v === "current") return "Present";
    const [y, m] = v.split("-");
    if (!/^\d{4}$/.test(y)) return iso;
    if (!m) return y;
    const mi = Number(m);
    return (mi >= 1 && mi <= 12) ? `${MONTHS[mi - 1]} ${y}` : y;
  }

  function setTime(el, iso) {
    if (!el) return;
    if (!iso || /^present|now|current$/i.test(iso)) {
      el.removeAttribute("datetime");
      el.textContent = formatHuman(iso || "");
    } else {
      el.setAttribute("datetime", iso);
      el.textContent = formatHuman(iso);
    }
  }

  function toKey(v) {
    if (!v) return -Infinity;
    const s = String(v).toLowerCase().trim();
    if (s === "present" || s === "now" || s === "current") return Infinity;
    const [y, m] = s.split("-");
    const year = Number(y);
    const month = m ? Number(m) : 1;
    if (!Number.isFinite(year)) return -Infinity;
    return year * 100 + month;
  }

  function sortItems(itemsWrap, order) {
    const items = Array.from(itemsWrap.querySelectorAll(".tl__item"));
    items.sort((a, b) => {
      const ka = toKey(a.dataset.start);
      const kb = toKey(b.dataset.start);
      return order === "asc" ? ka - kb : kb - ka;
    });
    items.forEach(n => itemsWrap.appendChild(n));
  }

  function initOneTimeline(root) {
    const itemsWrap = root.querySelector(".tl__items");
    if (!itemsWrap) return;

    // Fill <time> from data-start/end
    itemsWrap.querySelectorAll(".tl__item").forEach(item => {
      const start = item.dataset.start || "";
      const end   = item.dataset.end   || "";
      const startEl = item.querySelector(".tl__start") || item.querySelectorAll("time")[0];
      const endEl   = item.querySelector(".tl__end")   || item.querySelectorAll("time")[1];
      setTime(startEl, start);
      setTime(endEl, end);
    });

    // Initial sort
    const defaultOrder = (root.dataset.defaultOrder || "desc").toLowerCase();
    sortItems(itemsWrap, defaultOrder);

    // Wire sort buttons
    const bar = root.querySelector(".tl__sortbar");
    if (bar) {
      bar.querySelectorAll(".tl__sortbtn").forEach(btn => {
        btn.addEventListener("click", () => {
          bar.querySelectorAll(".tl__sortbtn").forEach(b => {
            b.classList.toggle("is-active", b === btn);
            b.setAttribute("aria-pressed", b === btn ? "true" : "false");
          });
          sortItems(itemsWrap, btn.dataset.order);
        });
      });
    }
  }

  // Init all timelines on page
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".tl").forEach(initOneTimeline);
  });
})();
