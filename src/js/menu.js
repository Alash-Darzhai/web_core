let sidebarOpen = document.querySelector('.menu__link--open');
let sidebarClose = document.querySelector('.menu__link--close');
let sidebarMobile = document.querySelector('.sidebar');
let backgroundBlur = document.querySelector('.bkg');
let mainContainer = document.querySelector('.main-container');
let main = document.querySelector('.main');

sidebarOpen.addEventListener('click', function (evt) {
  evt.stopPropagation();
  evt.preventDefault();
  sidebarMobile.classList.add('sidebar__open');
  backgroundBlur.classList.add('bkg--active');
  main.classList.add('fixed');
  if (window.innerWidth >= 768) {
    main.style.width = '768px';
  }
});

sidebarClose.addEventListener('click', function (evt) {
  evt.stopPropagation();
  evt.preventDefault();
  sidebarMobile.classList.remove('sidebar__open');
  backgroundBlur.classList.remove('bkg--active');
  main.classList.remove('fixed');

  if (window.innerWidth >= 768 && window.innerWidth < 1360) {
    main.style.width = '100%';
  }
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    sidebarMobile.classList.remove('sidebar__open');
    backgroundBlur.classList.remove('bkg--active');
    main.classList.remove('fixed');
    if (window.innerWidth >= 768 && window.innerWidth < 1360) {
      main.style.width = '100%';
    }
  }
});

document.addEventListener('click', function (evt) {
  evt.preventDefault();
  evt.stopPropagation();
  if (!evt.target.closest('.sidebar')) {
    sidebarMobile.classList.remove('sidebar__open');
    backgroundBlur.classList.remove('bkg--active');
    main.classList.remove('fixed');
    if (window.innerWidth >= 768 && window.innerWidth < 1360) {
      main.style.width = '100%';
    }
  }
});
