'use strict';

const goTopBtn = document.querySelector('.page__goTop-btn');

window.onscroll = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    goTopBtn.classList.add('page__goTop-btn--show');
  } else {
    goTopBtn.classList.remove('page__goTop-btn--show');
  }
};

goTopBtn.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
