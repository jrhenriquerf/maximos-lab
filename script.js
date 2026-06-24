const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector(".form-status");
const hero = document.querySelector(".hero");
const glow = document.querySelector(".cursor-glow");
const canvas = document.querySelector("#hero-canvas");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

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
window.addEventListener("scroll", () => {
  pointer.active = heroIsVisible();
  if (!pointer.active) resetParallax();
}, { passive: true });

document.querySelectorAll('a[href="#topo"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: reduceMotion.matches ? "auto" : "smooth" });
    siteNav?.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

function bootHeroCanvas() {
  if (!canvas || reduceMotion.matches) return;

  const context = canvas.getContext("2d");
  const particles = [];
  let width = 0;
  let height = 0;
  let animationFrame = 0;

  function resize() {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = canvas.offsetWidth;
    height = canvas.offsetHeight;
    canvas.width = Math.floor(width * ratio);
    canvas.height = Math.floor(height * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);

    const targetCount = Math.max(42, Math.min(92, Math.floor(width / 18)));
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
        if (distance < 128) {
          drawLine(particle, other, 0.13 * (1 - distance / 128));
        }
      }

      context.fillStyle = "rgba(247, 251, 255, 0.7)";
      context.beginPath();
      context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      context.fill();
    });

    animationFrame = requestAnimationFrame(tick);
  }

  resize();
  tick();
  window.addEventListener("resize", resize);

  reduceMotion.addEventListener("change", () => {
    cancelAnimationFrame(animationFrame);
    context.clearRect(0, 0, width, height);
    if (!reduceMotion.matches) {
      resize();
      tick();
    }
  });
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

  window.location.href = `mailto:contato@maximoslab.com.br?subject=${subject}&body=${body}`;
  formStatus.textContent = "Abrindo seu aplicativo de e-mail para enviar a mensagem.";
});

