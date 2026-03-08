function createChapter(container,title,text){

    const section = document.createElement("section");

    const h = document.createElement("h2");
    h.textContent = title;

    const p = document.createElement("p");
    p.textContent = text;

    section.append(h,p);
    container.appendChild(section);
}

function createYoutube(container,videoID){

    const iframe = document.createElement("iframe");

    iframe.width = "560";
    iframe.height = "315";
    iframe.src = "https://www.youtube.com/embed/" + videoID;
    iframe.allowFullscreen = true;

    container.appendChild(iframe);
}

function createImage(container,src){

    const img = document.createElement("img");

    img.src = src;

    container.appendChild(img);
}