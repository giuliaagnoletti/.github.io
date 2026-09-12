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

// Carosello foto per ogni progetto
document.querySelectorAll("[data-carousel]").forEach((carousel) => {
  const track = carousel.querySelector(".carousel-track");
  const slides = carousel.querySelectorAll(".carousel-slide");
  const dots = carousel.querySelectorAll(".dot");
  const prev = carousel.querySelector(".prev");
  const next = carousel.querySelector(".next");
  let index = 0;

  function update() {
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle("active", i === index));
  }

  prev.addEventListener("click", (e) => {
    e.stopPropagation();
    index = (index - 1 + slides.length) % slides.length;
    update();
  });

  next.addEventListener("click", (e) => {
    e.stopPropagation();
    index = (index + 1) % slides.length;
    update();
  });

  dots.forEach((d, i) => d.addEventListener("click", (e) => {
    e.stopPropagation();
    index = i;
    update();
  }));
});
