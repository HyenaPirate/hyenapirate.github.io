import * as pc from "../../../scripts/projectsOverlay.js";

export function loadProject() {
  const container = document.getElementById("overlayCustom");

  pc.createChapter(container, "Chapter 1", "This is a test. Will see how it will work.");

  pc.createImage(container, "assets/projects/podKartonem/ThumbnailE05.jpg");

  pc.createChapter(container, "Chapter 2", "Sure hope the formatting will be aight");

  pc.createImage(container, "assets/projects/podKartonem/ThumbnE06.jpg", "this is a pogge thumbnail");

  pc.createImage(container, "assets/projects/podKartonem/ThumbE07.jpg");
}