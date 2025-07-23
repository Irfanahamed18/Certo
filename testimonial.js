document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll('.scroll-fade');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('scroll-in');
      }
    });
  }, { threshold: 0.3 });

  fadeElements.forEach(el => observer.observe(el));
});
