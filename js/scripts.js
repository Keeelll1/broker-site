

$(document).ready(function () {
    aboutToggle()
    aboutToggleResize()

    $(window).resize(function () {
        aboutToggleResize()
    });

    if ($('.offers-promotions__slider').length && typeof Swiper !== 'undefined') {
        new Swiper('.offers-promotions__slider', {
            spaceBetween: 10,
            slidesPerView: 1,
            watchOverflow: true,
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                450: {
                    slidesPerView: 'auto',
                    spaceBetween: 15,
                },
                1280: {
                    slidesPerView: 4,
                }
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
        });
    };

    let isMobile = window.matchMedia('screen and (max-width: 1199px)').matches;

    if (isMobile) {
        setTimeout(() => {
            $('.header__nav').animate({
                scrollLeft: 70,
            }, 500, function () {
                $('.header__nav').animate({
                    scrollLeft: 0,
                }, 500);
            });
        }, 2000);
    }
})

function aboutToggle() {
    $('[data-about-btn]').click(function () {
        $(this).toggleClass('about-block__title--slide');
        $(this).siblings('[data-about-text]').slideToggle()
    })
}

function aboutToggleResize() {
    if ($('[data-about-text]').length) {
        if ($(window).width() < 992) {
            $('[data-about-text]').slideUp()
        } else {
            $('[data-about-text]').slideDown()
        }
    }
}

$(document).ready(function () {
    accordeonWork()
})

function accordeonWork() {
    $('[data-accordeon-btn]').click(function () {
        $(this).toggleClass('accordeon__item-btn--active')
        $(this).siblings('[data-accordeon-toggle]').slideToggle()

        $('[data-accordeon-btn]').not(this).removeClass('accordeon__item-btn--active')
        $('[data-accordeon-btn]').not(this).siblings('[data-accordeon-toggle]').slideUp()
    })
}

$(document).ready(function () {
    grayBlockMore()
    grayBlockMoreClick()
    $(window).resize(function () {
        grayBlockMore()
    })
})


function grayBlockMore() {

    if ($('[data-more-holder]').length) {
        $('[data-more-holder]').each(function () {
            if ($(window).width() < 992) {

                if ($(this).find('[data-more-item]').length > 3) {
                    if (!$(this).find('[data-more-btn-holder]').length) {
                        $(this).append('<div class="more-btn" data-more-btn-holder=""><span class="btn btn--bronze-border about__btn" data-more-btn-item="">Показать все</span></div>')
                    }

                    if ($(this).find('[data-more-item]').parents('.swiper-slide').length) {
                        if ($(window).width() < 576) {
                            $(this).find('[data-more-item]').parents('.swiper-slide').fadeIn(0)
                            $(this).find('[data-more-item]').parents('.swiper-slide:nth-child(n+4)').fadeOut(0)
                        } else {
                            $(this).find('[data-more-item]').parents('.swiper-slide').fadeIn(0)
                            $(this).find('[data-more-item]').parents('.swiper-slide:nth-child(n+5)').fadeOut(0)
                        }
                    } else {
                        if ($(window).width() < 576) {
                            $(this).find('[data-more-item]').fadeIn(0)
                            $(this).find('[data-more-item]:nth-child(n+4)').fadeOut(0)
                        } else {
                            $(this).find('[data-more-item]').fadeIn(0)
                            $(this).find('[data-more-item]:nth-child(n+5)').fadeOut(0)
                        }
                    }
                }

                if ($(this).is('[data-more-slider]')) {
                    $(this).addClass('grid-list grid-list--four')
                    $(this).parents('[data-slider]').find('[data-slider-next], [data-slider-prev]').fadeOut()
                    $(this).parents('.slider-default__overflow').removeClass('slider-default__overflow--gradient-bg')
                }

            } else {
                if ($('[data-more-holder]').data('more-holder') == 'service-list') {
                    if ($(this).find('[data-more-item]').length > 8) {
                        if (!$(this).find('[data-more-btn-holder]').length) {
                            $(this).append('<div class="more-btn" data-more-btn-holder=""><span class="btn btn--black-border about__btn" data-more-btn-item="">Показать все</span></div>')
                        }
                        $(this).find('[data-more-item]').fadeIn(0)
                        $(this).find('[data-more-item]:nth-child(n+9)').fadeOut(0)
                    }
                } else {
                    if ($('[data-more-btn-holder]').length) {
                        $('[data-more-btn-holder]').remove()
                        $('[data-more-item]').fadeIn(0)
                    }

                    if ($(this).is('[data-more-slider]')) {
                        $(this).removeClass('grid-list grid-list--four')
                        $(this).parents('[data-slider]').find('[data-slider-next], [data-slider-prev]').fadeIn()
                        $(this).parents('.slider-default__overflow').addClass('slider-default__overflow--gradient-bg')
                    }
                }
            }
        })
    }
}

function grayBlockMoreClick() {
    $(document).on('click', '[data-more-btn-item]', function (e) {
        let parent = $(e.currentTarget).parents('[data-more-holder]')
        $(e.currentTarget).toggleClass('about__btn--active')
        if ($(e.currentTarget).hasClass('about__btn--active')) {
            $(e.currentTarget).text('Свернуть')
        } else {
            $(e.currentTarget).text('Показать все')
        }

        if ($(window).width() < 576) {
            if ($(parent).find('[data-more-item]').parents('.swiper-slide').length) {
                $(parent).find('[data-more-item]').parents('.swiper-slide:nth-child(n+4)').fadeToggle(0)
            } else {
                $(parent).find('[data-more-item]:nth-child(n+4)').fadeToggle(0)
            }

        } else {

            if ($(parent).data('more-holder') == 'service-list') {
                $(parent).find('[data-more-item]:nth-child(n+9)').fadeToggle(0)
            } else {
                if ($(parent).find('[data-more-item]').parents('.swiper-slide').length) {
                    $(parent).find('[data-more-item]').parents('.swiper-slide:nth-child(n+5)').fadeToggle(0)
                } else {
                    $(parent).find('[data-more-item]:nth-child(n+5)').fadeToggle(0)
                }

            }
        }
    })
}

$(document).ready(function () {
    openBurger()
    headerScroll()
    resizeBurger()
    $(window).scroll(function () {
        headerScroll()
    });

    $(window).resize(function () {
        resizeBurger()
    });
})

function openBurger() {
    $('[data-header-burger]').click(function () {
        $(this).toggleClass('header__burger--active')
        $(this).siblings('[data-burger-menu]').slideToggle()
    })

}

function resizeBurger() {
    if ($('[data-burger-menu]').length) {
        if ($(window).width() > 1199) {
            $('[data-burger-menu]').slideDown()
        } else {
            $('[data-burger-menu]').slideUp()
            $(document).mouseup(function (e) {
                if ($('[data-header-burger]').hasClass('header__burger--active')) {
                    var drop = $("[data-burger-menu], [data-header-burger]");
                    if (!drop.is(e.target) && drop.has(e.target).length === 0) {
                        $('[data-header-burger]').removeClass('header__burger--active')
                        $('[data-burger-menu]').slideUp()
                    }
                }
            });
        }
    }
}

function headerScroll() {
    if ($('[data-header]').length) {
        if ($(window).width() > 1199) {
            if ($(window).scrollTop() > 67) {
                $('[data-header-top]').addClass('header__top--hide');
                $('[data-open-search]').addClass('header__search-icon--hidden');
                $('[data-header]').addClass('header--fix');
                $('[data-submenu]').addClass('header__drop--fix');
            } else {
                $('[data-header-top]').removeClass('header__top--hide');
                $('[data-open-search]').removeClass('header__search-icon--hidden');
                $('[data-header]').removeClass('header--fix');
                $('[data-submenu]').removeClass('header__drop--fix');
            }
        } else {
            if ($(window).scrollTop() > 86) {
                $('[data-header-top]').removeClass('header__top--hide');
                $('[data-header-search]').addClass('header__search--hidden');
                $('[data-header]').addClass('header--fix');
                $('[data-submenu]').addClass('header__drop--fix');
            } else {
                $('[data-header-search]').removeClass('header__search--hidden');
                $('[data-header]').removeClass('header--fix');
                $('[data-submenu]').removeClass('header__drop--fix');
            }
        }
    }
}

function setArticleSwiper() {
    let isNotMobile = window.matchMedia('screen and (max-width: 991px)').matches;
    let sContainer = document.querySelector('[data-slider="articleSlider"] .swiper-container');
    let s;
    if (sContainer) {
        s = sContainer.swiper;
    }
    if (isNotMobile) {
        if (!s) {
            sliderDefault('articleSlider', 30, 10, 3, 3, 2, 'auto', 'auto', false, false);
        }
    } else {
        if (s) {
            s.destroy();
        }
    }
}

$(document).ready(function () {
    //
    setArticleSwiper();

    $(window).resize(() => {
        setArticleSwiper();
    });


    sliderDefault('workerSlider', 30, 10, 'auto', 2, 2, 'auto', 'auto', false, true);
    sliderDefault('checkHistorySlider', 30, 10, 'auto', 'auto', 'auto', 'auto', 'auto', false, false);
    sliderDefault('bestDeals', 30, 10, 3, 3, 2, 'auto', 'auto', false, false);
})
var sliderDefaultSwiper

function sliderDefault(nameSlider, spaceBetween, spaceBetween992, breakpoints1200, breakpoints992, breakpoints768, breakpoints575, breakpointsmin, autoHeight, sliderLoop) {

    if ($(`[data-slider=${nameSlider}]`).length) {

        $(`[data-slider=${nameSlider}]`).each(function (i, currentSlider) {

            let arrowNext = $(`[data-slider-next=${nameSlider}]`);
            let arrowPrev = $(`[data-slider-prev=${nameSlider}]`);
            let pagination = $(`[data-slider-pagination=${nameSlider}]`);

            sliderDefaultSwiper = new Swiper($(currentSlider).find('.swiper-container'), {
                slidesPerView: breakpointsmin,
                spaceBetween: spaceBetween992,
                watchOverflow: true,
                autoHeight: autoHeight,
                loop: sliderLoop,
                navigation: {
                    nextEl: $(currentSlider).find(arrowNext)[0],
                    prevEl: $(currentSlider).find(arrowPrev)[0],
                },
                pagination: {
                    el: $(currentSlider).find(pagination)[0],
                    type: "fraction",
                },
                breakpoints: {
                    575: {
                        slidesPerView: breakpoints575,
                        spaceBetween: spaceBetween992
                    },
                    768: {
                        slidesPerView: breakpoints768,
                        spaceBetween: spaceBetween992
                    },
                    992: {
                        slidesPerView: breakpoints992,
                        spaceBetween: spaceBetween992
                    },
                    1200: {
                        slidesPerView: breakpoints1200,
                        spaceBetween: spaceBetween,
                    }
                }
            });

            sliderDefaultSwiper.on('slideChange', function () {
                if ($(currentSlider).hasClass('.slider-default__overflow')) {
                    if ($(currentSlider).find(`[data-slider-next=${nameSlider}]`).hasClass('swiper-button-disabled')) {
                        $(currentSlider).find('.slider-default__overflow').removeClass('slider-default__overflow--gradient-bg')
                    } else {
                        $(currentSlider).find('.slider-default__overflow').addClass('slider-default__overflow--gradient-bg')
                    }
                }
            });
        });
    }
}

let selector = document.querySelector("#tel")
let im = new Inputmask("+7 (999) 999-99-99")
im.mask(selector)

let validation = new JustValidate("form")

validation.addField("#name", [
    {
        rule: "required",
        errorMessage: "Введите имя!"
    },
    {
        rule: "minLength",
        value: 2,
        errorMessage: "Минимум 2 символа!"
    }
]).addField("#tel", [
  {
    validator: (value) => {
      const phone = selector.inputmask.unmaskedvalue()
      return Boolean(Number(phone) && phone.length > 0)
    },
    errorMessage: 'Введите телефон'
  },
  {
    validator: (value) => {
      const phone = selector.inputmask.unmaskedvalue()
      return Boolean(Number(phone) && phone.length === 10)
    },
    errorMessage: 'Введите телефон полностью'
  }
]).addField("#msg", [
  {
    rule: "required",
    errorMessage: "Введите сообщение!"
  }
]).onSuccess(async function() {
    let data = {
        name: document.getElementById("name").value,
        tel: document.getElementById("tel").value,
        msg: document.getElementById("msg").value
    }

    let response = await fetch("mail.php", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })

    let result = await response.text()
    
    alert(result)
})

const popup = () => {
    const openBtn = document.querySelectorAll('.btn__form'),
        overlay = document.querySelector('.overlay'),
        closeBtn = document.querySelector('.cross'),
        body = document.querySelector('body'),
        html = document.querySelector('html')

    openBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            overlay.classList.add('open')
            body.classList.add('no-scroll')
            html.classList.add('no-scroll')
        })

        closeBtn.addEventListener('click', () => {
            overlay.classList.remove('open')
            body.classList.remove('no-scroll')
            html.classList.remove('no-scroll')
        })
    })
}

popup()