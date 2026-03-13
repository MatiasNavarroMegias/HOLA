/* ============================================================
   MAIN.JS - Portfolio Logic
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

    // ---- State ----
    let currentLang = 'es';

    // ---- DOM Elements ----
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const langToggle = document.getElementById('lang-toggle');
    const typewriterEl = document.getElementById('typewriter');
    const projectsGrid = document.getElementById('projects-grid');
    const particlesContainer = document.getElementById('particles');

    // ---- Create mobile overlay ----
    const overlay = document.createElement('div');
    overlay.classList.add('nav-overlay');
    document.body.appendChild(overlay);

    // ============================================================
    // NAVBAR - Scroll effect
    // ============================================================
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        updateActiveNavLink();
    });

    // ---- Active nav link based on scroll ----
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('.section, .hero');
        const navLinks = document.querySelectorAll('.nav-link');
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    // ============================================================
    // MOBILE MENU
    // ============================================================
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    overlay.addEventListener('click', closeMobileMenu);

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    function closeMobileMenu() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    // ============================================================
    // TYPEWRITER EFFECT
    // ============================================================
    const typewriterText = "Matias Megias Navarro";
    let charIndex = 0;

    function typeWriter() {
        if (charIndex < typewriterText.length) {
            typewriterEl.textContent += typewriterText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 80);
        }
    }

    // Start typewriter after a small delay
    setTimeout(typeWriter, 800);

    // ============================================================
    // LANGUAGE TOGGLE (i18n)
    // ============================================================
    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        applyTranslations();
        renderProjects(); // Re-render projects in new language
        updateLangButton();
    });

    function updateLangButton() {
        const flag = currentLang === 'es' ? '🇪🇸' : '🇬🇧';
        const text = currentLang === 'es' ? 'ES' : 'EN';
        langToggle.querySelector('.lang-flag').textContent = flag;
        langToggle.querySelector('.lang-text').textContent = text;
        document.documentElement.setAttribute('data-lang', currentLang);
        document.documentElement.lang = currentLang;
    }

    function applyTranslations() {
        const t = translations[currentLang];
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key]) {
                el.innerHTML = t[key];
            }
        });
    }

    // ============================================================
    // RENDER PROJECTS (Dynamic from projects.js)
    // ============================================================
    function renderProjects() {
        if (!projectsGrid) return;
        const t = translations[currentLang];

        projectsGrid.innerHTML = projects.map(project => {
            const name = currentLang === 'es' ? project.name_es : project.name_en;
            const desc = currentLang === 'es' ? project.description_es : project.description_en;
            const repoLabel = t.proj_repo || 'Repositorio';
            const downloadLabel = t.proj_download || 'Descargar';

            const imageHTML = project.image
                ? `<img src="${project.image}" alt="${name}" class="project-image" loading="lazy">`
                : `<div class="project-placeholder-img">${project.icon || '📁'}</div>`;

            const repoLink = project.repoUrl
                ? `<a href="${project.repoUrl}" target="_blank" class="project-link repo"><i class="fab fa-github"></i> ${repoLabel}</a>`
                : '';

            const downloadLink = project.downloadUrl
                ? `<a href="${project.downloadUrl}" target="_blank" class="project-link download"><i class="fas fa-download"></i> ${downloadLabel}</a>`
                : '';

            const tags = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

            return `
                <div class="project-card reveal">
                    ${imageHTML}
                    <div class="project-body">
                        <h3 class="project-name">${name}</h3>
                        <p class="project-description">${desc}</p>
                        <div class="project-tags">${tags}</div>
                        <div class="project-links">
                            ${repoLink}
                            ${downloadLink}
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        // Re-observe new elements for reveal animation
        observeRevealElements();
    }

    // ============================================================
    // SCROLL REVEAL ANIMATION
    // ============================================================
    function observeRevealElements() {
        const revealElements = document.querySelectorAll('.reveal:not(.active)');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('active');
                    }, index * 100);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        revealElements.forEach(el => observer.observe(el));
    }

    // ============================================================
    // PARTICLES BACKGROUND (Hero)
    // ============================================================
    function createParticles() {
        if (!particlesContainer) return;

        const colors = [
            'var(--accent-lavender)',
            'var(--accent-pink)',
            'var(--accent-mint)',
            'var(--accent-peach)',
            'var(--accent-cyan)',
        ];

        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');

            const size = Math.random() * 6 + 2;
            const color = colors[Math.floor(Math.random() * colors.length)];
            const left = Math.random() * 100;
            const duration = Math.random() * 15 + 10;
            const delay = Math.random() * 10;

            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.background = color;
            particle.style.left = `${left}%`;
            particle.style.animationDuration = `${duration}s`;
            particle.style.animationDelay = `${delay}s`;

            particlesContainer.appendChild(particle);
        }
    }

    // ============================================================
    // SMOOTH SCROLL for anchor links
    // ============================================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // ============================================================
    // CONTACT FORM (basic handling)
    // ============================================================
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            // If using Formspree, the form will submit normally.
            // If you want custom handling, uncomment below:
            
            // e.preventDefault();
            // const formData = new FormData(this);
            // alert(currentLang === 'es' 
            //     ? '¡Mensaje enviado! Gracias por contactarme.' 
            //     : 'Message sent! Thanks for contacting me.');
            // this.reset();
        });
    }

    // ============================================================
    // INIT
    // ============================================================
    createParticles();
    renderProjects();
    observeRevealElements();
    updateActiveNavLink();

});