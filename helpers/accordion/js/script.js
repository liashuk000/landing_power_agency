// v1 without collapse all
/*
const accordionTitleAll = document.querySelectorAll("[data-accordion-title]");

accordionTitleAll.forEach(function (item) {
	item.onclick = function () {
		item.classList.toggle("active");
	};
});
*/

function accordion(accordionBlockSelector) {
	const accordionTitleAll = document.querySelectorAll(accordionBlockSelector + " [data-accordion-title]");

	accordionTitleAll.forEach(function (item) {
		item.addEventListener("click", function () {
			if (item.classList.contains("active")) {
				item.classList.remove("active");
				return;
			} else {
				accordionTitleAll.forEach(function (i) {
					i.classList.remove("active");
				});
				item.classList.add("active");
			}
		});
	});
}

accordion(".accordionTest1");
accordion(".accordionTest2");


