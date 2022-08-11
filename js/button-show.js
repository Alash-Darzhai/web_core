let clickButton = document.querySelector('.main__button_hide');
let imageSlider = document.querySelectorAll('.image-slider__slide_view');

clickButton.addEventListener('click', function () {
    if (clickButton.textContent != 'Скрыть') {
        clickButton.textContent = 'Скрыть';
    } else {
        clickButton.textContent = 'Показать всё'
    }
    for (let i = 0; i < imageSlider.length; i++) {
        imageSlider[i].classList.toggle('image-slider__slide_show')
    }


})