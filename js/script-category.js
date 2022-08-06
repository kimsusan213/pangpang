// var sliderContainers = document.querySelectorAll('.item-slider-container');
// var prevBtn = document.querySelectorAll('.item-button-prev');
// var nextBtn = document.querySelectorAll('.item-button-next');
// var slideWidth = parseInt(window.getComputedStyle(document.querySelector('.item-card')).width);
// var slideMargin = parseInt(window.getComputedStyle(document.querySelector('.item-card')).marginRight);
// var offset = slideWidth + slideMargin;
// var currentIndex = [];
// for(i=0; i < sliderContainers.length; i++) {
//     currentIndex[i] = 0;
// }
// function moveSlide(num, index, button) {
//     let slides = button.parentNode.querySelector('.item-slider-wrapper');
//     let slide = button.parentNode.querySelectorAll('.item-card');
//     let slideCount = slide.length;
//     let totalWidth = offset * slideCount;
//     slides.style.width = totalWidth + 'px';
//     slides.style.left = -index * offset + 'px';
//     currentIndex[num] = index;

//     if(currentIndex[num] == slideCount - 5) {
//         button.parentNode.querySelector('.item-button-next').style.visibility = "hidden";
//     } else {
//         button.parentNode.querySelector('.item-button-next').style.visibility = "visible";
//     }
//     if(currentIndex[num] == 0) {
//         button.parentNode.querySelector('.item-button-prev').style.visibility = "hidden";
//     } else {
//         button.parentNode.querySelector('.item-button-prev').style.visibility = "visible";
//     }
// }

// for(let i = 0; i < sliderContainers.length; i++) {
//     nextBtn[i].addEventListener('click', ()=> {
//         moveSlide(i, currentIndex[i] + 1, event.currentTarget);
//     })
//     prevBtn[i].addEventListener('click', ()=> {
//         moveSlide(i, currentIndex[i] - 1, event.currentTarget);
//     })
// }
// CHANGE NAVIGATION ON SCROLL
var nav = document.querySelector('.nav-transparent-wrapper');
window.onscroll = function() {
    if(window.pageYOffset > window.innerHeight * .4) {
        nav.classList.add('nav-white-wrapper');
        nav.classList.remove('.nav-transparent-wrapper');
        document.querySelector('.logo img').src="img/pangpang_white.png";
        document.querySelector('.nav-bar-mobile .left .white').style.display = 'none';
        document.querySelector('.nav-bar-mobile .left .black').style.display = 'block';
        document.querySelector('.nav-bar-mobile .right .white').style.display = 'none';
        document.querySelector('.nav-bar-mobile .right .black').style.display = 'block';
    }
    else {
        nav.classList.add('nav-transparent-wrapper');
        nav.classList.remove('nav-white-wrapper');
        document.querySelector('.logo img').src="img/pangpang_transparent.png";
        document.querySelector('.nav-bar-mobile .left .white').style.display = 'block';
        document.querySelector('.nav-bar-mobile .left .black').style.display = 'none';
        document.querySelector('.nav-bar-mobile .right .white').style.display = 'block';
        document.querySelector('.nav-bar-mobile .right .black').style.display = 'none';
    }
}

var sortOptionTitle = document.querySelector('.items-display-sort-text');
var sortContainer = document.querySelector('.items-display-sort-option');
var sortOptions = document.querySelectorAll('.sort-option');

sortOptionTitle.addEventListener('click', ()=> {
    if (window.getComputedStyle(sortContainer).visibility == "hidden") {
        sortContainer.style.visibility = "visible";
    } else {
        sortContainer.style.visibility = "hidden";
    } 
})

sortOptions.forEach(option => 
    option.addEventListener('click', ()=> {
        option.parentElement.querySelector('.selected').classList.remove('selected');
        option.classList.add('selected');
        // sortContainer.style.visibility = "hidden";
    })
)



var filterBtn = document.querySelector('.filter-button-mobile');
var filterMobileWindow = document.querySelector('.items-category-mobile');
var filterMobileWindowClose = document.querySelector('.category-mobile-buttons .button.cancel');
filterBtn.addEventListener('click', ()=> {
    filterMobileWindow.style.display = 'flex';
})
filterMobileWindowClose.addEventListener('click', ()=>{
    filterMobileWindow.style.display = 'none';
})
