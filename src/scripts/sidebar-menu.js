const menu = document.querySelector(".sidebar-menu");
const burger = document.querySelector(".burger-menu");
const close = menu.querySelector(".sidebar-menu__close");
const menuItems = menu.querySelectorAll(".sidebar-menu__item");


burger.addEventListener("click", () => {
  menu.style.right = 0;
});

function closeSidebarMenu() {
  menu.style.right = "-100%";
}

close.addEventListener("click", closeSidebarMenu);

Array.from(menuItems).forEach(item => {
  item.addEventListener("click", closeSidebarMenu);
});
