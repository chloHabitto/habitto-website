// Habitto Website JavaScript

// Theme Management
(function() {
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    const favicon = document.getElementById('favicon');
    const logoIcon = document.getElementById('logo-icon');
    const footerIcon = document.getElementById('footer-icon');
    const ctaIcon = document.getElementById('cta-icon');
    const appStoreBadgeHero = document.getElementById('app-store-badge-hero');
    const appStoreBadgeCta = document.getElementById('app-store-badge-cta');
    const sunIcon = themeToggle?.querySelector('.sun-icon');
    const moonIcon = themeToggle?.querySelector('.moon-icon');

    // Get saved theme or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme === 'auto' ? (prefersDark ? 'dark' : 'light') : savedTheme;

    function setTheme(theme) {
        if (theme === 'dark') {
            html.classList.add('dark');
            if (favicon) favicon.href = 'assets/app-icon-dark.png';
            if (logoIcon) logoIcon.src = 'assets/app-icon-dark.png';
            if (footerIcon) footerIcon.src = 'assets/app-icon-dark.png';
            if (ctaIcon) ctaIcon.src = 'assets/app-icon-dark.png';
            if (appStoreBadgeHero) appStoreBadgeHero.src = 'assets/app-store-badge-white.svg';
            if (appStoreBadgeCta) appStoreBadgeCta.src = 'assets/app-store-badge-white.svg';
            if (sunIcon) sunIcon.style.display = 'none';
            if (moonIcon) moonIcon.style.display = 'block';
        } else {
            html.classList.remove('dark');
            if (favicon) favicon.href = 'assets/app-icon-light.png';
            if (logoIcon) logoIcon.src = 'assets/app-icon-light.png';
            if (footerIcon) footerIcon.src = 'assets/app-icon-light.png';
            if (ctaIcon) ctaIcon.src = 'assets/app-icon-light.png';
            if (appStoreBadgeHero) appStoreBadgeHero.src = 'assets/app-store-badge-black.svg';
            if (appStoreBadgeCta) appStoreBadgeCta.src = 'assets/app-store-badge-black.svg';
            if (sunIcon) sunIcon.style.display = 'block';
            if (moonIcon) moonIcon.style.display = 'none';
        }
    }

    // Initialize theme
    setTheme(initialTheme);

    // Theme toggle
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isDark = html.classList.contains('dark');
            setTheme(isDark ? 'light' : 'dark');
            localStorage.setItem('theme', isDark ? 'light' : 'dark');
        });
    }

    // Watch for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'auto' || !savedTheme) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });
})();

// Stars Animation
function createStars(container, count = 50) {
    if (!container) return;
    
    container.innerHTML = '';
    
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.width = (Math.random() * 3 + 1) + 'px';
        star.style.height = star.style.width;
        star.style.animationDelay = Math.random() * 3 + 's';
        container.appendChild(star);
    }
}

// Initialize stars
const starsContainer = document.getElementById('stars-container');
const ctaStars = document.getElementById('cta-stars');
if (starsContainer) createStars(starsContainer, 50);
if (ctaStars) createStars(ctaStars, 30);

// Navbar Scroll Effect
(function() {
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    function handleScroll() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 20) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
})();

// Scroll Spy for Navigation
(function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = ['home', 'features', 'pricing', 'how-it-works', 'download'];

    function updateActiveNav() {
        const scrollPosition = window.scrollY + 150;
        let currentSection = 'home';

        for (let i = sections.length - 1; i >= 0; i--) {
            const section = document.getElementById(sections[i]);
            if (section) {
                const offsetTop = section.offsetTop;
                if (scrollPosition >= offsetTop) {
                    currentSection = sections[i];
                    break;
                }
            }
        }

        // If at the very top, set home as active
        if (window.scrollY < 100) {
            currentSection = 'home';
        }

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav(); // Initial check
})();

// Smooth Scroll for Anchor Links
(function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || !href) return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
})();

// Scroll to Top FAB
(function() {
    const scrollFAB = document.getElementById('scroll-fab');
    
    function toggleFAB() {
        if (!scrollFAB) return;
        
        if (window.scrollY > 300) {
            scrollFAB.classList.add('visible');
        } else {
            scrollFAB.classList.remove('visible');
        }
    }

    if (scrollFAB) {
        scrollFAB.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    window.addEventListener('scroll', toggleFAB);
    toggleFAB(); // Initial check
})();

// Intersection Observer for Fade-in Animations
(function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe feature cards
    document.querySelectorAll('.feature-card').forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s`;
        observer.observe(el);
    });

    // Observe how-it-works steps
    document.querySelectorAll('.how-it-works-step').forEach((el, index) => {
        el.style.opacity = '0';
        const isEven = index % 2 === 0;
        el.style.transform = `translateX(${isEven ? '-30px' : '30px'})`;
        el.style.transition = `opacity 0.5s ease-out ${index * 0.15}s, transform 0.5s ease-out ${index * 0.15}s`;
        observer.observe(el);
    });

    // Observe section headers
    document.querySelectorAll('.features-header, .pricing-header, .how-it-works-header').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
        observer.observe(el);
    });
})();

// Mobile Menu Toggle
(function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });

        // Close menu when clicking on a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            });
        });
    }
})();

// Add mobile menu styles dynamically
(function() {
    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 767px) {
            .nav-links {
                position: fixed;
                top: 70px;
                left: 0;
                right: 0;
                background: hsl(var(--background) / 0.95);
                backdrop-filter: blur(12px);
                flex-direction: column;
                padding: 2rem;
                gap: 1rem;
                border-bottom: 1px solid hsl(var(--border));
                transform: translateY(-100%);
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s;
            }
            
            .nav-links.active {
                transform: translateY(0);
                opacity: 1;
                visibility: visible;
            }
            
            .mobile-menu-toggle.active span:nth-child(1) {
                transform: rotate(45deg) translate(5px, 5px);
            }
            
            .mobile-menu-toggle.active span:nth-child(2) {
                opacity: 0;
            }
            
            .mobile-menu-toggle.active span:nth-child(3) {
                transform: rotate(-45deg) translate(7px, -6px);
            }
        }
    `;
    document.head.appendChild(style);
})();

// Performance: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimize scroll handlers
const optimizedScrollHandler = debounce(() => {
    // Scroll spy and FAB visibility are handled in their respective functions
}, 10);

window.addEventListener('scroll', optimizedScrollHandler, { passive: true });

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    // Ensure theme is applied immediately
    const isDark = document.documentElement.classList.contains('dark');
    if (isDark) {
        const event = new Event('themechange');
        document.dispatchEvent(event);
    }
});
