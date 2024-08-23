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

document.querySelectorAll('.intro__tag-item').forEach((tabButton) => {
    tabButton.addEventListener('click', function() {
        // Remove the active class from all tab buttons
        document.querySelectorAll('.intro__tag-item').forEach((btn) => {
            btn.classList.remove('active');
        });

        // Remove the active class from all tab content sections
        document.querySelectorAll('.intro__wrap').forEach((tabContent) => {
            tabContent.classList.remove('active');
        });

        // Add the active class to the clicked tab button
        tabButton.classList.add('active');

        // Get the target tab from the data attribute
        const targetTab = tabButton.getAttribute('data-target');

        // Add the active class to the corresponding tab content
        document.getElementById(targetTab).classList.add('active');
    });
});


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

document.querySelectorAll('.intro__drop-item').forEach((item) => {
    item.addEventListener('click', function() {
        const parent = item.closest('.intro__drop'); // Find the closest parent with the class .intro__drop
        const hiddenInput = parent.querySelector('input[name="hiddenFieldName"]'); // Select the hidden input within the parent
        const button = parent.querySelector('.intro__drop-button'); // Select the button within the parent
        
        hiddenInput.value = item.getAttribute('value'); // Set the value from the button's value attribute
        button.textContent = item.textContent; // Update the button text to the selected item text
    });
});