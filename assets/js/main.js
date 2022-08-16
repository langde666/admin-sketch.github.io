// MENU
const navItems = document.querySelectorAll('.nav__item');
const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navItems.forEach(item => {
            item.classList.remove('active-item');
        });
        this.parentNode.classList.add('active-item');
    });
});

const menu = document.getElementById('main-nav');
const main = document.getElementById('main');
const toggleMenuBtn = document.getElementById('toggle-menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');

toggleMenuBtn.addEventListener('click', () => {
    menu.classList.toggle('show-menu');
    main.classList.toggle('show-menu');
});

closeMenuBtn.addEventListener('click', () => {
    menu.classList.toggle('show-menu');
    main.classList.toggle('show-menu');
});