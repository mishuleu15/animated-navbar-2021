import { mobileNavMenu } from './helper.js';

const liAll = document.querySelectorAll('li');
const btnMobile = document.querySelector('.container').children;
const navContainer = document.querySelector('nav');
const menuMobileContainer = document.querySelector('.container');
const menuBtnMobile = document.querySelector('.myLinks');

let toogleBtn;

const showNav = () => {
  // Get width of the window excluding scrollbars
  let windowWidth = document.documentElement.clientWidth;

  liAll.forEach((li) => {
    if (windowWidth < 1149 && li.className.includes('hidden')) {
      li.style.display = 'none';
    } else {
      li.style.display = '';
      navContainer.classList.remove('responsive');
      menuMobileContainer.classList.remove('change');
    }
  });

  showHideMobileBtn(windowWidth);
};

const showHideMobileBtn = (w) => {
  for (let i = 0; i < btnMobile.length; i++) {
    if (w < 1149) {
      btnMobile[i].style.display = 'block';
    } else {
      btnMobile[i].style.display = 'none';
      menuBtnMobile.classList.add('hide');
    }
  }
};

const mobileBtn = () => {
  toogleBtn = menuMobileContainer.classList.toggle('change');
  if (toogleBtn) {
    navContainer.classList.add('responsive');
    menuBtnMobile.classList.add('topNav');
    menuBtnMobile.classList.remove('hide');
  } else {
    navContainer.classList.remove('responsive');
    menuBtnMobile.classList.add('hide');
    menuBtnMobile.classList.remove('topNav');
  }
};

// Attaching the event listener function to window's resize event
window.addEventListener('resize', showNav);

// Event Listener
menuMobileContainer.addEventListener('click', mobileBtn);

//On Load
showNav();
mobileNavMenu(menuBtnMobile);
