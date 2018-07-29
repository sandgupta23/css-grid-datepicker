'use strict'
var $next = document.getElementById("next");
var $prev = document.getElementById("prev");
var $month = document.getElementById("month-name");
var $dateGrid = document.getElementById("date-grid");
var $selectedDateInput = document.getElementById("selected-date");

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let currentDate = new Date();
render(currentDate);

$prev.addEventListener("click", () => {
    currentDate = getFirstDateOfPrevMonth(currentDate);
    render(currentDate);
});

$next.addEventListener("click", () => {
    currentDate = getFirstDateOfNextMonth(currentDate);
    render(currentDate);
});

$dateGrid.addEventListener("click", ($event)=>{
    let selectedDay = $event.target.innerText,
        selectedDateArr = currentDate.toLocaleDateString().split("/");
    selectedDateArr[1] = selectedDay;
    $selectedDateInput.value = selectedDateArr.join('/');
})


/**
* render: Given first Date Of any Month, calculate first and last date and render into grid.
* @param {Date} firstDateOfMonth - First Date Object of any month.
* */
function render(firstDateOfMonth) {
    // let date = new Date(ms),
    let lastDayOfMonth = getLastDateOfMonth(firstDateOfMonth),
        firstDate_Day = firstDateOfMonth.getDay(),//0-6
        lastDate_Date = lastDayOfMonth.getDate();//0-31
    let dateStr = "";
    debugger;
    for (let i = 0; i < firstDate_Day; ++i) {
        dateStr += `<div></div>`
    }
    for (let i = 1; i <= lastDate_Date; ++i) {
        dateStr += `<div>${i}</div>`
    }

    $month.innerHTML = months[firstDateOfMonth.getMonth()].substr(0,3) +"\'"+ firstDateOfMonth.getFullYear().toString().substr(-2);
    $dateGrid.innerHTML = dateStr;
}


/*Utility methods*/

/**
 * getFirstDateOfPrevMonth - given date of any month, it returns the first Date of previous month
 * @param {Date} date - Any Date of current month
 * */
function getFirstDateOfPrevMonth(date) {
    return new Date(date.getFullYear(), date.getMonth() - 1, 1);
}

/**
 * getFirstDateOfNextMonth: given date of any month, it returns the first Date of next month
 * @param {Date} date - Any Date of current month
 * */
function getFirstDateOfNextMonth(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 1);
}

/**
 * getLastDateOfMonth: given date of any month, it returns the last Date of next month
 * @param {Date} date - date object
 * */
function getLastDateOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

