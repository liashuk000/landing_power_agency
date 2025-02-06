if (typeof Swiper === 'function') {
	const swiperSecond = new Swiper('.swiper_2', {
		slidesPerView: 5,
		loop: true,
	});

	const swiperFirst = new Swiper('.swiper_1', {
		initialSlide: 2,
		thumbs: {
			swiper: swiperSecond,
		},
	});

	const swiperThird = new Swiper('.swiper_3', {
		slidesPerView: 5,
		loop: true,
		spaceBetween: 100,
		autoplay: {
			delay: 1000,
			disableOnInteraction: true,
		},
	});
}
