
window.addEventListener('scroll', function() { 
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');                          // Navbar transparente al hacer scroll
    } else {
        nav.classList.remove('scrolled');
    }
});

const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {                                      // Animaciones al hacer scroll
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    observer.observe(section);
});

function scrollToContent() {                                                        // Función para el botón "Ver Más"
    document.querySelector('.content').scrollIntoView({ behavior: 'smooth' });
}

document.querySelector('.download-btn').addEventListener('click', function() {
    const videoUrl = 'video/853889-hd_1920_1080_25fps.mp4'; 
    const link = document.createElement('a');
    link.href = videoUrl;                                               // Botón de descarga
    link.download = '853889-hd_1920_1080_25fps.mp4';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});