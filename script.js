

const heroSlides = document.querySelectorAll('#heroSlider .hero-slide');
const heroPrev = document.getElementById('heroPrev');
const heroNext = document.getElementById('heroNext');
const heroDotsWrap = document.getElementById('heroDots');
const heroSlider = document.getElementById('heroSlider');

let heroIndex = 0;
let heroInterval;

function buildHeroDots() {
  if (!heroDotsWrap) return;
  heroDotsWrap.innerHTML = '';

  heroSlides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'hero-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goHero(i));
    heroDotsWrap.appendChild(dot);
  });
}

function setHeroActive(index) {
  heroSlides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });

  const dots = heroDotsWrap?.querySelectorAll('.hero-dot') || [];
  dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
}

function nextHero() {
  heroIndex = (heroIndex + 1) % heroSlides.length;
  setHeroActive(heroIndex);
}

function prevHero() {
  heroIndex = (heroIndex - 1 + heroSlides.length) % heroSlides.length;
  setHeroActive(heroIndex);
}

function goHero(i) {
  heroIndex = i;
  setHeroActive(heroIndex);
}

function startHeroAuto() {
  stopHeroAuto();
  heroInterval = setInterval(nextHero, 2000);
}

function stopHeroAuto() {
  if (heroInterval) clearInterval(heroInterval);
}

if (heroSlides.length > 0) {
  buildHeroDots();
  setHeroActive(0);
  startHeroAuto();

  heroNext?.addEventListener('click', () => { nextHero(); startHeroAuto(); });
  heroPrev?.addEventListener('click', () => { prevHero(); startHeroAuto(); });

  heroSlider?.addEventListener('mouseenter', stopHeroAuto);
  heroSlider?.addEventListener('mouseleave', startHeroAuto);
}


// Scroll-driven season switch (IntersectionObserver)
const steps = document.querySelectorAll(".ss-step");
const railTabs = document.querySelectorAll(".ss-rail .ss-tab");
const ssImg = document.getElementById("ssImage");

const seasonImages = {
  winter: { img: "imgs/4.jpg", alt: "Winter School - Antalya & Istanbul" },
  spring: { img: "imgs/3.jpg", alt: "Spring School - Cappadocia" },
  summer: { img: "imgs/1.jpg", alt: "Summer School - Istanbul" }
};

function setActiveSeason(season) {
  // highlight rail
  railTabs.forEach(t => t.classList.toggle("is-active", t.dataset.season === season));

  // update image (NO effects)
  const d = seasonImages[season];
  if (d && ssImg) {
    ssImg.src = d.img;
    ssImg.alt = d.alt;
  }
}

// clicking tab should scroll to its section
railTabs.forEach(btn => {
  btn.addEventListener("click", () => {
    const target = document.querySelector(`.ss-step[data-season="${btn.dataset.season}"]`);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// observe steps while scrolling
const io = new IntersectionObserver((entries) => {
  // pick the entry most visible
  const visible = entries
    .filter(e => e.isIntersecting)
    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

  if (visible) {
    setActiveSeason(visible.target.dataset.season);
  }
}, {
  threshold: [0.2, 0.35, 0.5, 0.65],
  rootMargin: "-20% 0px -50% 0px"
});

steps.forEach(step => io.observe(step));



console.log('Delightful Istanbul website loaded successfully! 🌟');