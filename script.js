// WeldingHub Landing Page JavaScript
let currentLang = 'pl';

// Change Language Function
function changeLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    
    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Save preference
    localStorage.setItem('preferredLanguage', lang);
}

// Toggle Mobile Menu
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            document.getElementById('navLinks').classList.remove('active');
        }
    });
});

// Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Check if GDPR checkbox is checked
    const gdprCheckbox = this.querySelector('input[name="gdpr"]');
    if (!gdprCheckbox.checked) {
        alert('Please accept the GDPR consent to continue.');
        return;
    }
    
    // Here you can add form submission logic (Formspree, EmailJS, etc.)
    alert(translations[currentLang].form_submit + ' ✓');
    this.reset();
});

// Load saved language preference
window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && translations[savedLang]) {
        changeLanguage(savedLang);
        document.querySelector(`.lang-btn[onclick="changeLanguage('${savedLang}')"]`).classList.add('active');
        document.querySelectorAll('.lang-btn').forEach(btn => {
            if (!btn.getAttribute('onclick').includes(savedLang)) {
                btn.classList.remove('active');
            }
        });
    }
});
