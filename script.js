const menu = document.querySelector("#menu");
const nav = document.querySelector(".navbar ul");
const navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  nav.classList.toggle("slide");
});

nav.addEventListener("click", () => {
  menu.classList.remove("fa-times");
  nav.classList.remove("slide");
});

AOS.init();
