import * as pc from "../../../scripts/projectsOverlay.js";

export function loadProject() {
  const container = document.getElementById("overlayCustom");

  pc.createChapter(container, "Overview", "This is Pod Kartonem project");

  pc.createImage(container, "assets/projects/podKartonem/image.png");
}