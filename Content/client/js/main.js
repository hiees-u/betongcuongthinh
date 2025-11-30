(function ($) {
    "use strict";
    
    /*------ ScrollUp -------- */
    $.scrollUp({
        scrollText: '<i class="icon-arrow-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
    
    /*------ Wow Active ----*/
    new WOW().init();
    
    /*------ Hero slider active 1 ----*/
    $('.hero-slider-active-1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        loop: true,
        dots: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: '<span class="slider-icon-1-prev"><i class="icon-arrow-left"></i></span>',
        nextArrow: '<span class="slider-icon-1-next"><i class="icon-arrow-right"></i></span>',
    });
    
    /*------ Hero slider active 2 ----*/
    $('.hero-slider-active-2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        loop: true,
        dots: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<span class="slider-icon-1-prev"><i class="icon-arrow-left"></i></span>',
        nextArrow: '<span class="slider-icon-1-next"><i class="icon-arrow-right"></i></span>',
    });
    
    /*------ Hero slider active 3 ----*/
    $('.hero-slider-active-3').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        loop: true,
        dots: true,
        arrows: false,
    });
    
    /*------ Product slider active ----*/
    $('.product-slider-active').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    
    /*------ Product slider active 2 ----*/
    $('.product-slider-active-2').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: true,
        rows: 2,
        arrows: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    
    
    /*------ Product slider active 3 ----*/
    function slider_active() {
        $('.product-slider-active-3').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            fade: false,
            loop: true,
            dots: false,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 2000,
            prevArrow: '<span class="pro-slider-icon-1-prev"><i class="icon-arrow-left"></i></span>',
            nextArrow: '<span class="pro-slider-icon-1-next"><i class="icon-arrow-right"></i></span>',
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 2,
                    }
                }
            ]
        });
    }
    slider_active();
    
    /*------ Product slider active 4 ----*/
    $('.product-slider-active-4').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: false,
        arrows: true,
        prevArrow: '<span class="pro-slider-icon-1-prev"><i class="icon-arrow-left"></i></span>',
        nextArrow: '<span class="pro-slider-icon-1-next"><i class="icon-arrow-right"></i></span>',
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    
    /*------ Product slider active 5 ----*/
    $('.product-slider-active-5').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.banner-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });

    /*------ product categories slider 1 ----*/
    $('.product-categories-slider-1').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: false,
        arrows: true,
        prevArrow: '<span class="pro-slider-icon-1-prev"><i class="icon-arrow-left"></i></span>',
        nextArrow: '<span class="pro-slider-icon-1-next"><i class="icon-arrow-right"></i></span>',
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });
    
    /*------ Product categories slider 3 ----*/
    $('.product-categories-slider-3').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: false,
        arrows: true,
        rows: 2,
        prevArrow: '<span class="pro-slider-icon-1-prev"><i class="icon-arrow-left"></i></span>',
        nextArrow: '<span class="pro-slider-icon-1-next"><i class="icon-arrow-right"></i></span>',
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });
    $('.brand-logo-wrap-4').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        infinite: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slickNext: false,
        slickPrev: false,
        prevArrow: '<span class="pro-slider-icon-1-prev"><i class="icon-arrow-left"></i></span>',
        nextArrow: '<span class="pro-slider-icon-1-next"><i class="icon-arrow-right"></i></span>',
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });
    
    
    
    /*--- Language currency active ----
    $('.language-dropdown-active').on('click', function(e) {
        e.preventDefault();
        $('.language-dropdown').slideToggle(400);
    });
    $('.currency-dropdown-active').on('click', function(e) {
        e.preventDefault();
        $('.currency-dropdown').slideToggle(400);
    });
    
    /*--- Countdown timer active ----*/
    $('#timer-1-active , #timer-3-active').syotimer({
        year: 2020,
        month: 10,
        day: 22,
        hour: 8,
        minute: 48,
        layout: 'hms',
        periodic: false,
        periodUnit: 'm'
    });
    
    $('#timer-2-active').syotimer({
        year: 2020,
        month: 10,
        day: 22,
        hour: 8,
        minute: 48,
        layout: 'dhms',
        periodic: false,
        periodUnit: 'm'
    });
    
    /*====== SidebarCart ======*/
    function miniCart() {
        var navbarTrigger = $('.cart-active'),
            endTrigger = $('.cart-close'),
            container = $('.sidebar-cart-active'),
            wrapper = $('.main-wrapper');
        
        wrapper.prepend('<div class="body-overlay"></div>');
        
        navbarTrigger.on('click', function(e) {
            e.preventDefault();
            container.addClass('inside');
            wrapper.addClass('overlay-active');
        });
        
        endTrigger.on('click', function() {
            container.removeClass('inside');
            wrapper.removeClass('overlay-active');
        });
        
        $('.body-overlay').on('click', function() {
            container.removeClass('inside');
            wrapper.removeClass('overlay-active');
        });
    };
    miniCart();

    const mobileSidebarShow = document.querySelector('.sidebar-toggle');

    document.querySelectorAll('.sidebar-toggle').forEach(el => {
        el.addEventListener('click', function (event) {
            event.preventDefault();
            mobileSidebarToogle();
        })
    });

    function mobileSidebarToogle() {
        document.querySelector('body').classList.toggle('mobile-sidebar-active');
    }
    
    /*-------------------------------
	   Header Search Toggle
    -----------------------------------*/
    var searchToggle = $('.search-toggle');
    searchToggle.on('click', function(e){
        e.preventDefault();
        if($(this).hasClass('open')){
           $(this).removeClass('open');
           $(this).siblings('.search-wrap-1').removeClass('open');
           $(this).siblings('.search-wrap').removeClass('open');
        }else{
           $(this).addClass('open');
           $(this).siblings('.search-wrap-1').addClass('open');
           $(this).siblings('.search-wrap').addClass('open');
        }
    })
    
    
    /* NiceSelect */
    $('.nice-select').niceSelect();
     
    
    /*-------------------------
      Category active
    --------------------------*/
    //$('.categori-show').on('click', function(e) {
    //    e.preventDefault();
    //    $('.categori-hide , .categori-hide-2').slideToggle(200);
    //});
    
    /*--------------------------------
        Deal slider active
    -----------------------------------*/
    $('.deal-slider-active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: false,
        arrows: true,
        prevArrow: '<span class="slider-icon-1-prev"><i class="icon-arrow-left"></i></span>',
        nextArrow: '<span class="slider-icon-1-next"><i class="icon-arrow-right"></i></span>',
    });
    
    
    /*--------------------------------
        Sidebar product active
    -----------------------------------*/
    $('.sidebar-product-active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: false,
        rows: 3,
        arrows: true,
        prevArrow: '<span class="sidebar-icon-prev"><i class="icon-arrow-left"></i></span>',
        nextArrow: '<span class="sidebar-icon-next"><i class="icon-arrow-right"></i></span>',
    });
    
    /*--------------------------------
        Sidebar blog active
    -----------------------------------*/
    $('.sidebar-blog-active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: false,
        rows: 2,
        arrows: true,
        prevArrow: '<span class="sidebar-icon-prev"><i class="icon-arrow-left"></i></span>',
        nextArrow: '<span class="sidebar-icon-next"><i class="icon-arrow-right"></i></span>',
    });
    
    /*--------------------------------
        Product categories slider
    -----------------------------------*/
    $('.product-categories-slider-2').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: false,
        arrows: false,
        prevArrow: '<span class="sidebar-icon-prev"><i class="icon-arrow-left"></i></span>',
        nextArrow: '<span class="sidebar-icon-next"><i class="icon-arrow-right"></i></span>',
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });
    
    /*--------------------------------
        Testimonial active
    -----------------------------------*/
    $('.testimonial-active').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        infinite: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        //slickNext: false,
        //slickPrev: false,
        //prevArrow: '<span class="pro-slider-icon-1-prev"><i class="icon-arrow-left"></i></span>',
        //nextArrow: '<span class="pro-slider-icon-1-next"><i class="icon-arrow-right"></i></span>',
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });
    /*--------------------------------
        Testimonial active 2
    -----------------------------------*/
    $('.testimonial-active-2').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        infinite: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3500,
        slickNext: false,
        slickPrev: false,
        prevArrow: '<span class="pro-slider-icon-1-prev"><i class="icon-arrow-left"></i></span>',
        nextArrow: '<span class="pro-slider-icon-1-next"><i class="icon-arrow-right"></i></span>',
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    
    /*--------------------------------
        Product slider active 6
    -----------------------------------*/
    $('.product-slider-active-6').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: true,
        rows: 2,
        arrows: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    
    /*--------------------------------
        Product slider active 7
    -----------------------------------*/
    $('.product-slider-active-7').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: true,
        rows: 2,
        arrows: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    
    /*--------------------------------
        Product slider active 8
    -----------------------------------*/
    $('.product-slider-active-8').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: true,
        arrows: true,
        prevArrow: '<span class="sidebar-icon-prev"><i class="icon-arrow-left"></i></span>',
        nextArrow: '<span class="sidebar-icon-next"><i class="icon-arrow-right"></i></span>',
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    
    /*--------------------------------
        Product slider active 9
    -----------------------------------*/
    $('.product-slider-active-9').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.blog-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<span class="pro-slider-icon-1-prev"><i class="icon-arrow-left"></i></span>',
        nextArrow: '<span class="pro-slider-icon-1-next"><i class="icon-arrow-right"></i></span>',
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    /*------- Color active -----*/
    $('.pro-details-color-content').on('click', 'label', function(e){
        //e.preventDefault();
        $(this).addClass('active').parent().siblings().children('label').removeClass('active');
    });
    $('.pro-details-size-content').on('click', 'label', function (e) {
        //e.preventDefault();
        $(this).addClass('active').parent().siblings().children('label').removeClass('active');
    });
    
    /*--------------------------------
        Social icon active
    -----------------------------------*/
    if ($('.pro-details-action').length) {
        var $body = $('body'),
            $cartWrap = $('.pro-details-action'),
            $cartContent = $cartWrap.find('.product-dec-social');
        $cartWrap.on('click', '.social', function(e) {
            e.preventDefault();
            var $this = $(this);
            if (!$this.parent().hasClass('show')) {
                $this.siblings('.product-dec-social').addClass('show').parent().addClass('show');
            } else {
                $this.siblings('.product-dec-social').removeClass('show').parent().removeClass('show');
            }
        });
        /*Close When Click Outside*/
        $body.on('click', function(e) {
            var $target = e.target;
            if (!$($target).is('.pro-details-action') && !$($target).parents().is('.pro-details-action') && $cartWrap.hasClass('show')) {
                $cartWrap.removeClass('show');
                $cartContent.removeClass('show');
            }
        });
    }
    
    /*---------------------
        Price range
    --------------------- */
    var sliderrange = $('#slider-range');
    var amountprice = $('#amount');
    $(function() {
        sliderrange.slider({
            range: true,
            min: 16,
            max: 400,
            values: [0, 300],
            slide: function(event, ui) {
                amountprice.val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        amountprice.val("$" + sliderrange.slider("values", 0) +
            " - $" + sliderrange.slider("values", 1));
    });

    
    $('#exampleModal').on('shown.bs.modal', function () {
        $('.quickview-slide-active').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            fade: false,
            loop: true,
            dots: false,
            arrows: true,
            prevArrow: '<span class="icon-prev"><i class="icon-arrow-left"></i></span>',
            nextArrow: '<span class="icon-next"><i class="icon-arrow-right"></i></span>',
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 2,
                    }
                }
            ]
        });
        $('.quickview-slide-active a').on('click', function() {
            $('.quickview-slide-active a').removeClass('active');
        })
    })
    
     /*====== Sidebar menu Active ======*/
    function mobileHeaderActive() {
        var navbarTrigger = $('.mobile-header-button-active'),
            endTrigger = $('.sidebar-close'),
            container = $('.mobile-header-active'),
            wrapper4 = $('.main-wrapper');
        
        wrapper4.prepend('<div class="body-overlay-1"></div>');
        
        navbarTrigger.on('click', function(e) {
            e.preventDefault();
            container.addClass('sidebar-visible');
            wrapper4.addClass('overlay-active-1');
        });
        
        endTrigger.on('click', function() {
            container.removeClass('sidebar-visible');
            wrapper4.removeClass('overlay-active-1');
        });
        
        $('.body-overlay-1').on('click', function() {
            container.removeClass('sidebar-visible');
            wrapper4.removeClass('overlay-active-1');
        });
    };
    mobileHeaderActive();
    
    /*---------------------
        mobile-menu
    --------------------- */
    var $offCanvasNav = $('.mobile-menu , .category-menu-dropdown'),
        $offCanvasNavSubMenu = $offCanvasNav.find('.dropdown');
    
    /*Add Toggle Button With Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i></i></span>');
    
    /*Close Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.slideUp();
    
    /*Category Sub Menu Toggle*/
    $offCanvasNav.on('click', 'li a, li .menu-expand', function(e) {
        var $this = $(this);
        if ( ($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand')) ) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length){
                $this.parent('li').removeClass('active');
                $this.siblings('ul').slideUp();
            } else {
                $this.parent('li').addClass('active');
                $this.closest('li').siblings('li').removeClass('active').find('li').removeClass('active');
                $this.closest('li').siblings('li').find('ul:visible').slideUp();
                $this.siblings('ul').slideDown();
            }
        }
    });
    
    
    /*--- checkout toggle function ----*/
    $('.checkout-click1').on('click', function(e) {
        e.preventDefault();
        $('.checkout-login-info').slideToggle(900);
    });
    
    
    /*--- checkout toggle function ----*/
    $('.checkout-click3').on('click', function(e) {
        e.preventDefault();
        $('.checkout-login-info3').slideToggle(1000);
    });
    
    /*-------------------------
    Create an account toggle
    --------------------------*/
    $('.checkout-toggle2').on('click', function() {
        $('.open-toggle2').slideToggle(1000);
    });
    
    $('.checkout-toggle').on('click', function() {
        $('.open-toggle').slideToggle(1000);
    });
    
    /*-------------------------
    checkout one click toggle function
    --------------------------*/
    var checked = $( '.sin-payment input:checked' )
    if(checked){
        $(checked).siblings( '.payment-box' ).slideDown(900);
    };
	 $( '.sin-payment input' ).on('change', function() {
        $( '.payment-box' ).slideUp(900);
        $(this).siblings( '.payment-box' ).slideToggle(900);
    });
    
    
    // Instantiate EasyZoom instances
    //var $easyzoom = $('.easyzoom').easyZoom();
    
    /*-------------------------------------
        Product details big image slider
    ---------------------------------------*/
    $('.pro-dec-big-img-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: false,
        fade: false,
        asNavFor: '.product-dec-slider-small , .product-dec-slider-small-2',
    });
    
    /*---------------------------------------
        Product details small image slider
    -----------------------------------------*/
    $('.product-dec-slider-small').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.pro-dec-big-img-slider',
        dots: false,
        focusOnSelect: true,
        fade: false,
        prevArrow: '<span class="pro-dec-prev"><i class="icon-arrow-left"></i></span>',
        nextArrow: '<span class="pro-dec-next"><i class="icon-arrow-right"></i></span>',
        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 4,
                }
            }
        ]
    });
    
    /*----------------------------------------
        Product details small image slider 2
    ------------------------------------------*/
    $('.product-dec-slider-small-2').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: true,
        asNavFor: '.pro-dec-big-img-slider',
        dots: false,
        focusOnSelect: true,
        fade: false,
        prevArrow: '<span class="pro-dec-prev"><i class="icon-arrow-up"></i></span>',
        nextArrow: '<span class="pro-dec-next"><i class="icon-arrow-down"></i></span>',
        responsive: [{
                breakpoint: 1365,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 4,
                }
            }
        ]
    });
    
    
    /*--
        Magnific Popup
    ------------------------*/
    $('.img-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    
    $('.related-product-active').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    
    /*------------------------
        Sidebar sticky active
    -------------------------- */
    $('.sidebar-active').stickySidebar({
        topSpacing: 0,
        bottomSpacing: 30,
        minWidth: 767, 
    });
    
    /*--- language currency active ----*/
    $('.mobile-language-active').on('click', function(e) {
        e.preventDefault();
        $('.lang-dropdown-active').slideToggle(900);
    });
    $('.mobile-currency-active').on('click', function(e) {
        e.preventDefault();
        $('.curr-dropdown-active').slideToggle(900);
    });
    $('.main-wrapper').each(function () {
        var shop = $(this).hasClass('shop');
        if (shop) {
            $('.menu-blog').remove();
        }
        else {
            $('.menu-shop').remove();
        }
    });
    $(document).scroll(function () {
        var st = $(this).scrollTop();
        if (st > 200) {
            $(".navbar_top").addClass('fixed-top');
        } else {
            $(".navbar_top").removeClass('fixed-top');
        }
    });
    $('.has-child .toggle').on('click', function (e) {
        e.preventDefault();
        $(this).next('.sub-menu').slideToggle(400);
        $(this).closest('.has-child').toggleClass("active");
    });
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
    var preloader = $('#preloader');
    function prealoaderSetup() {
        if (!isMobile) {
            setTimeout(function () {
                preloader.addClass('preloaded');
            }, 800);
            setTimeout(function () {
                preloader.remove();
            }, 2000);

        } else {
            preloader.remove();
        }
    }
    $(window).on('load', function () {
        prealoaderSetup();
    });
    $(function () {
        prealoaderSetup();
        $('[data-toggle="tooltip"]').tooltip()
        var productSwiper = new Swiper(".productSwiper", {
            
            spaceBetween: 10,
            slidesPerView: 4,
            //autoplay: {
            //    delay: 3000,
            //    disableOnInteraction: false
            //},
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                767: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                },
                991: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                },
            },
        });
        var productaccessorySwiper = new Swiper(".product-accessorySwiper", {
            spaceBetween: 10,
            slidesPerView: 2,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                "@0.00": {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                "@0.25": {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                "@0.50": {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                "@0.75": {
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
                "@1.00": {
                    slidesPerView: 6,
                    spaceBetween: 10,
                },
                "@1.50": {
                    slidesPerView: 7,
                    spaceBetween: 10,
                },
            },
        });
        var productmonopolySwiper = new Swiper(".productmonopolySwiper", {
            spaceBetween: 10,
            slidesPerView: 2,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                "@0.00": {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                "@0.25": {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                "@0.50": {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                "@0.75": {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                "@1.00": {
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
                "@1.50": {
                    slidesPerView: 5,
                    spaceBetween: 10,
                },
            },
        });
        var galerySwiper = new Swiper(".galerySwiper", {
            loop: true,
            spaceBetween: 10,
            slidesPerView: 2,
            //autoplay: {
            //    delay: 3000,
            //    disableoninteraction: false
            //},
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                0: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                767: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
                991: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
                1200: {
                    slidesPerView: 6,
                    spaceBetween: 24,
                },
            },
        });
        var productSwiper = new Swiper(".combo-khuyenmai .productSwiper", {
            loop: false,
            spaceBetween: 10,
            slidesPerView: 2,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                "@0.00": {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                "@0.25": {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                "@0.50": {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                "@0.75": {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                "@1.00": {
                    slidesPerView: 5,
                    spaceBetween: 10,
                },
                "@1.50": {
                    slidesPerView: 5,
                    spaceBetween: 10,
                },
            },
        });
        var heroSwiper = new Swiper('.heroSwiper', {
            speed: 400,
            loop: true,
            effect: "creative",
            creativeEffect: {
                prev: {
                    shadow: true,
                    translate: ["-20%", 0, -1],
                },
                next: {
                    translate: ["100%", 0, 0],
                },
            },
            autoplay: {
                delay: 4000,
                disableOnInteraction: false
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            }
        });
        var blogSwiper = new Swiper(".blogSwiper", {
            loop: true,
            spaceBetween: 10,
            slidesPerView: 2,
            //autoplay: {
            //    delay: 3000,
            //    disableOnInteraction: false
            //},
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 24,
                },
                768
                    : {
                    slidesPerView: 2,
                    spaceBetween: 24,
                },
                991: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                }
            },
        });
        var projectSwiper = new Swiper(".projectSwiper", {
            loop: true,
            spaceBetween: 10,
            slidesPerView: 2,
            //autoplay: {
            //    delay: 3000,
            //    disableOnInteraction: false
            //},
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 24,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                },
                991: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                },
                1200: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                }
            },
        });
        var activitySwiper = new Swiper(".activitySwiper", {
            loop: true,
            spaceBetween: 10,
            slidesPerView: 2,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 24,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                },
                991: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                }
            },
        });
        var brandSwiper = new Swiper(".brandSwiper", {
            loop: true,
            spaceBetween: 10,
            slidesPerView: 2,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            
            breakpoints: {
                "@0.00": {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                "@0.50": {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                "@0.75": {
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
                "@1.00": {
                    slidesPerView: 5,
                    spaceBetween: 10,
                },
                "@1.50": {
                    slidesPerView: 5,
                    spaceBetween: 20,
                },
            },
        });
        var valueSwiper = new Swiper(".valueSwiper", {
            spaceBetween: 10,
            slidesPerView: 3,
            //autoplay: {
            //    delay: 3000,
            //    disableOnInteraction: false
            //},
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 24,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                },
                991: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                }
            },
        });
    })
    $('.has-dropdown-categori span').on('click', function (e) {
        e.preventDefault();
        $(this).next('.submenu-categori').slideToggle(500);
        $(this).closest('.has-dropdown-categori').toggleClass("active");
        
    });

    $(".nav-slide .nav-slide-next").click(function () {
        $(this).closest(".nav-slide-btn").find(".swiper-button-next").trigger("click")
    });
    $(".nav-slide .nav-slide-prev").click(function () {
        $(this).closest(".nav-slide-btn").find(".swiper-button-prev").trigger("click")
    });
    
})(jQuery);

