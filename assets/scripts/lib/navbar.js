const navToggle = document.querySelector(".nav-toggle");
const mobileNav = document.querySelector(".navbar");

export function initNavbar() {
  navToggle.addEventListener("click", () => {
    mobileNav.classList.toggle("open");
    navToggle.classList.toggle("open");
    document.querySelector("body").classList.toggle("scrolling-disabled");
  });

  // Select active navbar link
  document
    .querySelector(`nav a[href^="/${location.pathname.split("/")[1]}"]`)
    ?.classList.add("active");
}
