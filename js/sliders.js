const swiper = new Swiper('.slider--all', {
    navigation: {
        nextEl: '.main__slider-arrows--next',
        prevEl: '.main__slider-arrows--prev'
    }
})

$('.main__slider-arrows--text > span:last-child').html(swiper.slidesSizesGrid.length)

swiper.on('slideChange', function () {
    $('.main__slider-arrows--text > span:first-child').html(swiper.activeIndex + 1)
})

const swiper2 = new Swiper('.next-slider', {
    navigation: {
        prevEl: '.gallery__slider-prev',
        nextEl: '.gallery__slider-next'
    }
})

const swiper3 = new Swiper('.news--slider', {
    navigation: {
        prevEl: '.news--prev',
        nextEl: '.news--next'
    },
    breakpoints: {
        360: {
            slidesPerView: 1
        },
        500: {
            slidesPerView: 2
        },
        850: {
            slidesPerView: 3
        }
    }
})

const swiper4 = new Swiper('.services__slider-field', {
    spaceBetween: 30,
    loop: true,
    navigation: {
        prevEl: '.serv--prev',
        nextEl: '.serv--next'
    },
    breakpoints: {
        360: {
            slidesPerView: 1
        },
        500: {
            slidesPerView: 2
        },
        700: {
            slidesPerView: 3
        },
        1000: {
            slidesPerView: 4
        }
    }
})