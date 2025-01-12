const menuButton = document.querySelector(".menu_button");
const menu = document.querySelector(".menu");

menuButton.addEventListener("click", function () {
	menu.classList.toggle("active");
});
