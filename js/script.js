///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".mobile-nav-btn");
const headerEl = document.querySelector("header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// smooth scrolling
// let navlinks = document.querySelectorAll("header nav a");

// for (const link of navlinks) {
//   link.addEventListener("click", smoothScroll);
// }

// function smoothScroll(event) {
//   event.preventDefault();

//   const href = this.getAttribute("href");

//   document.querySelector(href).scrollIntoView({
//     behavior: "smooth",
//   });
// }
///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});
