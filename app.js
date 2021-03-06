const logoContainer = document.querySelector('.logo-container');
const logo = document.querySelector('.logo');
const outerNavContainer = document.querySelector('.outer-nav-container');
const burgerContainer = document.querySelector('.burger-container');




// INITIALIZE SMOOTH SCROLL
var scroll = new SmoothScroll('a[href*="#"]');


// MEDIA QUERIES
const minFiveHundred = window.matchMedia("(min-width: 500px)");
const maxFiveHundred = window.matchMedia("(max-width: 500px)");
// MEDIA QUERIES END


const getPagePathName = window.location.pathname;
const homeLink = document.querySelector('.nav-link-home');

if (minFiveHundred.matches) {
  window.onscroll = function () {
    if (pageYOffset > 50) {
      logoContainer.style.backgroundColor = '#fff';
      logo.style.color = '#333';
      logoContainer.style.boxShadow = '0px 1px 0px 0px rgba(0,0,0,0.25)';
      outerNavContainer.style.boxShadow = '0px 1px 0px 0px rgba(0,0,0,0.25)';
      outerNavContainer.style.backgroundColor = '#fff';

      if (getPagePathName.indexOf('index.html') >= 0) {
        homeLink.classList.add('current-nav-link-highlight');
      }

    } else if (pageYOffset < 50) {
      logoContainer.style.backgroundColor = 'rgba(0, 0, 0, 0)';
      logo.style.color = '#eee';
      logoContainer.style.boxShadow = 'none';
      outerNavContainer.style.boxShadow = 'none';
      outerNavContainer.style.backgroundColor = 'none';

      if (getPagePathName.indexOf('index.html') >= 0) {
        homeLink.classList.remove('current-nav-link-highlight');
      }
    }
  }
}

if (maxFiveHundred.matches) {
  burgerContainer.addEventListener('click', function () {
    this.classList.toggle("change");
    outerNavContainer.classList.toggle("open-nav-links");
  });
}