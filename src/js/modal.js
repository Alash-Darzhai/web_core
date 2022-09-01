let clickOpenChat = document.querySelectorAll('.menu__item--chat');
let clickClose = document.querySelector('.modal__close');
let modal = document.querySelector('.modal');
let clickOpenCall = document.querySelectorAll('.menu__item--call');
let modalBlock = document.querySelectorAll('.modal__feedback--block');
let modalTitle = document.querySelector('.modal__title--view');
let backgroundBlur = document.querySelector('.bkg');
let backgroundBlurActive = document.querySelector('.bkg--active');
let sidebarWrap = document.querySelector('.sidebar-wrap');
let sidebar = document.querySelector('.sidebar');
let mainContainer = document.querySelector('.main-container');
let main = document.querySelector('.main');


for (let i = 0; i < clickOpenChat.length; i++) {
  clickOpenChat[i].addEventListener('click', function (evt) {
    evt.stopPropagation();
    modalTitle.textContent = 'Обратная связь';
    modal.classList.add('modal--open');
    sidebarWrap.style.opacity = '0.2';
    sidebarWrap.style.transition = '1s ease';
    main.classList.add('fixed');
    mainContainer.style.opacity = '0.2';

    for (let i = 0; i < modalBlock.length; i++) {
      modalBlock[i].classList.remove('modal__feedback--none');
    }
  });
}

for (let i = 0; i < clickOpenCall.length; i++) {
  clickOpenCall[i].addEventListener('click', function (evt) {
    evt.stopPropagation();
    modalTitle.textContent = 'Заказать звонок';
    modal.classList.add('modal--open');
    sidebarWrap.style.opacity = '0.2';
    sidebarWrap.style.transition = '1s ease';
    main.classList.add('fixed');
    mainContainer.style.opacity = '0.2';

    for (let i = 0; i < modalBlock.length; i++) {
      modalBlock[i].classList.add('modal__feedback--none');
    }
  });
}

clickClose.addEventListener('click', function (evt) {
  evt.stopPropagation();
  modal.classList.remove('modal--open');
  sidebarWrap.style.opacity = '1';
  sidebarWrap.style.transition = '1s ease';
  main.classList.remove('fixed');
  mainContainer.style.opacity = '1';

  for (let i = 0; i < modalBlock.length; i++) {
    modalBlock[i].classList.remove('modal__feedback--none');
  }
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains('modal--open')) {
      modal.classList.remove('modal--open');
      sidebarWrap.style.opacity = '1';
      sidebarWrap.style.transition = '1s ease';
      main.classList.remove('fixed');
      mainContainer.style.opacity = '1';
    }
  }
});

document.addEventListener('click', function (evt) {
  evt.stopPropagation();
  if (!evt.target.closest('.modal-wrap')) {
    modal.classList.remove('modal--open');
    sidebarWrap.style.opacity = '1';
    sidebarWrap.style.transition = '1s ease';
    main.classList.remove('fixed');
    mainContainer.style.opacity = '1';
  }
});


