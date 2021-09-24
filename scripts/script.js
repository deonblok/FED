// JavaScript Document
var navButton = document.querySelector("nav button");

navButton.addEventListener("click", verschijnMenu);

function verschijnMenu(event) {
  deNav = event.target.parentNode;
  deNav.classList.toggle("verschijnMenu");
}