document.querySelectorAll('nav a').forEach(anchor => {
  anchor.onclick = function(e){e.preventDefault();document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});};
});
document.getElementById('contactForm').onsubmit = function(e){e.preventDefault();this.querySelector('.form-success').style.display='block';this.reset();}
window.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.bar').forEach(bar=>{
    let w = bar.getAttribute('data-width');
    setTimeout(()=>{bar.style.width = w + '%';}, 300);
  });
})