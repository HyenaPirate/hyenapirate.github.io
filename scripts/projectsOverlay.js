export function createChapter(container, title, text) {
    const section = document.createElement("section");

    const h = document.createElement("h2");
    h.textContent = title;

    const p = document.createElement("p");
    p.textContent = text || "";

    section.append(h, p);
    container.appendChild(section);
}

export function createImage(container, src) {
    const img = document.createElement("img");
    img.src = src;
    container.appendChild(img);
}