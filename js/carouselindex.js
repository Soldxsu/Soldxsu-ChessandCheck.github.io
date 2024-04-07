const carousel = document.querySelector('#portafolio-carousel');
const portfolioText = document.querySelector('.portfolio-text');

carousel.addEventListener('slide.bs.carousel', function (event) {
    const currentSlide = event.relatedTarget;
    const index = currentSlide.getAttribute('data-slide-to');

    const titles = ['TABLERO', 'APP', 'BRAILLE', 'PÁGINA WEB'];
    const descriptions = [
        'El tablero de ajedrez para ciegos tiene distintas características a comparación del clásico, por eso se decidió crear uno teniendo en cuenta sus requisitos.',
        'El motivo de la creación de ésta fue para crear un cronómetro de ajedrez optimizado por el uso del talkback y facilitar su funcionamiento para ciegos.',
        'El uso del braille para las anotaciones es indispensable. Es por eso que diseñamos una regleta y un punzón correspondiente.',
        'La página web fue creada para promocionar nuestro trabajo y documentar nuestra investigación.'
    ];

    portfolioText.querySelector('h2').textContent = titles[index];
    portfolioText.querySelector('p').textContent = descriptions[index];
});
