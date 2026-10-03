const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-links a");
const header = document.getElementById("header");
const topBtn = document.getElementById("topBtn");
const year = document.getElementById("year");
const form = document.getElementById("contactForm");

// Mobile menu
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const open = navLinks.classList.contains("open");
  menuBtn.setAttribute("aria-expanded", open);
  menuBtn.innerHTML = open
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
});

// Close mobile menu after clicking a link
navItems.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

    navItems.forEach(item => item.classList.remove("active"));
    link.classList.add("active");
  });
});

// Scroll effects
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 40);
  topBtn.classList.toggle("show", window.scrollY > 500);
});

// Back to top
topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Reveal animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Demo contact form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thanks! Your message has been received.");
  form.reset();
});

year.textContent = new Date().getFullYear();
