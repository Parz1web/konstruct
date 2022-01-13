/*jshint esversion: 6*/

let headerSubnav = document.querySelector(".header-subnav");
let burgerBtn = document.querySelector(".burger-btn");

burgerBtn.addEventListener("click", () => {
  headerSubnav.classList.toggle("open");
});
