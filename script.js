// WeldingHub Landing Page JavaScript
let currentLang = 'pl';

// Google Analytics functions
function loadGoogleAnalytics() {
    // Disable analytics by default
    window['ga-disable-G-55ZB5386PH'] = false;
    
    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-55ZB5386PH';
    document.head.appendChild(script);
    
    // Initialize Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', 'G-55ZB5386PH');
}

function disableGoogleAnalytics() {
    // Disable Google Analytics
    window['ga-disable-G-55ZB5386PH'] = true;
    
    // Delete existing analytics cookies
    const cookies = document.cookie.split(";");
    cookies.forEach(function(cookie) {
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
        if (name.startsWith('_ga') || name.startsWith('_gid') || name.startsWith('_gat')) {
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=." + window.location.hostname;
        }
    });
}

// Change Language Function
function changeLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    
    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            // For elements that contain HTML (like our checkbox)
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

    // Save preference ONLY if user has consented to cookies
    if (localStorage.getItem('cookieConsent') === 'accepted') {
        localStorage.setItem('preferredLanguage', lang);
    }
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
    // Load Google Analytics after consent
    loadGoogleAnalytics();
    console.log('Cookies accepted - Analytics enabled');
}

function declineCookies() {
    localStorage.setItem('cookieConsent', 'declined');
    hideCookieBanner();
    // Disable Google Analytics and delete cookies
    disableGoogleAnalytics();
    console.log('Cookies declined - Analytics disabled');
}

// Check cookie consent on page load
function checkCookieConsent() {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
        // Show banner IMMEDIATELY - no delay!
        showCookieBanner();
    } else if (consent === 'accepted') {
        // User previously accepted - load Analytics
        loadGoogleAnalytics();
    } else if (consent === 'declined') {
        // User previously declined - ensure Analytics is disabled
        disableGoogleAnalytics();
    }
}

// Load saved language preference
window.addEventListener('DOMContentLoaded', () => {
    const consent = localStorage.getItem('cookieConsent');
    
    // Only load saved language if user has consented to cookies
    if (consent === 'accepted') {
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
    }
    
    // Check cookie consent IMMEDIATELY
    checkCookieConsent();
});