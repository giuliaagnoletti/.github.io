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
