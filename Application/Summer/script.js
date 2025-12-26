// Main JavaScript file

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

if (navbar) {
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
} else {
    console.warn("Navbar element with id 'navbar' not found.");
}


// Mobile menu toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
} else {
    console.warn("Mobile menu elements ('mobileMenuToggle' or 'navMenu') not found.");
}


// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (mobileMenuToggle && navMenu) {
            mobileMenuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // 80px offset for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

// This is your FIRST observer, for general animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all animated elements
const animatedElements = document.querySelectorAll('.about-card, .requirement-item, .step-card, .fade-in');
animatedElements.forEach(element => {
    observer.observe(element);
});

// Parallax effect for hero background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add stagger animation to cards
const aboutCards = document.querySelectorAll('.about-card');
aboutCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
});

const stepCards = document.querySelectorAll('.step-card');
stepCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.15}s`;
});

const requirementItems = document.querySelectorAll('.requirement-item');
requirementItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.2}s`;
});

// Dynamic year in footer
const currentYear = new Date().getFullYear();
const footerText = document.querySelector('.footer p');
if (footerText) {
    // Using textContent is safer, but innerHTML allows for entities if needed.
    // Let's stick to what you had, but slightly safer:
    footerText.textContent = `© ${currentYear} Delightful Istanbul. All rights reserved.`;
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Prevent scroll during page load
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.body.style.overflow = 'visible';
    }, 100);

     const sparkleContainer = document.querySelector(".sparkle-layer");

    const SPARKLE_COUNT = 35; // change to 50 or 20 depending on preference

    for (let i = 0; i < SPARKLE_COUNT; i++) {
        const s = document.createElement("div");
        s.classList.add("sparkle");

        // random size
        const sizeClass = Math.random() < 0.33 ? "small" :
                          Math.random() < 0.66 ? "medium" : "large";
        s.classList.add(sizeClass);

        // random horizontal starting point
        s.style.left = Math.random() * 100 + "%";

        // random position below (to rise upward)
        s.style.bottom = (Math.random() * -100) + "px";

        // different animation speeds & delays
        s.style.animationDuration = 3 + Math.random() * 4 + "s";
        s.style.animationDelay = Math.random() * 4 + "s";

        sparkleContainer.appendChild(s);
    }
});

// --- Counter Animation Section ---

const animationDuration = 2000; // 2 seconds

// --- The Animation Function ---
const animateCounter = (counter) => {
    const target = +counter.dataset.target; // Get target number
    const suffix = counter.dataset.suffix || ''; // Get suffix (like "+")

    // Calculate increment
    const steps = 500; // Total steps for the animation
    const stepTime = animationDuration / steps;
    const increment = target / steps;

    let current = 0;

    const timer = setInterval(() => {
        current += increment;

        if (current >= target) {
            clearInterval(timer);
            counter.innerText = target + suffix; // Set final value
        } else {
            counter.innerText = Math.ceil(current); // Update display
        }
    }, stepTime);
};

// --- The Trigger (Intersection Observer) ---

let hasAnimated = false; // Flag to ensure it only runs once

// This is your SECOND observer, renamed to "counterObserver"
const counterObserver = new IntersectionObserver((entries, observerInstance) => {
    const [entry] = entries; // Get the first (and only) entry

    // If the element is intersecting (visible) and hasn't animated yet
    if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true; // Set flag

        const statsContainer = entry.target;

        // Start all counters within that section
        statsContainer.querySelectorAll('.counter').forEach(animateCounter);

        observerInstance.unobserve(statsContainer);
    }
}, {
    threshold: 0.5 // Trigger when 50% of the element is visible
});

// === THIS IS THE KEY CHANGE ===
// Select the stats section using YOUR class ".hero-stats"
const statsContainer = document.querySelector('.hero-stats');

// Tell your "counterObserver" variable to start watching the element
if (statsContainer) {
    counterObserver.observe(statsContainer);
} else {
    console.warn("Counter container with class '.hero-stats' not found.");
}

console.log('Delightful Istanbul Winter School - Application page loaded successfully!');