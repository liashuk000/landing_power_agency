/* 
const tabsNavAll = document.querySelectorAll("[data-tab]");
const tabsContentAll = document.querySelectorAll("[data-tab-content]");

tabsNavAll.forEach(function (item) {
	item.addEventListener("click", function (event) {
		if (item.classList.contains("active")) return;

		tabsNavAll.forEach((i) => {
			i.classList.remove("active");
		});

		item.classList.add("active");

		tabsContentAll.forEach((i) => {
			i.classList.remove("active");
		});

		document.querySelector("#" + event.target.dataset.tab).classList.add("active");
	});
});
*/

function tabs(tabsBlockSelector) {
	const tabsNavAll = document.querySelectorAll(tabsBlockSelector + " [data-tab]");
	const tabsContentAll = document.querySelectorAll(tabsBlockSelector + " [data-tab-content]");

	tabsNavAll.forEach(function (item) {
		item.addEventListener("click", function (event) {
			if (item.classList.contains("active")) return;

			tabsNavAll.forEach((i) => {
				i.classList.remove("active");
			});

			item.classList.add("active");

			tabsContentAll.forEach((i) => {
				i.classList.remove("active");
			});

			document.querySelector("#" + event.target.dataset.tab).classList.add("active");
		});
	});
}

tabs(".tabsBlock1");
tabs(".tabsBlock2");
