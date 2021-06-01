const burgerMenu = document.getElementById("burger-menu");
const menuList = document.getElementById("list-menu")

burgerMenu.addEventListener("click", function extendMenu() {
    if (menuList.classList.contains("hidden")) {
        menuList.classList.remove("hidden")
    }
    else {
        menuList.classList.add("hidden")
    }
});