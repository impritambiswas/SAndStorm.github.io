const navList = document.querySelector('.nav-list');
const menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener('click', ()=>{
    const state = navList.getAttribute("data-visible");
    if (state === "false") {
        navList.setAttribute('data-visible', true);
        menuBtn.setAttribute('aria-expanded', true);
    }
    else if(state === "true") {
        navList.setAttribute('data-visible', false);
        menuBtn.setAttribute('aria-expanded', false);
    }
})