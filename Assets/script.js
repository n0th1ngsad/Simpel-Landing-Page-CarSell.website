const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
  });

  ScrollReveal().reveal('.hero-section h1, .hero-section p, .hero-section a', { origin: 'left' });
  ScrollReveal().reveal('.features .grid > *', { origin: 'bottom', interval: 200 });
  ScrollReveal().reveal('.cta h2, .cta p, .cta a', { origin: 'top' });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust offset as needed 
          behavior: 'smooth'
        });
      }
    });
  });