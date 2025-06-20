document.addEventListener('DOMContentLoaded', function () {
  // Alerta de sucesso ao enviar o formulário de contato (se existir)
  const form = document.querySelector('#contato form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Mensagem enviada com sucesso! Em breve entrarei em contato.');
      form.reset();
    });
  }

  // Scroll suave para todos os links internos
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

  // Menu mobile (só funciona se existir o ícone e o menu)
  const menuIcon = document.getElementById('menu-icon');
  const navUl = document.querySelector('nav ul');
  if (menuIcon && navUl) {
    menuIcon.addEventListener('click', function () {
      navUl.classList.toggle('show');
    });
  }

  // Menu hambúrguer para mobile
  const menuToggle = document.querySelector('.menu-toggle');
  const headerNav = document.querySelector('.header-nav');
  const menuClose = document.querySelector('.menu-close');

  if (menuToggle && headerNav) {
    menuToggle.addEventListener('click', function () {
      headerNav.classList.toggle('show');
    });
  }
  if (menuClose && headerNav) {
    menuClose.addEventListener('click', function () {
      headerNav.classList.remove('show');
    });
  }
  // Fecha o menu ao clicar em um link
  headerNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => headerNav.classList.remove('show'));
  });

  // FAQ: abre/fecha respostas ao clicar na pergunta
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', function () {
      const item = this.parentElement;
      // Fecha todos os outros
      document.querySelectorAll('.faq-item').forEach(i => {
        if (i !== item) {
          i.classList.remove('open');
          i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        }
      });
      // Alterna o atual
      const isOpen = item.classList.toggle('open');
      this.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      if (isOpen) {
        console.log('Pergunta aberta:', this.textContent.trim());
      }
    });
  });

  // Todos os botões "Agende sua consulta inicial" abrem o link em nova aba
  document.querySelectorAll('.sobre-agende-btn').forEach(function(btn) {
    btn.addEventListener('click', function () {
      window.open('https://form.respondi.app/lyML7wxf', '_blank');
    });
  });
});

