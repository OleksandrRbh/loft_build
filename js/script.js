let screensCollection = document.querySelectorAll(`.screen`);
let buttonsCollection = document.querySelectorAll(`.side-nav__link`);
let mainNavCollection = document.querySelectorAll(`.main_nav__link`);
let currentActiveScreenIndex = 0;
let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.page-header__nav-toggle');


const changeActiveScreen = (index) => {
  screensCollection[currentActiveScreenIndex].classList.remove(`current`);
  buttonsCollection[currentActiveScreenIndex].classList.remove(`current`);
  mainNavCollection[currentActiveScreenIndex].classList.remove(`current`);
  currentActiveScreenIndex = index;
  screensCollection[currentActiveScreenIndex].classList.add(`current`);
  buttonsCollection[currentActiveScreenIndex].classList.add(`current`);
  mainNavCollection[currentActiveScreenIndex].classList.add(`current`)
}

buttonsCollection.forEach((button, index) => {
  button.addEventListener(`click`, () => {
    changeActiveScreen(index);
  })
});

mainNavCollection.forEach((button, index) => {
  button.addEventListener(`click`, () => {
    changeActiveScreen(index);
    navMain.classList.remove('main-nav--opened');
    navMain.classList.add('main-nav--closed');
  })
});


window.addEventListener("wheel", _.debounce((event) => {
  const NULL = 0;
  if (event.deltaY < NULL) {
    if (currentActiveScreenIndex > 0) {
      changeActiveScreen(currentActiveScreenIndex - 1);
    }
  } else {
    if (currentActiveScreenIndex < screensCollection.length - 1) {
      changeActiveScreen(currentActiveScreenIndex + 1);
    }
  }
}, 150));


navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    navToggle.classList.remove('page-header__nav-toggle--closed');
    navToggle.classList.add('page-header__nav-toggle--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    navToggle.classList.add('page-header__nav-toggle--closed');
    navToggle.classList.remove('page-header__nav-toggle--opened');
  }
});

mainNav.addEventListener('click', function() {  
  navMain.classList.remove('main-nav--opened');
  navMain.classList.add('main-nav--closed');
});
