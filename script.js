const downloadButton = document.querySelector(".bottom-button");
const profileButton = document.querySelector(".icon-button");

downloadButton?.addEventListener("click", () => {
  window.print();
});

profileButton?.addEventListener("click", () => {
  document.querySelector(".contact-pills")?.scrollIntoView({ behavior: "smooth" });
});

// Staggered card reveal
if ("IntersectionObserver" in window) {
  document.documentElement.classList.add("stagger");

  const cards = document.querySelectorAll(
    ".card, .photo-card, .bottom-button, .outside-heading, .role-tag"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = Array.from(cards).indexOf(entry.target);
          entry.target.style.setProperty("--i", delay);
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );

  cards.forEach((el) => observer.observe(el));
}
