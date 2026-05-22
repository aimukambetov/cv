const downloadButton = document.querySelector(".bottom-button");
const profileButton = document.querySelector(".icon-button");

downloadButton?.addEventListener("click", () => {
  window.print();
});

profileButton?.addEventListener("click", () => {
  document.querySelector(".contact-pills")?.scrollIntoView({ behavior: "smooth" });
});
