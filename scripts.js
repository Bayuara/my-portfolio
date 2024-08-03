document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("navbar-nav");

  menuToggle.addEventListener("click", function (event) {
    event.stopPropagation();
    menuToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  document.addEventListener("click", function (event) {
    if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
      navMenu.classList.remove("active");
      menuToggle.classList.remove("active");
    }
  });
});

// wkwkwkwkwk
