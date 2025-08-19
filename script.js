const rainbowText = document.getElementById("rainbow");

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

rainbowText.addEventListener("mouseenter", () => {
  let i = 0;
  rainbowText._interval = setInterval(() => {
    rainbowText.style.color = colors[i % colors.length];
    i++;
  }, 150); // change every 150 ms
});

rainbowText.addEventListener("mouseleave", () => {
  clearInterval(rainbowText._interval);
  rainbowText.style.color = ""; // reset to default
});
