$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows: false,
        mobileFirst: true,
    });
});
/* $(document).ready(function() {
    var slider = $('#slider').lightSlider({
        item: 1,
        auto: true,
        slideMove: 1,
        speed: 5000,
        loop: true,
        controls: false,
        slideWidth: 900
    });
    $('.prev').click(function(){
        slider.goToPrevSlide(); 
    });
    $('.next').click(function(){
        slider.goToNextSlide(); 
    });
}); */