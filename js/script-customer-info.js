var inputPhoneNum = document.querySelectorAll('.info-detail .phone-number .text-input');
var sendButton = document.querySelector('.send-code-button');
var verificationCode = document.querySelector('.verification-code');
var inputCode = document.querySelector('.verification-code .text-input');
var verifyButton = document.querySelector('.verification-button');

inputPhoneNum.forEach(field => {
    field.addEventListener('input', ()=> {
        if(field.value.length != 0) {
            sendButton.classList.remove('deactivated');
        } else {
            sendButton.classList.add('deactivated');
        }
    })
});

sendButton.addEventListener('click', ()=> {
    verificationCode.style.display = 'flex';
})
inputCode.addEventListener('input', ()=> {
    if(inputCode.value.length != 0) {
        verifyButton.classList.remove('deactivated');
    } else {
        verifyButton.classList.add('deactivated');
    }
})