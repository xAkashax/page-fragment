'use strict';

document
  .querySelector('.navbar-toggler')
  .addEventListener('click', function () {
    document.querySelector('.animated-icon').classList.toggle('open');
  });
