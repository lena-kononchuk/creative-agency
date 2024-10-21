const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        const isDark = document.body.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');

        // Меняем иконку
        if (isDark) {
            themeIcon.classList.remove('fas', 'fa-sun');
            themeIcon.classList.add('fas', 'fa-moon'); // Иконка луны
        } else {
            themeIcon.classList.remove('fas', 'fa-moon');
            themeIcon.classList.add('fas', 'fa-sun'); // Иконка солнца
        }
    });
}
// Получаем элементы
// Получаем элементы
const burgerMenu = document.getElementById('burger-menu');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu');

// Открываем бургер-меню
if (burgerMenu) {
    burgerMenu.addEventListener('click', () => {
        mobileMenu.classList.remove('hidden');
    });
}

// Закрываем бургер-меню
if (closeMenu) {
    closeMenu.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
}
