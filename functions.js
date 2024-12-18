function toggleMenu() {
    const menu = document.querySelector('nav');
    menu.classList.toggle('active');
}

function closeMenu() {
    const menu = document.querySelector('nav');
    menu.classList.remove('active');
}