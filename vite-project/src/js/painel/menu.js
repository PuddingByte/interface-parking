const btnMenu = document.querySelector('#btn-menu');
const menuDropdown = document.querySelector('#menu-dropdown');

btnMenu.addEventListener('click', () => {
    menuDropdown.classList.toggle('mostrar');
});

document.addEventListener('click', (evento) => {
    if (!btnMenu.contains(evento.target) && !menuDropdown.contains(evento.target)) {
        menuDropdown.classList.remove('mostrar');
    }
});