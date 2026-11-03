// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener('click',e=>{e.preventDefault(); document.querySelector(a.getAttribute('href'))?.scrollIntoView({behavior:'smooth'})})})
// Reveal
const observer = new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.style.opacity=1; entry.target.style.transform='translateY(0)'}})},{threshold:0.1})
document.querySelectorAll('.card-luxo').forEach(el=>{el.style.opacity=0; el.style.transform='translateY(20px)'; el.style.transition='all .6s ease'; observer.observe(el)})
