import * as functions from "./modules/functions.js";

functions.isWebp();

// import Swiper, { Navigation, Pagination } from 'swiper';

// const swiper = new Swiper();
if (document.querySelector('.intro__drop-button')) {
    const btns = document.querySelectorAll('.intro__drop-button');

    btns.forEach(btn => {
        btn.addEventListener('click', (event) => {
            event.stopPropagation();
            
            // Проверяем, если нажатая кнопка уже активна
            const isActive = btn.classList.contains('active');
            
            // Снимаем активный класс со всех кнопок
            btns.forEach(btn2 => btn2.classList.remove('active'));

            // Если нажатая кнопка не была активна, добавляем активный класс
            if (!isActive) {
                btn.classList.add('active');
            }
        });
    });

    document.addEventListener('click', () => {
        btns.forEach(btn => btn.classList.remove('active'));
    });
}

if (document.querySelector('.header__lang-btn')) {
    const btns = document.querySelectorAll('.header__lang-btn');

    btns.forEach(btn => {
        btn.addEventListener('click', (event) => {
            event.stopPropagation();
            
            // Проверяем, если нажатая кнопка уже активна
            const isActive = btn.classList.contains('active');
            
            // Снимаем активный класс со всех кнопок
            btns.forEach(btn2 => btn2.classList.remove('active'));

            // Если нажатая кнопка не была активна, добавляем активный класс
            if (!isActive) {
                btn.classList.add('active');
            }
        });
    });

    document.addEventListener('click', () => {
        btns.forEach(btn => btn.classList.remove('active'));
    });
}

if(document.querySelectorAll('.intro__tag-item')){
    const items = document.querySelectorAll('.intro__tag-item');

    items.forEach(item => {
        item.addEventListener('click', () => {
            // Удаляем класс 'active' у всех элементов
            items.forEach(i => i.classList.remove('active'));
            
            // Добавляем класс 'active' на кликнутый элемент
            item.classList.add('active');
        });
    });
}


const headerButton = document.querySelector(".header__button");
const headerMenu = document.querySelector(".header__menu");
const headerLinks = document.querySelectorAll(".header__link");

let menuOpened = false;
const menuToggle = () => {
    menuOpened = !menuOpened;
    headerButton.classList.toggle("open");
    headerMenu.classList.toggle("open");
};

headerButton.onclick = menuToggle;


window.onclick = (e) => {
  if (
    menuOpened &&
    !e.composedPath().includes(headerButton) &&
    !e.composedPath().includes(headerMenu)
  )
    menuToggle();
};

headerLinks.forEach(el => {
  el.addEventListener('click', () => {
    menuToggle()
  })
})