document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            window.scrollTo({
                top: document.querySelector('#experience').offsetTop - 70,
                behavior: 'smooth'
            });
        });
    }

    // Audio player
    const audioToggle = document.getElementById('audioToggle');
    const ambientAudio = document.getElementById('ambientAudio');
    if (audioToggle && ambientAudio) {
        audioToggle.addEventListener('click', function() {
            if (ambientAudio.paused) {
                ambientAudio.play();
                this.innerHTML = '<i class="fas fa-volume-up"></i> Ambience';
            } else {
                ambientAudio.pause();
                this.innerHTML = '<i class="fas fa-volume-mute"></i> Ambience';
            }
        });
    }

    // Gallery modal
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modalImage = document.getElementById('modalImage');
    if (galleryItems.length && modalImage) {
        galleryItems.forEach(item => {
            item.addEventListener('click', function() {
                const imgSrc = this.querySelector('img').getAttribute('src');
                modalImage.setAttribute('src', imgSrc);
            });
        });
    }

    // Form submission
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            alert('Thank you for your reservation! We will contact you shortly to confirm your booking.');
            this.reset();
        });
    }

    // Scroll animations
    const sections = document.querySelectorAll('.section-fade');
    function checkScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (sectionTop < windowHeight - 100) {
                section.classList.add('visible');
            }
        });
    }
    window.addEventListener('scroll', checkScroll);
    checkScroll(); 
});

