//open the planner: current date and time is displayed
$("#currentTime").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
var timeBlockMarkup = "<div></div>";
for (var i=0; i < 24; i++) {
    var hourMarkup = i +1;
    timeBlockMarkup += 
    `<div class="row"> 
    <div class="col-sm-1 hourCol" id="${i}">${hourMarkup}</div>
    <div class="col-sm-10 inputCol" id="input-${i}"></div>
    <div class="col-sm-1 saveBtn" id="saveBtn-${i}"></div>
    </div>`
}
$("#timeBlockContainer").append(timeBlockMarkup)
//create a time block

//present in military time

//create blocks for business hours

//color code time block for past, present and future
var currentHour = moment().hour(); // Number
console.log(currentHour)
$(`#input-${currentHour}`).addClass("present")
// Use for loop to add future class to hours above current hour

//Use for loop to add past class to previous hours

//user can enter an event

//create a save button for each event/time block

//event saved in local storage

//refresh the page and saved information stays in place


