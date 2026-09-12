const toggle = document.querySelector(".nav-toggle");
const page = document.querySelector(".page");

if (toggle) {
  toggle.addEventListener("click", () => {
    const isOpen = page.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll(".nav a").forEach((link) => {
    link.addEventListener("click", () => {
      page.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Accordion per i progetti
document.querySelectorAll(".entry-toggle").forEach((entryToggle) => {
  const panel = document.getElementById(entryToggle.getAttribute("aria-controls"));

  function openPanel() {
    entryToggle.setAttribute("aria-expanded", "true");
    panel.style.maxHeight = panel.scrollHeight + "px";
  }

  function closePanel() {
    entryToggle.setAttribute("aria-expanded", "false");
    panel.style.maxHeight = 0;
  }

  entryToggle.addEventListener("click", () => {
    const isOpen = entryToggle.getAttribute("aria-expanded") === "true";
    isOpen ? closePanel() : openPanel();
  });

  entryToggle.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      entryToggle.click();
    }
  });
});
