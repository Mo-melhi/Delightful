

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

console.log("script.js loaded ✅");

const ENABLED = new Set([
  "JP", "RU", "KR", "CN", "KZ", "KG", "UZ",
  "NO", "SE", "GB", "EE", "LV", "LT", "BY", "UA", "MD",
  "RO", "BG", "GR", "MK", "RS", "XK", "BA", "AL",
  "IT", "FR", "ES", "PT", "MA", "TN",
  "CH", "DE", "AT", "CZ", "SK", "HU", "PL", "GE", "TR", "AZ",
  "IR", "AF", "PK", "IN", "BD", "TW", "MY", "ID",
  "AU", "ZA", "KE", "YE", "SA", "SY", "JO", "EG", "SD",
  "NG", "GH", "BR", "PE", "EC", "CU", "MX", "US", "CA",
  "CG"
]);

const countryData = {
  TR: { particepants: 106 },
  DE: { particepants: 20 },
  FR: { particepants: 15 },
  IT: { particepants: 10 },
  ES: { particepants: 8 },
  GB: { particepants: 5 },
  RU: { particepants: 12 },
  CN: { particepants: 18 },
  JP: { particepants: 7 },
  IN: { particepants: 25 },
  US: { particepants: 30 },
  CA: { particepants: 10 },
  AU: { particepants: 5 },
  BR: { particepants: 8 },
  ZA: { particepants: 4 },
  EG: { particepants: 6 },
  SA: { particepants: 3 },
  IR: { particepants: 9 },
  PK: { particepants: 11 },
  NG: { particepants: 7 },
  KE: { particepants: 5 },
  AR: { particepants: 4 },
  CO: { particepants: 3 },
  VE: { particepants: 2 },
  CL: { particepants: 1 },
};

const map = new jsVectorMap({
  selector: "#map",
  map: "world",
  backgroundColor: "transparent",

  zoomButtons: false,
  zoomOnScroll: false,
  zoomMin: 1,
  zoomMax: 1,

  onRegionTooltipShow(...args) {
    // Always grab the tooltip element from DOM (most reliable across builds)
    const tooltipEl = document.querySelector(".jvm-tooltip");

    // Extract code across different builds
    let code = null;

    // Common signatures:
    // (tooltip, code)
    if (args.length === 2 && typeof args[1] === "string") code = args[1];

    // (event, tooltip, code)
    if (args.length === 3 && typeof args[2] === "string") code = args[2];

    // (eventObject)
    if (!code && args.length === 1 && args[0] && typeof args[0] === "object") {
      const ev = args[0];
      code = ev.code || ev._code || ev.region || ev._region;
    }

    // Fallback: if code still missing, stop safely
    if (!code || !tooltipEl) return;

    // Disabled countries → hide tooltip
    if (!ENABLED.has(code)) {
      tooltipEl.style.display = "none";
      return;
    }

    const name = map.regions?.[code]?.config?.name || code;
    const d = countryData[code];

    tooltipEl.style.display = "block";
    tooltipEl.innerHTML = d
      ? `<strong>${name}</strong><br>
       particepants: ${d.particepants}<br>`
      : `<strong>${name}</strong><br>No data`;
  },


  


  onLoaded() {
  console.log("map loaded ✅");

  const tooltipEl = document.querySelector(".jvm-tooltip");

  ENABLED.forEach(code => {
    const el = document.querySelector(`#map [data-code="${code}"]`);
    if (!el) return;

    el.classList.add("is-enabled");

    // Hide tooltip when leaving THIS country
    el.addEventListener("mouseleave", () => {
      if (tooltipEl) tooltipEl.style.display = "none";
    });
  });

  // Also hide if leaving any unavailable country (optional but nicer)
  const allRegions = document.querySelectorAll("#map [data-code]");
  allRegions.forEach(r => {
    r.addEventListener("mouseleave", () => {
      if (tooltipEl) tooltipEl.style.display = "none";
    });
  });
},
});

document.querySelector("#map").addEventListener("mouseleave", () => {
  const tooltipEl = document.querySelector(".jvm-tooltip");
  if (tooltipEl) tooltipEl.style.display = "none";
});




console.log('Delightful Istanbul website loaded successfully! 🌟');

// ===============================
// Program Impact Count-Up (stats-overview)
// ===============================
(function () {
  const section = document.querySelector(".stats-overview");
  const counters = document.querySelectorAll(".stats-overview .stat-value");

  if (!section || counters.length === 0) return;

  function animateCount(el, target, duration = 1200) {
    const startTime = performance.now();
    const isDecimal = String(target).includes(".");
    const decimals = isDecimal ? (String(target).split(".")[1]?.length || 1) : 0;

    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const current = target * progress;

      el.textContent = isDecimal ? current.toFixed(decimals) : Math.floor(current);

      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = isDecimal ? target.toFixed(decimals) : String(target); // final exact value
    }

    requestAnimationFrame(tick);
  }

  function runCountersOnce() {
    counters.forEach(el => {
      if (el.dataset.animated === "true") return;

      const target = Number(el.dataset.target);
      if (Number.isNaN(target)) return;

      el.dataset.animated = "true";
      animateCount(el, target, 1200);
    });
  }

  // Trigger when section becomes visible
  const io = new IntersectionObserver(
    (entries) => {
      if (entries[0]?.isIntersecting) {
        runCountersOnce();
        io.disconnect();
      }
    },
    { threshold: 0.35 }
  );

  io.observe(section);
})();

const dlxBooksSwiper = new Swiper(".dlxBooks__swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,

  coverflowEffect: {
    rotate: 0,
    stretch: 120,       // pushes side cards outward (works great for horizontal)
    depth: 300,         // makes side cards go back
    modifier: 2.6,
    slideShadows: false
  },

  navigation: {
    nextEl: ".dlxBooks__btn--next",
    prevEl: ".dlxBooks__btn--prev"
  },
  breakpoints: {
    560: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 4
    },
    1024: {
      slidesPerView: 1
    }
  },
 
});
