const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector(".form-status");

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
