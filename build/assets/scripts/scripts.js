new Swiper('.promo-swiper', {
    loop: true,
    slidesPerView: 1.8,
    spaceBetween: 16,
    navigation: {
      nextEl: '.promo-swiper-button-next',
      prevEl: '.promo-swiper-button-prev',
    },
    breakpoints: {
        1440: {
        slidesPerView: 5,
        spaceBetween: 10,
    }},
});

new Swiper('.banner', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
    breakpoints: {
        1440: {
        slidesPerView: 2,
    }},
})

new Swiper('.history-swiper', {
    loop: true,
    slidesPerView: 1.8,
    spaceBetween: 20,
    navigation: {
      nextEl: '.history-swiper-button-next',
      prevEl: '.history-swiper-button-prev',
    },
    breakpoints: {
        1440: {
        slidesPerView: 5,
        spaceBetween: 10,
    }},
});