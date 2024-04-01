/* Get DOM elements */
const menuIcon = document.querySelector('#menu-icon');
const menuContainer = document.querySelector('#container');
const navBar = document.querySelector('#nav');
const closeIcon = document.querySelector('#close-icon');
const whiteLogo = document.querySelector('#white-logo');
const darkLogo = document.querySelector('#dark-logo');

/* Mobile menu */

// Show navbar
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('no-show');
    closeIcon.removeAttribute('class', 'no-show');
    closeIcon.classList.toggle('close-menu');
    navBar.removeAttribute('class', 'no-show');
    navBar.classList.toggle('show');
    darkLogo.classList.toggle('no-show');
    whiteLogo.classList.toggle('show');
    menuContainer.removeAttribute('class');
    menuContainer.classList.toggle('active-menu');
});

// Hide navbar
closeIcon.addEventListener('click', () => {
    menuIcon.removeAttribute('class','no-show');
    menuIcon.classList.toggle('header__nav--icon');
    closeIcon.removeAttribute('class', 'show');
    closeIcon.classList.toggle('header__nav--close');
    closeIcon.classList.toggle('no-show');
    navBar.removeAttribute('class', 'show');
    navBar.classList.toggle('no-show');
    whiteLogo.removeAttribute('class','show');
    whiteLogo.classList.toggle('header__nav--logo-white');
    darkLogo.removeAttribute('class','show');
    darkLogo.classList.toggle('header__nav--logo-dark');
    menuContainer.removeAttribute('class', 'active-menu');
    menuContainer.classList.toggle('header-container');
});