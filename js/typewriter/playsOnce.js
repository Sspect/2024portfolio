document.querySelectorAll(".container3-inner").forEach(container => {
  container.addEventListener("mouseenter", () => {
    const typewriter = container.querySelector(".typewriter");
    if (typewriter && !typewriter.classList.contains("played")) {
      typewriter.classList.add("played");
      typewriter.style.animation =
        `typing var(--speed) steps(var(--n)) forwards var(--delay),
         caret .7s step-end infinite var(--delay)`;
    }
  });
});
