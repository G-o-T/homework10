const btnNext = document.querySelector('.slider__btn_next'),
      btnPrev = document.querySelector('.slider__btn_prev'),
      slides = document.querySelectorAll('.slider__item');

let slidesCounter = 0;

function makeActiveSlide (n) {
    for (slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

function getNextSlide () {
    if (slidesCounter == slides.length - 1) {
        slidesCounter = 0;
        makeActiveSlide(slidesCounter);
    } else {
        slidesCounter++;
        makeActiveSlide(slidesCounter);
    }
}

function getPrevSlide () {
    if (slidesCounter == 0) {
        slidesCounter = slides.length - 1;
        makeActiveSlide(slidesCounter);
    } else {
        slidesCounter--;
        makeActiveSlide(slidesCounter);
    }
}

btnNext.addEventListener('click', getNextSlide);
btnPrev.addEventListener('click', getPrevSlide);