// Alerta de sucesso ao enviar o formulário
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('#contato form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Mensagem enviada com sucesso! Em breve entrarei em contato.');
      form.reset();
    });
  }

  // Scroll suave para seções ao clicar no menu
  document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Adicionar scroll suave ao clicar em links de navegação
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Exibir/ocultar menu mobile ao clicar no ícone (estrutura do ícone deve ser criada no HTML)
  const menuIcon = document.getElementById('menu-icon');
  const navUl = document.querySelector('nav ul');
  if (menuIcon && navUl) {
    menuIcon.addEventListener('click', function () {
      navUl.classList.toggle('show');
    });
  }

  // Botão flutuante do WhatsApp
 // const whatsappBtn = document.createElement('a');
  //whatsappBtn.href = 'https://wa.me/55XXXXXXXXXXX'; // Substitua pelo seu número
  //whatsappBtn.target = '_blank';
  //whatsappBtn.className = 'whatsapp-float';
  //whatsappBtn.title = 'Fale comigo no WhatsApp';
  //whatsappBtn.innerHTML = '<img src="https://img.icons8.com/?size=100&id=108653&format=png&color=000000" />';
  //document.body.appendChild(whatsappBtn);

  // Botão flutuante do Instagram
  const instagramBtn = document.createElement('a');
  instagramBtn.href = 'https://instagram.com/psi.celestino'; // Substitua pelo seu perfil
  instagramBtn.target = '_blank';
  instagramBtn.className = 'whatsapp-float'; // Mantém o estilo flutuante
  instagramBtn.title = 'Acesse meu Instagram';
  instagramBtn.setAttribute('aria-label', 'Instagram');
  instagramBtn.innerHTML = '<img src="https://img.icons8.com/?size=100&id=TEYr8ETaIfBJ&format=png&color=000000" alt="Instagram">';
  document.body.appendChild(instagramBtn);

  // FAQ acordeão
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', function () {
      const item = this.parentElement;
      item.classList.toggle('open');
      this.classList.toggle('active');
    });
  });
});
