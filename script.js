// ===== Scroll Animation =====

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  {
    threshold: 0.15,
  },
);

sections.forEach((section) => {
  section.style.opacity = "0";

  section.style.transform = "translateY(40px)";

  section.style.transition = "0.6s ease";

  observer.observe(section);
});

// ===== Smooth Scrolling for Navigation =====

document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// ===== Update Footer Year Automatically =====

const footer = document.querySelector("footer p");

if (footer) {
  const year = new Date().getFullYear();

  footer.innerHTML = `© ${year} Polo Mari Darrel Illut`;
}
// ===== Back to Top Button =====
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});