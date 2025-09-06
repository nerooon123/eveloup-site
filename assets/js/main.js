// Smooth scroll for in-page anchors
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el){
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

// Simple form handler (mailto fallback)
const form = document.querySelector('#contact-form');
if(form){
  form.addEventListener('submit', (e)=>{
    // Developer note: replace with your backend endpoint or Formspree/Netlify
    // e.preventDefault();
  });
}