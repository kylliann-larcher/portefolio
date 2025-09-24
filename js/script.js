
// Theme toggle with persistence
const root = document.documentElement;
const saved = localStorage.getItem('theme');
if(saved === 'light'){ root.classList.add('light'); }
document.getElementById('themeToggle').addEventListener('click', () => {
  root.classList.toggle('light');
  localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
});

// Reveal on scroll (simple, no library)
const revealEls = document.querySelectorAll('.section .card, .section h2, .hero-grid');
const obs = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.style.transition='opacity .5s ease, transform .5s ease';
      e.target.style.opacity='1';
      e.target.style.transform='translateY(0)';
      obs.unobserve(e.target);
    }
  });
},{threshold:0.08});
revealEls.forEach(el=>{
  el.style.opacity='0';
  el.style.transform='translateY(8px)';
  obs.observe(el);
});
