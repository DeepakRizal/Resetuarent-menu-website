document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navDropdown = document.getElementById("nav-dropdown");

  hamburger.addEventListener("click", () => {
    navDropdown.classList.toggle("show");
  });
});
