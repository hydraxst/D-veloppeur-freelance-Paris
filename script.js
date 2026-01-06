document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.card, .info-card, .platform-card');
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.opacity = '0.7';
        if (link.getAttribute('href').slice(1) === current) {
            link.style.opacity = '1';
            link.style.textDecoration = 'underline';
        } else {
            link.style.textDecoration = 'none';
        }
    });
});

function calculateMonthlyRevenue() {
    const tjm = parseFloat(document.getElementById('tjm-input')?.value) || 0;
    const daysPerMonth = parseFloat(document.getElementById('days-input')?.value) || 0;
    const result = tjm * daysPerMonth;
    
    const resultElement = document.getElementById('monthly-result');
    if (resultElement) {
        resultElement.textContent = `Revenu mensuel estimé: ${result.toLocaleString('fr-FR')}€`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const tjmInput = document.getElementById('tjm-input');
    const daysInput = document.getElementById('days-input');
    
    if (tjmInput) tjmInput.addEventListener('input', calculateMonthlyRevenue);
    if (daysInput) daysInput.addEventListener('input', calculateMonthlyRevenue);
});

document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionItem = header.parentElement;
            const isActive = accordionItem.classList.contains('active');
            
            document.querySelectorAll('.accordion-item').forEach(item => {
                item.classList.remove('active');
            });
            
            if (!isActive) {
                accordionItem.classList.add('active');
            }
        });
    });
});

document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener('click', (e) => {
        console.log('External link clicked:', e.target.href);
        // Here you could add analytics tracking
    });
});

