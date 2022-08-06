var weatherContainer = document.querySelector('.weather-container');
var weatherPopup = document.querySelector('.weather-popup');
var weatherClose = document.querySelector('.weather-popup-close');

weatherContainer.addEventListener('click', ()=> {
    if (window.getComputedStyle(weatherPopup).display == "none") {weatherPopup.style.display = "flex"}
    else {weatherPopup.style.display = "none"}
})
weatherClose.addEventListener('click', ()=> {
    weatherPopup.style.display = 'none';
})

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
    })
)


// SLIDERS
// var sliderContainers = document.querySelectorAll('.item-slider-container');
// var prevBtn = document.querySelectorAll('.slider-button-prev');
// var nextBtn = document.querySelectorAll('.slider-button-next');
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
//         button.parentNode.querySelector('.slider-button-next').style.visibility = "hidden";
//     } else {
//         button.parentNode.querySelector('.slider-button-next').style.visibility = "visible";
//     }
//     if(currentIndex[num] == 0) {
//         button.parentNode.querySelector('.slider-button-prev').style.visibility = "hidden";
//     } else {
//         button.parentNode.querySelector('.slider-button-prev').style.visibility = "visible";
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


// BESTSELLER SLIDE
var bestsellerPaginationBtn = document.querySelectorAll('.bestseller-slider-pagination .slide');
var bestsellerSlides = document.querySelector('.slide-wrapper');
var index;
function getWidth() {
    var bestsellerSlide = document.querySelector('.bestseller-slide');
    var w = bestsellerSlide.offsetWidth;
    return w;
}
function changeWidth() {
    var bestsellerSlide = document.querySelectorAll('.bestseller-slide');
    bestsellerSlide.forEach(slide => {
        slide.style.width = document.body.clientWidth - 2 * (parseInt(window.getComputedStyle(document.querySelector('.bestseller-items')).marginLeft)) + 'px';
    })
    bestsellerSlides.style.left = -index * getWidth() + 'px';

}
bestsellerSlides.style.width = getWidth() * (bestsellerPaginationBtn.length) + 'px';

function moveBestsellerSlide(target, i) {
    index = i;
    event.target.parentElement.querySelector('.active').classList.remove('active');
    event.target.classList.add('active');
    bestsellerSlides.style.left = -i * getWidth() + 'px';
}
for(let i=0; i < bestsellerPaginationBtn.length; i++) {
    bestsellerPaginationBtn[i].addEventListener('click', ()=> {
        moveBestsellerSlide(event.target, i);
    })
}
window.onload = ()=> {
    var bestsellerSlide = document.querySelectorAll('.bestseller-slide');
    bestsellerSlide.forEach(slide => {
        slide.style.width = document.body.clientWidth - 2 * (parseInt(window.getComputedStyle(document.querySelector('.bestseller-items')).marginLeft)) + 'px';
    })
}
window.onresize = ()=> {
    changeWidth();
}


var filterBtn = document.querySelector('.filter-button-mobile');
var filterMobileWindow = document.querySelector('.items-category-mobile');
var filterMobileWindowClose = document.querySelector('.category-mobile-buttons .button.cancel');
filterBtn.addEventListener('click', ()=> {
    filterMobileWindow.style.display = 'flex';
})
filterMobileWindowClose.addEventListener('click', ()=>{
    filterMobileWindow.style.display = 'none';
})
