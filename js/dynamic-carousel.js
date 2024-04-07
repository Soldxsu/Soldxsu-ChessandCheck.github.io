$(document).ready(function() {
    $('.carousel').carousel({
        interval: 3000, 
        pause: 'hover' 
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var carouselItems = document.querySelectorAll('.carousel-item');

    var myCarousel = document.getElementById('carouselExampleIndicators');
    myCarousel.addEventListener('slid.bs.carousel', function () {
        var activeItem = myCarousel.querySelector('.carousel-item.active');
        activeItem.style.opacity = 1; 
    });

    myCarousel.addEventListener('slide.bs.carousel', function () {
        var activeItem = myCarousel.querySelector('.carousel-item.active');
        activeItem.style.opacity = 0; 
    });
});
