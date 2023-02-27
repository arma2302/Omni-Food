///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".mobile-nav-btn");
const headerEl = document.querySelector("header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
