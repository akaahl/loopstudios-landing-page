const hamburgerBtn = document.getElementById('hamburger-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileNavBar = document.getElementById('mobile-nav-bar'); 

hamburgerBtn.addEventListener('click', () => {
    mobileNavBar.classList.add('show');
});

closeMenuBtn.addEventListener('click', () => {
    mobileNavBar.classList.remove('show');
});

