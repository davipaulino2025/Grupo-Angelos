document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Fecha o menu quando um link é clicado
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Scroll suave para botão "Agende uma conversa"
    const btnContato = document.getElementById('btn-contato');
    btnContato.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector('#contato');
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});




