//open the planner: current date and time is displayed
//created function for consistent time update
function renderClock() {
    $("#currentTime").text(moment().format('MMMM Do YYYY, h:mm:ss a'))
}

setInterval(renderClock, 1000)

//create a time block
var timeBlockMarkup = "<div></div>";
for (var i=1; i <= 24; i++) {
    var hourMarkup = `${i} am`;
    if (i == 12) {
        hourMarkup = `${i} pm`;
    }
    if (i > 12) {
        hourMarkup = `${i-12} pm`; 
        if (i === 24) {
            hourMarkup = "12 am";
        }
    }
    timeBlockMarkup += 
    `<div class="row"> 
    <div class="col-sm-1 hourCol" id="${i}">${hourMarkup}</div>
    <div class="col-sm-10 inputCol" id="input-${i}"></div>
    <div class="col-sm-1 saveBtn" id="saveBtn-${i}"></div>
    </div>`
}
$("#timeBlockContainer").append(timeBlockMarkup)

//color code time block for past, present and future
var currentHour = moment().hour(); // Number
console.log(currentHour)
$(`#input-${currentHour}`).addClass("present")

// Use for loop to add past and future color coding
for (var i = 1; i <= 24; i++) {
    if (i < currentHour) {
        $(`#input-${i}`).addClass("past")
    }
    if (i > currentHour) {
        $(`#input-${i}`).addClass("future")
    }
}



//user can enter an event

//create a save button for each event/time block

//event saved in local storage

//refresh the page and saved information stays in place


