let intro = document.querySelector(".intro");
let logo = document.querySelector("h1logo")
window.addEventListener("DOMContentLoaded", ()=>{
    setTimeout(()=>{
        intro.style.top = '50vh';
    }, 1500)
});
window.addEventListener("DOMContentLoaded", ()=>{
    setTimeout(()=>{
        intro.style.top = '-100vh';
    }, 2500)
})