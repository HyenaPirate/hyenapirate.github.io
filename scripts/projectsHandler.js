function createProjectCard(project) {
    const card = document.createElement("button");
    card.classList.add("projectCard");

    const img = document.createElement("img");
    img.src = project.img;

    const title = document.createElement("h1");
    title.classList.add("cardTitle");
    title.textContent = project.title;

    card.append(img, title);

    card.addEventListener("click", () =>{showProjectOverlay(project);})
    return card;
}

// Example usage
function renderCards() {
    const container = document.getElementById("projectsBox");
    container.innerHTML = ""; // clear previous cards
    projectCards.forEach(project => container.appendChild(createProjectCard(project)));
}

function showToast(message) {
    const toast = document.createElement("div");
    toast.classList.add("toast");
    toast.textContent = message;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 1000);
}

async function showProjectOverlay(project){

    document.getElementById("overlayTitle").textContent = project.title;
    document.getElementById("overlayImage").src = project.img;

    document.getElementById("overlayCustom").innerHTML = "";

    document.getElementById("projectOverlay").style.display = "flex";

    const module = await import(project.file);

    module.loadProject();

}

document.getElementById("overlayClose").addEventListener("click", () =>{
    document.getElementById("projectOverlay").style.display = "none";
});

document.getElementById("projectOverlay").addEventListener("click", (e)=>{
    if(e.target.id === "projectOverlay"){
      e.target.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", renderCards);

