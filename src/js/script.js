const swiperSecond = new Swiper('.swiper_2', {
	slidesPerView: 5,
});

const swiperFirst = new Swiper('.swiper_1', {
	thumbs: {
		swiper: swiperSecond,
	},
});

