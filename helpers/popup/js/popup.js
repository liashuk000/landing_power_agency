// for one popup
/*
const popupButton = document.querySelector("[data-popup-button]");
const popup = document.querySelector("[data-popup]");
const popupWindow = document.querySelector("[data-popup-window]");
const popupClose = document.querySelector("[data-popup-close]");

popupButton.addEventListener("click", function () {
	popup.classList.add("active");
});

popupClose.addEventListener("click", function () {
	popup.classList.remove("active");
});

popup.addEventListener("click", function () {
	popup.classList.remove("active");
});

popupWindow.addEventListener("click", function(event){
	event.stopPropagation();
})
*/

// for many popups

const popupButtonAll = document.querySelectorAll("[data-popup-button]");
const popupAll = document.querySelectorAll("[data-popup]");

popupButtonAll.forEach(function (element) {
	element.addEventListener("click", function (event) {
		document.querySelector("#" + event.target.dataset.popupButton).classList.add("active");
	});
});

popupAll.forEach(function (element) {
	element.querySelector("[data-popup-close]").addEventListener("click", function () {
		element.classList.remove("active");
	});
	element.querySelector("[data-popup-window]").addEventListener("click", function (event) {
		event.stopPropagation();
	});
	element.addEventListener("click", function () {
		element.classList.remove("active");
	});
});
