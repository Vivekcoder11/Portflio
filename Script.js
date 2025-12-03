// Theme toggle
const htmlEl = document.documentElement;
const themeToggleBtn = document.getElementById("theme-toggle");
const navLinks = document.querySelector(".nav-links");
const menuToggleBtn = document.getElementById("menu-toggle");

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  htmlEl.setAttribute("data-theme", savedTheme);
  themeToggleBtn.textContent = savedTheme === "dark" ? "☀️" : "🌙";
}

// Switch theme
themeToggleBtn.addEventListener("click", () => {
  const current = htmlEl.getAttribute("data-theme") || "light";
  const next = current === "light" ? "dark" : "light";
  htmlEl.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  themeToggleBtn.textContent = next === "dark" ? "☀️" : "🌙";
});

// Mobile menu
menuToggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Close menu on link click (mobile)
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navLinks.classList.remove("show");
  }
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// (Optional) Prevent real submit for now
const contactForm = document.querySelector(".contact-form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you, your message has been noted (demo only).");
  contactForm.reset();
});
