let clickButtonFirst = document.querySelector('.button--first');
let showText = document.querySelectorAll('.main-description__desc--hide');

let clickButtonSecond = document.querySelector('.button--second');
let clickButtonSecondBefore = document.querySelector('.button--second::before');

let imageSlider = document.querySelectorAll('.slider__slide--view');

let clickButtonThird = document.querySelector('.button--third');
let clickButtonThirdBefore = document.querySelector('.button--third::before');

let repairSlider = document.querySelectorAll('.slider__slide--hide-repair');

clickButtonFirst.addEventListener('click', function () {
  for (let i = 0; i < showText.length; i++) {
    showText[i].classList.toggle('main-description__desc--show');
  }

  if (clickButtonFirst.textContent != 'Скрыть') {
    clickButtonFirst.textContent = 'Скрыть';
    clickButtonFirst.classList.remove('button--first');
    clickButtonFirst.classList.add('button--first-rotate');
  } else {
    clickButtonFirst.textContent = 'Читать далее';
    clickButtonFirst.classList.remove('button--first-rotate');
    clickButtonFirst.classList.add('button--first');
  }
});

clickButtonSecond.addEventListener('click', function () {
  for (let i = 0; i < imageSlider.length; i++) {
    imageSlider[i].classList.toggle('slider__slide--show');
  }
  if (clickButtonSecond.textContent != 'Скрыть') {
    clickButtonSecond.textContent = 'Скрыть';
    clickButtonSecond.classList.remove('button--second');
    clickButtonSecond.classList.add('button--second-rotate');
  } else {
    clickButtonSecond.textContent = 'Показать всё';
    clickButtonSecond.classList.remove('button--second-rotate');
    clickButtonSecond.classList.add('button--second');
  }
});

clickButtonThird.addEventListener('click', function () {
  for (let i = 0; i < repairSlider.length; i++) {
    repairSlider[i].classList.toggle('slider__slide--show-repair');
  }
  if (clickButtonThird.textContent != 'Скрыть') {
    clickButtonThird.textContent = 'Скрыть';
    clickButtonThird.classList.remove('button--third');
    clickButtonThird.classList.add('button--third-rotate');
  } else {
    clickButtonThird.textContent = 'Показать всё';
    clickButtonThird.classList.remove('button--third-rotate');
    clickButtonThird.classList.add('button--third');
  }
});
