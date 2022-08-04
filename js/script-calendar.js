var options_list = document.getElementsByClassName('option');
var close_button = document.querySelector('.button-close');
var day = document.getElementsByClassName('day');
var down_buttons = document.querySelectorAll('.option-category-count-down');
var up_buttons = document.querySelectorAll('.option-category-count-up');
var counter_contents = document.querySelectorAll('.option-category-count-content');


// show popup modal
for(i = 0; i < options_list.length; i++) {
    options_list[i].addEventListener("click", ()=> {
        document.querySelector('.popup-background').style.display = "block";
        document.querySelector('#popup-modal').style.display = "flex";
    })
}

// close popup modal
close_button.addEventListener("click", function() {
    document.querySelector('.popup-background').style.display = "none";
    document.querySelector('#popup-modal').style.display="none";
    counter_contents.forEach(content => content.innerHTML = 0);
})


// timeslot options
// ** show only if necessary
var timeslot = document.querySelector('.timeslot-container');
var timeslotMenu = document.querySelector('.timeslot-menu');
timeslot.addEventListener('click', ()=> {
    if(window.getComputedStyle(timeslotMenu).display == 'none'){timeslotMenu.style.display = 'block'}
    else {timeslotMenu.style.display = 'none'}
})


// increment and decrement counters
up_buttons.forEach(up => 
    up.addEventListener("click", ()=> {
        let counter = parseInt(up.parentElement.querySelector('.option-category-count-content').innerHTML);
        up.parentElement.querySelector('.option-category-count-content').innerHTML = counter + 1;
    })
);
down_buttons.forEach(down => 
    down.addEventListener("click", ()=> {
        let counter = parseInt(down.parentElement.querySelector('.option-category-count-content').innerHTML);
        if (counter != 0) {
            down.parentElement.querySelector('.option-category-count-content').innerHTML = counter - 1;
        }
    })
);


// CALENDAR
var dt = new Date();
var today = new Date();

function RenderDate() {
    dt.setDate(1); 
    var firstWeekday = dt.getDay();   //find the weekday of the first day Sunday - Saturday : 0 - 6
    var endDate = new Date(dt.getFullYear(), dt.getMonth() + 1, 0).getDate();
    document.querySelector('.current #year-month').innerHTML = dt.getFullYear() + '년 ' + (dt.getMonth()+1) + '월';

    var cells = "<tr>";
    for(x = firstWeekday; x > 0; x--) {
        cells += "<td></td>";
    }
    for(i=1; i<=endDate; i++){
        if(i < today.getDate() && dt.getMonth() == today.getMonth()){
            cells += "<td><div class= 'day block'><div class= 'content'>" + i + "</div><div class= 'circle'></div></div></td>";
        } else if (i == today.getDate() && dt.getMonth() == today.getMonth() ) {
            cells += "<td><div class='day today'><div class= 'content'>" + i + "</div><div class= 'circle'></div></div></td>";
        } else {
            cells += "<td><div class='day'><div class= 'content'>" + i + "</div><div class= 'circle'></div></div></td>";
        }
        if ( (new Date(dt.getFullYear(), dt.getMonth(), i)).getDay() == 6 ) {
           cells += "</tr><tr>";
        }
    }
    document.querySelector('.current .days').innerHTML = cells;
}

function loadNextMonth(){
    dt.setMonth(dt.getMonth()+1);

    var firstWeekday = dt.getDay();   //find the weekday of the first day Sunday - Saturday : 0 - 6
    var endDate = new Date(dt.getFullYear(), dt.getMonth() + 1, 0).getDate();
    document.querySelector('.next #year-month').innerHTML = dt.getFullYear() + '년 ' + (dt.getMonth()+1) + '월';

    var cells = "<tr>";
    for(x = firstWeekday; x > 0; x--) {
        cells += "<td></td>";
    }
    for(i=1; i<=endDate; i++){
        if(i < today.getDate() && dt.getMonth() == today.getMonth()){
            cells += "<td><div class= 'day block'><div class= 'content'>" + i + "</div><div class= 'circle'></div></div></td>";
        } else if (i == today.getDate() && dt.getMonth() == today.getMonth() ) {
            cells += "<td><div class='day today'><div class= 'content'>" + i + "</div><div class= 'circle'></div></div></td>";
        } else {
            cells += "<td><div class='day'><div class= 'content'>" + i + "</div><div class= 'circle'></div></div></td>";
        }
        if ( (new Date(dt.getFullYear(), dt.getMonth(), i)).getDay() == 6 ) {
           cells += "</tr><tr>";
        }
    }
    document.querySelector('.next .days').innerHTML = cells;
}

RenderDate();
loadNextMonth();

// function moveDate(para) {
//     if(para =='next') {
//         dt.setMonth(dt.getMonth()+1);
//         RenderDate();
//     } else if(para == 'prev'){
//         dt.setMonth(dt.getMonth()-1);
//         RenderDate();
//     }
    
// }

var dayCells = document.querySelectorAll('.day');
dayCells.forEach(day => {
    console.log(day);
    day.addEventListener('click', ()=>{
        if(document.querySelector('.days .selected') == null) {
            day.classList.add('selected');
        } else {
            document.querySelector('.days .selected').classList.remove('selected');
            day.classList.add('selected');
        }
        var selectedDate = dt.getFullYear() + '-' + (dt.getMonth()+1) + '-' + day.firstChild.innerHTML;
        document.querySelector('.selected-date').innerHTML = selectedDate;
        document.querySelector('.popup-selected-date').innerHTML = selectedDate;
    })
})


var calendarWrapper = document.querySelector('.month-grid-wrapper');
var currentMonth = document.querySelector('.month.current');
var nextMonth = document.querySelector('.month.next');
var nextBtn = document.querySelector('.day-picker .button-next');
var prevBtn = document.querySelector('.day-picker .button-prev');

nextBtn.addEventListener('click', ()=> {
    dt.setMonth(today.getMonth()+1);
    calendarWrapper.style.left = -746 + 'px';
    nextMonth.style.visibility = 'visible';
    currentMonth.style.visibility = 'hidden';
    prevBtn.classList.remove('disabled');
    nextBtn.classList.add('disabled');
})
prevBtn.addEventListener('click', ()=> {
    dt.setMonth(today.getMonth());
    calendarWrapper.style.left = 9 + 'px';
    nextMonth.style.visibility = 'hidden';
    currentMonth.style.visibility = 'visible';
    nextBtn.classList.remove('disabled');
    prevBtn.classList.add('disabled');
})