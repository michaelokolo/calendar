let day = document.querySelector('.month-section-day p');
let year = document.querySelector('.month-section-month .year');
let month = document.querySelector('.month-section-month .month');

let monthInx = new Date().getMonth()
let today = new Date().getDate();
let currentYear = new Date().getFullYear();
let numDays = new Date().getMonth();


day.innerHTML = today;
year.innerHTML = new Date().getFullYear();
month.innerHTML = new Date().toLocaleString('default', {month: 'long'}).toUpperCase();
let firstDay = new Date(currentYear, monthInx, 1);
let lastDay = new Date(currentYear, monthInx + 1, 0);
let previousLastDay = new Date(currentYear, monthInx, 0);

if(firstDay.getDay() > 0){
    for(i = previousLastDay.getDate() - (firstDay.getDay() - 1); i <= (previousLastDay.getDate()); i++){
        let para = document.createElement('p');
        let dateContainer = document.querySelector('.days');
        para.innerHTML = i ;
        dateContainer.appendChild(para);
        para.style.backgroundColor = "rgb(245, 243, 243)";
        para.style.color = "white";
    }
}


    for(i = 1; i <= lastDay.getDate(); i++){
        let para = document.createElement('p');
        let dateContainer = document.querySelector('.days');
        para.innerHTML = i;
        dateContainer.appendChild(para);
    }
    
if(lastDay.getDay() >= 0){
    for(i = 1; i < (14 - lastDay.getDay()); i++){
    let para = document.createElement('p');
    let dateContainer = document.querySelector('.days');
    para.innerHTML = i ;
    dateContainer.appendChild(para);
    para.style.backgroundColor = "rgb(245, 243, 243)";
    para.style.color = "white";
}
}