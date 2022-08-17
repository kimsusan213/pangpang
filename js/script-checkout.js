var customer_botton = document.querySelector('.customer-info-button');
var customer_modal = document.querySelector('.customer-detail-modal');
var customer_modal_close = document.querySelector('.customer-modal-container .button-close');

customer_botton.addEventListener("click", ()=> {
    customer_modal.style.display = "flex";
});
customer_modal_close.addEventListener("click", ()=> {
    customer_modal.style.display = "none";
});


var agreement_button = document.querySelectorAll('.view-agreement-text');
var agreement_modal = document.querySelector('.agreement-modal');

agreement_button.forEach(button => 
    button.addEventListener('click', ()=> {
        var modal = document.querySelector('.agreement-modal.' + button.getAttribute('id'));
        if (window.getComputedStyle(modal).display == "none") {
            modal.style.display = "flex";
            var close = document.querySelector('.agreement-modal.' + button.getAttribute('id') + ' .button-close');
            close.addEventListener("click", ()=> modal.style.display="none");
        } else {
            modal.style.display = "none";
        }
    })
);

// for(i=0; i < agreement_button.length; i++) {
//     agreement_button[i].addEventListener("click", function() {
//         console.log(this);
//     })
// }

var payment_method = document.querySelectorAll('.payment-method');
payment_method.forEach(method =>
    method.addEventListener("click", ()=>{
        for(i=0; i < payment_method.length; i++) {
            if (payment_method[i].classList.contains("active")) {
                payment_method[i].classList.remove("active");
                payment_method[i].querySelector('img').src = "img/icon_" + payment_method[i].classList[1] + "_light.png";
            }
        }        
        method.classList.add("active");
        method.querySelector('img').src = "img/icon_" + method.classList[1] + "_dark.png";
    })
);



var agree_all = document.querySelector('.agree-all');
var agree = document.querySelectorAll('.agree .radiobutton-container');
agree_all.addEventListener("click", ()=>{
    let radiobuttons = document.querySelectorAll('.radiobutton img');
    if( radiobuttons[0].src.includes("unchecked") ) {
        radiobuttons.forEach(button => button.src="img/checked.png");
    } else {
        radiobuttons.forEach(button => button.src="img/unchecked.png");
    }
})

// for(i=0; i < agree.length; i++) {
//     agree[i].addEventListener("click", function() {
//         console.log(this.querySelector('.radiobutton img').src);
//     })
// }
agree.forEach(agree_single => 
    agree_single.addEventListener("click", ()=> {
        if (agree_single.querySelector('.radiobutton img').src.includes("unchecked")) {
            agree_single.querySelector('.radiobutton img').src = "img/checked.png";
        } else {
            agree_single.querySelector('.radiobutton img').src = "img/unchecked.png";
        }
})
);