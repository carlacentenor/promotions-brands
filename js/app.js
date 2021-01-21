let slider = document.querySelector('.brands-js');


$(document).ready(function () {
    if(window.matchMedia("(max-width: 768px)")){
        $('.brands-slider-mobile').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            centerMode: true,
            centerPadding: '60px',
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false
    
        });
    }
    else{
        $('.brands-slider-mobile').slick('unslick');
    }
   
});