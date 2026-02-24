document.addEventListener('DOMContentLoaded', () => {

    // 1. Initialize Lucide Icons
    lucide.createIcons();

    // 2. Initialize tsParticles
    try {
        tsParticles.load("tsparticles", {
            fpsLimit: 60,
            interactivity: {
                events: {
                    onHover: { enable: true, mode: "grab" },
                    resize: true,
                },
                modes: {
                    grab: { distance: 150, links: { opacity: 0.6 } }
                }
            },
            particles: {
                color: { value: ["#3b82f6", "#8b5cf6", "#06b6d4"] },
                links: { color: "#ffffff", distance: 120, enable: true, opacity: 0.15, width: 1 },
                move: { enable: true, speed: 0.8, outModes: { default: "bounce" } },
                number: { density: { enable: true, area: 1000 }, value: 70 },
                opacity: { value: 0.4 },
                size: { value: { min: 1, max: 2.5 } },
            },
            detectRetina: true,
        });
    } catch (e) {
        console.warn('Particles could not be initialized.', e);
    }

    // 3. Scroll Reveal Animation
    function reveal() {
        const reveals = document.querySelectorAll(".reveal");
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;
            const elementVisible = 80;
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            }
        }
    }
    
    window.addEventListener("scroll", reveal);
    reveal(); // Trigger to reveal initial visible elements

    // 4. Sticky Navbar Behavior
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('glass', 'shadow-lg');
            navbar.classList.remove('bg-transparent', 'border-transparent');
            navbar.style.padding = '0.75rem 0';
            navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.08)';
        } else {
            navbar.classList.add('bg-transparent', 'border-transparent');
            navbar.classList.remove('glass', 'shadow-lg');
            navbar.style.padding = '1.25rem 0';
            navbar.style.borderBottom = '1px solid transparent';
        }
    });

    // 5. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

});
