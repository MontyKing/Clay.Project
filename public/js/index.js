const burgerMenu = document.getElementById("burger-menu");
const mobileMenu = document.getElementById("mobile-menu");

burgerMenu.addEventListener("click", function extendMenu() {
  if (mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.remove("hidden");
  } else {
    mobileMenu.classList.add("hidden");
  }
});
