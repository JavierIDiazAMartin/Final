const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');


menu.addEventListener('click', function()
    {
        menu.classList.toggle('active');
        menuLinks.classList.toggle('active');
    }
);












