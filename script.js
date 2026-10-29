const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector(".form-status");
const hero = document.querySelector(".hero");
const glow = document.querySelector(".cursor-glow");
const canvas = document.querySelector("#hero-canvas");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const precisePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
document.documentElement.classList.add("is-enhanced");

if (window.lucide) {
  window.lucide.createIcons();
}

navToggle?.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav?.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    siteNav.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  }
});

const pointer = {
  x: window.innerWidth * 0.62,
  y: window.innerHeight * 0.42,
  active: true,
};

function heroIsVisible() {
  if (!hero) return false;
  const rect = hero.getBoundingClientRect();
  return rect.bottom > 0 && rect.top < window.innerHeight;
}

function resetParallax() {
  document.querySelectorAll("[data-parallax]").forEach((element) => {
    element.style.transform = "translate3d(0, 0, 0)";
  });
}

function updatePointer(event) {
  if (reduceMotion.matches || !precisePointer.matches) return;
  pointer.x = event.clientX;
  pointer.y = event.clientY;
  pointer.active = heroIsVisible();

  if (!hero || !glow || !pointer.active) {
    resetParallax();
    return;
  }

  const rect = hero.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width) * 100;
  const y = ((event.clientY - rect.top) / rect.height) * 100;
  glow.style.setProperty("--x", `${Math.max(0, Math.min(100, x))}%`);
  glow.style.setProperty("--y", `${Math.max(0, Math.min(100, y))}%`);

  document.querySelectorAll("[data-parallax]").forEach((element) => {
    const strength = Number(element.dataset.parallax || 0);
    const moveX = ((event.clientX / window.innerWidth) - 0.5) * strength;
    const moveY = ((event.clientY / window.innerHeight) - 0.5) * strength;
    element.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
  });
}

window.addEventListener("pointermove", updatePointer);
const header = document.querySelector(".site-header");
const backToTop = document.querySelector(".back-to-top");
let scrollFrame = 0;
function updateScrollState() {
  scrollFrame = 0;
  header?.classList.toggle("is-compact", window.scrollY > 64);
  backToTop?.classList.toggle("is-visible", window.scrollY > 600);
  pointer.active = !reduceMotion.matches && precisePointer.matches && heroIsVisible();
  if (!pointer.active) resetParallax();
}
window.addEventListener("scroll", () => {
  if (!scrollFrame) scrollFrame = requestAnimationFrame(updateScrollState);
}, { passive: true });
window.addEventListener("pageshow", updateScrollState);
updateScrollState();
reduceMotion.addEventListener("change", updateScrollState);
precisePointer.addEventListener("change", updateScrollState);

// Only off-screen content receives a hidden starting state. Without JS it stays visible.
function bootScrollReveals() {
  if (!("IntersectionObserver" in window) || reduceMotion.matches) return;
  const targets = document.querySelectorAll(
    ".about .section-heading, .about-copy, .services .section-heading, .process .section-heading, " +
    ".service-card, .process-card, .portfolio-heading, .project-card, .portfolio-invitation, " +
    ".contact .section-heading, .contact-form"
  );
  const reveal = element => {
    element.classList.remove("reveal-pending");
    observer.unobserve(element);
  };
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) reveal(entry.target); });
  }, { rootMargin: "0px 0px -36px 0px", threshold: 0 });

  targets.forEach(element => {
    const rect = element.getBoundingClientRect();
    // Content already seen, focus targets and restored scroll positions must stay visible.
    if (rect.top < window.innerHeight || element.contains(document.activeElement)) return;
    element.dataset.reveal = "";
    if (element.matches(".service-card, .process-card, .project-card")) {
      const index = Array.from(element.parentElement.children).indexOf(element);
      element.style.setProperty("--reveal-delay", precisePointer.matches ? Math.min(index, 2) * 90 + "ms" : "0ms");
    }
    element.classList.add("reveal-pending");
    observer.observe(element);
  });
  document.addEventListener("focusin", event => {
    const element = event.target.closest?.("[data-reveal]");
    if (element) reveal(element);
  });
  reduceMotion.addEventListener("change", () => {
    if (!reduceMotion.matches) return;
    targets.forEach(reveal);
    observer.disconnect();
  });
  // Printing or searching the page should never leave content transparent.
  window.addEventListener("beforeprint", () => targets.forEach(reveal));
}
bootScrollReveals();

document.querySelectorAll('a[href="#topo"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: reduceMotion.matches ? "auto" : "smooth" });
    siteNav?.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

function bootHeroCanvas() {
  if (!canvas) return;

  const context = canvas.getContext("2d");
  if (!context) return;
  const particles = [];
  let width = 0;
  let height = 0;
  let animationFrame = 0;
  let onScreen = heroIsVisible();

  function resize() {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = canvas.offsetWidth;
    height = canvas.offsetHeight;
    canvas.width = Math.floor(width * ratio);
    canvas.height = Math.floor(height * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);

    const targetCount = Math.max(24, Math.min(60, Math.floor(width / 24)));
    particles.length = 0;

    for (let index = 0; index < targetCount; index += 1) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.36,
        vy: (Math.random() - 0.5) * 0.36,
        radius: Math.random() * 1.6 + 0.7,
      });
    }
  }

  function drawLine(a, b, alpha, color = "109, 255, 157") {
    context.strokeStyle = `rgba(${color}, ${alpha})`;
    context.lineWidth = 1;
    context.beginPath();
    context.moveTo(a.x, a.y);
    context.lineTo(b.x, b.y);
    context.stroke();
  }

  function tick() {
    animationFrame = 0;
    if (reduceMotion.matches || document.hidden || !onScreen) return;
    context.clearRect(0, 0, width, height);

    particles.forEach((particle, index) => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x < -20) particle.x = width + 20;
      if (particle.x > width + 20) particle.x = -20;
      if (particle.y < -20) particle.y = height + 20;
      if (particle.y > height + 20) particle.y = -20;

      const dx = pointer.x - particle.x;
      const dy = pointer.y - particle.y;
      const distanceToPointer = Math.hypot(dx, dy);

      if (pointer.active && distanceToPointer < 220) {
        particle.x -= dx * 0.0018;
        particle.y -= dy * 0.0018;
        drawLine(particle, pointer, 0.28 * (1 - distanceToPointer / 220), "95, 217, 255");
      }

      for (let next = index + 1; next < particles.length; next += 1) {
        const other = particles[next];
        const distance = Math.hypot(particle.x - other.x, particle.y - other.y);
        if (distance < 108) {
          drawLine(particle, other, 0.10 * (1 - distance / 108));
        }
      }

      context.fillStyle = "rgba(247, 251, 255, 0.7)";
      context.beginPath();
      context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      context.fill();
    });

    animationFrame = requestAnimationFrame(tick);
  }

  function syncAnimation() {
    cancelAnimationFrame(animationFrame);
    animationFrame = 0;
    if (!reduceMotion.matches && !document.hidden && onScreen) {
      animationFrame = requestAnimationFrame(tick);
    } else {
      context.clearRect(0, 0, width, height);
    }
  }
  resize();
  syncAnimation();
  window.addEventListener("resize", () => { resize(); syncAnimation(); });
  document.addEventListener("visibilitychange", syncAnimation);
  reduceMotion.addEventListener("change", syncAnimation);
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(entries => {
      onScreen = entries[0].isIntersecting;
      syncAnimation();
    }).observe(hero);
  } else {
    window.addEventListener("scroll", () => {
      const visible = heroIsVisible();
      if (visible !== onScreen) { onScreen = visible; syncAnimation(); }
    }, { passive: true });
  }
}

bootHeroCanvas();

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(contactForm);
  const name = data.get("name");
  const email = data.get("email");
  const project = data.get("project");
  const message = data.get("message");
  const subject = encodeURIComponent(`Novo projeto Maximos Lab - ${project}`);
  const body = encodeURIComponent(
    `Nome: ${name}\nE-mail: ${email}\nTipo de projeto: ${project}\n\nMensagem:\n${message}`,
  );

  window.location.href = `mailto:contato.maximoslab@gmail.com?subject=${subject}&body=${body}`;
  formStatus.textContent = "Mensagem preparada. Confirme o envio no seu aplicativo de e-mail.";
});

