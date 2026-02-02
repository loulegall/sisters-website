// Script pour gérer le menu hamburger sur mobile
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!menuToggle || !navMenu) {
        return;
    }

    // Toggle du menu
    menuToggle.addEventListener('click', function() {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('active');
        
        // Empêcher le scroll du body quand le menu est ouvert
        if (!isExpanded) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    // Fermer le menu quand on clique sur un lien
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.setAttribute('aria-expanded', 'false');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Fermer le menu quand on clique en dehors
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target) || menuToggle.contains(event.target);
        
        if (!isClickInsideNav && navMenu.classList.contains('active')) {
            menuToggle.setAttribute('aria-expanded', 'false');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Fermer le menu au scroll sur mobile
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (navMenu.classList.contains('active')) {
            if (Math.abs(scrollTop - lastScrollTop) > 10) {
                menuToggle.setAttribute('aria-expanded', 'false');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
        
        lastScrollTop = scrollTop;
    });

    // Gérer le redimensionnement de la fenêtre
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
            menuToggle.setAttribute('aria-expanded', 'false');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});
