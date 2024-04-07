/* Get DOM elements */
const menuIcon = document.querySelector('#menu-icon');
const menuContainer = document.querySelector('#container');
const navBar = document.querySelector('#nav');
const closeIcon = document.querySelector('#close-icon');
const aboutLink = document.querySelector('#about-link');
const portfolioLink = document.querySelector('#portfolio-link');
const clientsLink = document.querySelector('#clients-link');
const contactLink = document.querySelector('#contact-link');

/* Mobile menu */

// Nav elements Array
const linkArr = [aboutLink, portfolioLink, clientsLink, contactLink];

// Show navbar function
function showNav() {
  menuIcon.classList.toggle('no-show');
  closeIcon.removeAttribute('class', 'no-show');
  closeIcon.classList.toggle('close-menu');
  navBar.removeAttribute('class', 'no-show');
  navBar.classList.toggle('show');
  menuContainer.removeAttribute('class');
  menuContainer.classList.toggle('active-menu');
}

// Hide navbar function
function hideNav() {
  menuIcon.removeAttribute('class', 'no-show');
  menuIcon.classList.toggle('header__nav--icon');
  closeIcon.removeAttribute('class', 'show');
  closeIcon.classList.toggle('header__nav--close');
  closeIcon.classList.toggle('no-show');
  navBar.removeAttribute('class', 'show');
  navBar.classList.toggle('no-show');
  menuContainer.removeAttribute('class', 'active-menu');
  menuContainer.classList.toggle('header-container');
}

// Event Listeners

// Sow navbar
menuIcon.addEventListener('click', () => {
  showNav();
});
// Hide navbar
closeIcon.addEventListener('click', () => {
  hideNav();
});

linkArr.forEach((e) => {
  e.addEventListener('click', () => {
    hideNav();
  });
});
