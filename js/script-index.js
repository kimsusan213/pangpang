
// CHANGE NAVIGATION ON SCROLL
var nav = document.querySelector('.nav-bar-transparent');
window.onscroll = function() {
    if(window.pageYOffset > window.innerHeight * .5) {
        nav.classList.add('nav-bar-white');
        nav.classList.remove('nav-bar-transparent');
        document.getElementById('nav-logo').src="img/pangpang_white.png";
    }
    else {
        nav.classList.add('nav-bar-transparent');
        nav.classList.remove('nav-bar-white');
        document.getElementById('nav-logo').src="img/pangpang_transparent.png";
    }
}


// SLIDER
var sliderContainers = document.querySelectorAll('.item-slider-container');
var prevBtn = document.querySelectorAll('.item-button-prev');
var nextBtn = document.querySelectorAll('.item-button-next');
var slideWidth = parseInt(window.getComputedStyle(document.querySelector('.item-card')).width);
var slideMargin = parseInt(window.getComputedStyle(document.querySelector('.item-card')).marginRight);
var offset = slideWidth + slideMargin;
var currentIndex = [];
for(i=0; i < sliderContainers.length; i++) {
    currentIndex[i] = 0;
}
function moveSlide(num, index, button) {
    let slides = button.parentNode.querySelector('.item-slider-wrapper');
    let slide = button.parentNode.querySelectorAll('.item-card');
    let slideCount = slide.length;
    let totalWidth = offset * slideCount;
    slides.style.width = totalWidth + 'px';
    slides.style.left = -index * offset + 'px';
    currentIndex[num] = index;

    if(currentIndex[num] == slideCount - 5) {
        button.parentNode.querySelector('.item-button-next').style.visibility = "hidden";
    } else {
        button.parentNode.querySelector('.item-button-next').style.visibility = "visible";
    }
    if(currentIndex[num] == 0) {
        button.parentNode.querySelector('.item-button-prev').style.visibility = "hidden";
    } else {
        button.parentNode.querySelector('.item-button-prev').style.visibility = "visible";
    }
}

for(let i = 0; i < sliderContainers.length; i++) {
    nextBtn[i].addEventListener('click', ()=> {
        moveSlide(i, currentIndex[i] + 1, event.currentTarget);
    })
    prevBtn[i].addEventListener('click', ()=> {
        moveSlide(i, currentIndex[i] - 1, event.currentTarget);
    })
}

// MOBILE TOUCH SWIPE
// const slider = document.querySelector('.item-slider-container');
// const innerSlider = document.querySelector('.item-slider-wrapper');
// let pressed = false;
// let initialPosition = 0;
// let transform = 0;

// function checkBoundary() {

//     const offsetX = window.getComputedStyle(innerSlider).getPropertyValue('transform').split(',')[4];
//     console.log(Math.abs(offsetX));
//     // console.log(innerSlider.getBoundingClientRect().right);
//     // console.log(innerSlider.getBoundingClientRect().left);
//     // Math.abs(offsetX) > parseInt(window.getComputedStyle(innerSlider).width)
//     if( offsetX > 0) {
//         innerSlider.style.transform = 'translateX(0)';

//     }else if (innerSlider.getBoundingClientRect().right < 0) {
//         innerSlider.style.transform = `translateX(-${parseInt(window.getComputedStyle(innerSlider).width)}px)`
//         console.log('end reached');
//     }
// }

// const gestureStart = (e)=>{
//     initialPosition = e.pageX;
//     pressed = true;
//     const transformMatrix = window.getComputedStyle(innerSlider).getPropertyValue('transform');
//     if (transformMatrix !=='none') {
//         transform = parseInt(transformMatrix.split(',')[4].trim());
//     }
// }
// const gestureMove = (e)=>{
//     if(pressed) {
//         const diffX = e.pageX - initialPosition;
//         innerSlider.style.transform = `translateX(${transform + diffX}px)`;
//         checkBoundary();
//     }
// }
// const gestureEnd = (e)=>{
//     pressed= false;
// }

// if (window.PointerEvent) {
//     window.addEventListener('pointerdown', gestureStart)
//     window.addEventListener('pointermove', gestureMove)
//     window.addEventListener('pointerup', gestureEnd)
// } else {
//     window.addEventListener('touchdown', gestureStart)
//     window.addEventListener('touchmove', gestureMove)
//     window.addEventListener('touchup', gestureEnd)
// }



// BANNER
var bannerContainer = document.querySelector('.banner-container .banner-wrapper');
var bannerSlides = document.querySelectorAll('.banner-container .banner-slide');
var bannerPrevBtn = document.querySelector('.banner-button-prev');
var bannerNextBtn = document.querySelector('.banner-button-next');
var bannerSlideWidth = parseInt(window.getComputedStyle(bannerSlides[0]).width);
var bannerMarginRight = parseInt(window.getComputedStyle(bannerSlides[0]).marginRight);
var bannerOffset = bannerSlideWidth + bannerMarginRight;
var bannerSlideCount = bannerSlides.length;
var bullets = document.querySelectorAll('.banner-pagination-bullet');
var bannerIndex = 0;

bannerContainer.style.width = bannerOffset * bannerSlideCount + 'px';

function moveBanner (index) {
    bannerContainer.style.left = -index * bannerOffset + 'px';
    bullets[bannerIndex].classList.remove('bullet-active');
    bullets[index].classList.add("bullet-active");
    bannerIndex = index;
}
bannerNextBtn.addEventListener('click', ()=> {
    if (bannerIndex + 1 == bannerSlideCount) { moveBanner(0)}
    else { moveBanner(bannerIndex + 1)}
})
bannerPrevBtn.addEventListener('click', ()=> {
    if (bannerIndex < 1) { moveBanner(bannerSlideCount - 1)}
    else { moveBanner(bannerIndex - 1)}
})

var mobileMenuBtn = document.querySelector('.nav-bar-mobile .right');
var mobileMenu = document.querySelector('.nav-bar-mobile-menu');
mobileMenuBtn.addEventListener('click', ()=> {
    mobileMenu.classList.toggle('opened');
})