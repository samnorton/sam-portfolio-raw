/*
    Website Name: Sam Norton | Full Stack Developer / Virtual Assistant
	Author: Sam Norton
    Author URI: https://www.niconorton.com
    
*/

(function ($) {
    "use strict";
    
    var windows = $(window);

    /* preloader */
    setTimeout(function(){
		$('body').addClass('loaded');
		$('h1').css('color','#222222');
	}, 1000);
	

    /* header sticky */
    var stickyHeader = $(".sticky-header");
    windows.on('scroll', function () {
        var winPosition = windows.scrollTop();
        if (winPosition > 0) {
            stickyHeader.addClass("fixed-top");
        } else {
            stickyHeader.removeClass("fixed-top");
        }
    });

    /* AOS */
    AOS.init();

    /* tesimonial slider */
    $(".testimonial-slider").owlCarousel({
        autoplayHoverPause: true,
        loop: true,
        smartSpeed: 500,
        autoplay: false,
        animateIn: 'fadeInUp',
        center: true,
        dots: false,
        navigation: false,
        items: 1,
    });

    /* blog slider */
    $(".blog-slider").owlCarousel({
        autoplayHoverPause: true,
        loop: false,
        smartSpeed: 500,
        autoplay: false,
        dots: false,
        nav: false,
        items: 3,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1024: {
                items: 3
            },
        },
    });

    /* back to top */
    $('#back-to-top').on('click', function () {
        $("html, body").animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    /*  nav scroll */
    $('.main-nav').on('click', '.mobile-nav-toggle', function (e) {
        e.preventDefault();
        $('.main-nav ul').slideToggle('fast');
    });
    
    $('.main-nav').navScroll({
        mobileDropdown: true,
        mobileBreakpoint: 991,
        scrollSpy: true,
        navHeight: 82,
    });

    /* map activation*/
    if($('#map').length) {
        function initialize() {
            var map = new google.maps.Map(document.getElementById('map'), {
                center: {
                    lat: 15.1463554,
                    lng: 120.5245996
                },
                zoom: 10,
                styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#d3d3d3"},{"lightness":50}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":50},{"color":"#000000"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#4c4c4c"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#4c4c4c"},{"lightness":17},{"weight":1.2}]}]
            });
            var marker = new google.maps.Marker({
                position: map.getCenter(),
                animation: google.maps.Animation.BOUNCE,
                icon: 'assets/images/map-marker.png',
                map: map
            });
        }
        google.maps.event.addDomListener(window, 'load', initialize);
    }
})(jQuery);