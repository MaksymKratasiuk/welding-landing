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
            // Для елементів що містять HTML (як наш checkbox)
            if (key === 'form_consent') {
                element.innerHTML = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
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



// Cookie Banner Functions
function showCookieBanner() {
    const banner = document.getElementById('cookieBanner');
    if (banner) {
        banner.classList.add('show');
    }
}

function hideCookieBanner() {
    const banner = document.getElementById('cookieBanner');
    if (banner) {
        banner.classList.remove('show');
    }
}

function acceptCookies() {
    localStorage.setItem('cookieConsent', 'accepted');
    hideCookieBanner();
    // Enable Google Analytics here if needed
    console.log('Cookies accepted');
}

function declineCookies() {
    localStorage.setItem('cookieConsent', 'declined');
    hideCookieBanner();
    // Disable Google Analytics here if needed
    console.log('Cookies declined');
}

// Check cookie consent on page load
function checkCookieConsent() {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
        // Show banner after a short delay
        setTimeout(showCookieBanner, 1000);
    }
}

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
    
    // Check cookie consent
    checkCookieConsent();
});
