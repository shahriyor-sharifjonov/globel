import * as functions from "./modules/functions.js";

functions.isWebp();

// import Swiper, { Navigation, Pagination } from 'swiper';

// const swiper = new Swiper();

if(document.querySelector('.intro__drop-button')){
    const btns = document.querySelectorAll('.intro__drop-button');
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(btn2 => {
                if(btn2 !== btn){
                    btn2.classList.remove('active')
                }
            })
            btn.classList.toggle('active')
        })
    })
}
