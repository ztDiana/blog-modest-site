new Swiper('.swiper',{
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev'
    },
    pagination:{
        el:".swiper-pagination",
        clickable:true,

        type:"bullets", 
        // за замовчуванням
        
        320:{
            dynamicBullets:false},
        768:{
            dynamicBullets:true,
                },
        992:{
            dynamicBullets:true,
            }
        
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable:true,
      },
    //   можливість перетаскувати і свайпати слайди
    simulateTouch:true,
    // чутливість слайду
    touchRatio:1,
    // кут спрацювання свайпа
    touchAngle:45,
    // курсор свайпа
    grabCursor:true,
    // переключення при кліку на слайд
    slideToClickedSlide: true,
    hashNavigation:{
        watchState:true,
        // навигация с помощью стрелок браузера
    },

    keyboard:{
        // on/off
        enabled:true,
        // включить. виключ только когда слайдер в пределах вьюпорта
        onlyInViewport:true,
        // включити виключити управління клавішами пейдж ап пейдж давн
        pageUpDown:true,

    },
    
    slidesPerView: 1, 
    
    spaceBetween:1,

    // активний слайд по центру

    centerSlide:true,
    
    mousewheel:{
        sensitivity:1,
        // класс обэкта на якому буде спрацьовувати прокрутка мишы
        eventsTarget:".swiper"
    },
    // безкынечний слайдер
    loop:true,
    
    // freemode-режим

    freemode:true,

    //  автопрокрутка
     autoplay: {
        // пауза мыж прокрутками
        delay: 2000,
        // Закінчити на останньому слайді
        stopOnLastSlide: false,
        // отключить после ручного переключения
        disableOnInteraction: true,
    },

    speed:800,

     effect:"fade",
    fadeEffect:{
        crossFade:true,
    }
});

let btn_send_message=document.querySelector(".btn-send-message");
console.log(btn_send_message)

let modal=document.querySelector(".modal")
console.log(modal)

let close_btn=document.querySelector(".form-cansel")

btn_send_message.addEventListener("click", open)
close_btn.addEventListener("click",close)

function open(){
    modal.classList.add("show")
    modal.classList.remove("hidden")
}
function close(){
    modal.classList.remove("show")
    modal.classList.add("hidden")
}


let mobileMenu=document.querySelector(".navMenu");
let mainMenu=document.querySelector(".navigation")

mobileMenu.addEventListener("click",function(){
    mobileMenu.classList.toggle("active-menu");
    if(mobileMenu.classList.contains("active-menu")){
        mainMenu.classList.add("active-menu");
    }
    else{
        mainMenu.classList.remove("active-menu")
    }
})
window.addEventListener("scroll",function(){
    if(window.scrollY>45){
        mobileMenu.classList.add("navMenuScroll")
    }
    else{ mobileMenu.classList.remove("navMenuScroll")
    }

})