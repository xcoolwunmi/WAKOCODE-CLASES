
// ==========================
//  Editable Launch Date
// ==========================
const launchDate = new Date("2025-12-20T14:30:00");

// ==========================
//  Countdown Logic
// ==========================
function updateCountdown() {
  const now = new Date();
  const diff = launchDate - now;

  if (diff <= 0) {
    document.getElementById("navbarCountdown").textContent = "LAUNCHED";
    document.getElementById("mainCountdown").textContent = "LAUNCHED";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const formatted = `T-${String(days).padStart(2, "0")}D ${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  document.getElementById("navbarCountdown").textContent = formatted;
  document.getElementById("mainCountdown").textContent = formatted;
}
setInterval(updateCountdown, 1000);
updateCountdown();

// ==========================
//  Fade-Up Animation on Scroll
// ==========================
const animatedElements = document.querySelectorAll("[data-animate]");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-y-6");
        entry.target.classList.add("opacity-100", "translate-y-0");
      }
    });
  },
  { threshold: 0.2 }
);

animatedElements.forEach((el) => observer.observe(el));

// ==========================
//  Mobile Menu Toggle
// ==========================
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// ==========================
//  Mobile Vehicles Dropdown
// ==========================
const mobileVehiclesBtn = document.getElementById("mobileVehiclesBtn");
const mobileDropdown = document.getElementById("mobileDropdown");

mobileVehiclesBtn.addEventListener("click", () => {
  mobileDropdown.classList.toggle("hidden");
});

