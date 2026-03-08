document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".NavButton");
    const boxes = document.querySelectorAll(".introductionBox, .projectsBox, .skillsBox");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const targetId = button.dataset.target;

            boxes.forEach(box => {
                if (box.id === targetId) {
                    box.classList.add("active");
                } else {
                    box.classList.remove("active");
                }
            });
        });
    });
});