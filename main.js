import "./style.css";

// grab elements
const textContainers = document.querySelectorAll(".text-container");

// duplicate and append text content
textContainers.forEach((container) => {
  const span = container.querySelector("span");
  const bottomText = span.cloneNode(true);
  bottomText.classList.replace("top-text", "bottom-text");
  container.appendChild(bottomText);
});
