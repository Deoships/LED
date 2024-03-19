document.querySelector('.burger-menu').addEventListener('click', function() {
    this.classList.toggle('change');
    document.querySelector('.burger-menu-nav').classList.toggle('show');
});

// Добавим обработчик клика для закрытия меню при клике вне его области
document.addEventListener('click', function(event) {
    const burgerMenuNav = document.querySelector('.burger-menu-nav');
    const burgerMenu = document.querySelector('.burger-menu');
    if (!burgerMenuNav.classList.contains('show') || (!burgerMenuNav.contains(event.target) && !burgerMenu.contains(event.target))) {
        burgerMenuNav.classList.remove('show');
        burgerMenu.classList.remove('change');
    }
});
