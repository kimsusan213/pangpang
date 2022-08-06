var nav = document.querySelector('.nav-bar-black');
var box = document.querySelector('.booking-box');
var item_black_header = document.querySelector('.item-detail-head');
var shortcutNav = document.querySelector('.item-detail-shortcut');
// position of the booking box relative to the viewport
var box_top = box.getBoundingClientRect().top;
// absolute position of the booking box
var box_position = box_top + window.scrollY;
//absolute position of item_detail_body bottom
var body_bottom = document.querySelector('.item-detail-body').getBoundingClientRect().bottom + window.scrollY - 
(box.offsetHeight + nav.offsetHeight + shortcutNav.offsetHeight);

window.onscroll = function() {
    if (window.pageYOffset + nav.offsetHeight > box_position ){
        box.classList.add('sticky');
    } else {
        box.classList.remove('sticky');
    }   

    if( window.pageYOffset > item_black_header.offsetHeight) {
        nav.classList.add('nav-bar-white');
        nav.classList.remove('nav-bar-black');
        document.querySelectorAll("#logo-version").forEach(logo => {
            logo.src = "img/pangpang_white.png";
        });
        document.querySelector('.nav-bar-contents-mobile .left img').src = "https://d2mgzmtdeipcjp.cloudfront.net/files/upload/15444220173835.svg";
        document.querySelector('.nav-bar-contents-mobile .right img').src = "https://d2mgzmtdeipcjp.cloudfront.net/files/upload/15578840652736.svg";
        shortcutNav.style.visibility="visible";
        box.classList.add('white');
        document.getElementById('coupon-status-icon').src="https://d2mgzmtdeipcjp.cloudfront.net/files/upload/15653414260288.svg";

    } else {
        nav.classList.add('nav-bar-black');
        nav.classList.remove('nav-bar-white');
        document.querySelectorAll("#logo-version").forEach(logo => {
            logo.src = "img/pangpang_white_v2.png";
        });
        document.querySelector('.nav-bar-contents-mobile .left img').src = "https://d2mgzmtdeipcjp.cloudfront.net/files/upload/15705044858394.svg";
        document.querySelector('.nav-bar-contents-mobile .right img').src = "https://d2mgzmtdeipcjp.cloudfront.net/files/upload/15705046297532.svg";
        shortcutNav.style.visibility= "hidden";
        box.classList.remove('white');
        document.getElementById('coupon-status-icon').src="https://d2mgzmtdeipcjp.cloudfront.net/files/upload/15674925938333.svg?s=10x10";
    }

    if( window.pageYOffset > body_bottom && document.body.clientWidth > 1170 ) {
        box.style.display = "none"
        shortcutNav.style.visibility = 'hidden';
    } else {
        box.style.display = "flex";
    }
}


var option_dropdown = document.getElementsByClassName("option-dropdown-container");
for (i = 0; i < option_dropdown.length; i++) {
    option_dropdown[i].addEventListener("click", function() {
        var sub_option_container = this.nextElementSibling;
        if (window.getComputedStyle(sub_option_container).display == "none") {
            sub_option_container.style.display = "block";
        } else {
            sub_option_container.style.display = "none";
        }
    });
}

// BOTTOM SLIDERS
// var sliderContainers = document.querySelectorAll('.slider-container');
// var prevBtn = document.querySelectorAll('.button-prev');
// var nextBtn = document.querySelectorAll('.button-next');
// var slideWidth = parseInt(window.getComputedStyle(document.querySelector('.slide')).width);
// var slideMargin = parseInt(window.getComputedStyle(document.querySelector('.slide')).marginRight);
// var offset = slideWidth + slideMargin;
// var currentIndex = [];
// for(i=0; i < sliderContainers.length; i++){
//     currentIndex[i] = 0;
// }   

// function moveSlide(num, index, button) {
//     let slides = button.parentNode.querySelector('.slider-content');
//     let slide = button.parentNode.querySelectorAll('.slide');
//     let slideCount = slide.length;
//     let totalWidth = offset * slideCount;
//     slides.style.width = totalWidth + 'px';
//     slides.style.left = -index * offset + 'px';
//     currentIndex[num] = index;

//     if(currentIndex[num] == slideCount - 4){
//         button.parentNode.querySelector('.button-next').style.visibility = "hidden";
//     } else {
//         button.parentNode.querySelector('.button-next').style.visibility = "visible";
//     }
//     if(currentIndex[num] == 0){
//         button.parentNode.querySelector('.button-prev').style.visibility = "hidden";
//     } else {
//         button.parentNode.querySelector('.button-prev').style.visibility = "visible";
//     }
// }
// for(let i=0; i < sliderContainers.length; i++) {
//     nextBtn[i].addEventListener("click", ()=> {
//         moveSlide(i, currentIndex[i] + 1, event.currentTarget);
//     })
//     prevBtn[i].addEventListener("click", ()=> {
//         moveSlide(i, currentIndex[i] - 1, event.currentTarget);
//     })
// }


// IMAGE GALLERY
var imageThumbs = document.querySelectorAll('.item-detail-images img');
var imageGalleryModal = document.querySelector('.image-fullscreen');
var fullscreenImages = document.querySelectorAll('.image-fullscreen img');
var imageControls = document.querySelector('.image-controls');
var nextImage = document.querySelector('.fullscreen-arrow.right');
var prevImage = document.querySelector('.fullscreen-arrow.left');
var currentImage = 0;

imageThumbs.forEach(image => {
    image.addEventListener('click', ()=> {
        imageGalleryModal.classList.add('active');
        imageControls.classList.add('active');
        currentImage = parseInt(image.getAttribute('id'))-1;
        activateImage(currentImage);
    })
})

nextImage.addEventListener('click', function() {changeSlide(currentImage + 1)})
prevImage.addEventListener('click', function() {changeSlide(currentImage - 1)})

function activateImage(index) {
    fullscreenImages.forEach(image => image.classList.remove('active'));
    fullscreenImages[index].classList.add('active');
}

function changeSlide(index) {
    if (index < 0) {
        activateImage(fullscreenImages.length-1);
        currentImage = fullscreenImages.length-1;
    } else if (index === 8) {
        activateImage(0);
        currentImage = 0;
    } else {  //index < fullscreenImages.length 
        activateImage(index);
        currentImage = index;
    } 
}

var modalClose = document.querySelector('.fullscreen-close .button-close');
modalClose.addEventListener('click', ()=> {
    imageGalleryModal.classList.remove('active');
    imageControls.classList.remove('active');
})


// SHORCUT NAVIGATION LINK
var sections = document.querySelectorAll('.item-detail-body .section:not(:first-child)')
var navShortcutLink = document.querySelectorAll('.shortcut-menu');

window.addEventListener('scroll', ()=> {
    let fromTop = window.scrollY;

    navShortcutLink.forEach(link => {
        let section = document.querySelector(link.hash);
        let sectionTop = section.offsetTop;
        let sectionHeight = section.offsetHeight;
        // offset more by height of navigation bar, shorcut navigation bar, and top padding of section
        let additionalOffset = nav.offsetHeight + shortcutNav.offsetHeight + parseInt(window.getComputedStyle(section).paddingTop);
        link.classList.remove('active');
        if(sectionTop <= fromTop + additionalOffset && fromTop + additionalOffset < sectionTop + sectionHeight) {
            link.classList.add('active')
        }
    });
})

navShortcutLink.forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        let section = document.querySelector(this.hash);
        let sectionTop = section.offsetTop;
        window.scrollTo({
            top: sectionTop - nav.offsetHeight - shortcutNav.offsetHeight,
            behavior: 'smooth'
        });
    });
})