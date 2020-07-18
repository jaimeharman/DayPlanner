//open the planner: current date and time is displayed
var currentHour = moment().hour(); // Number

// Store startingHour
var date = new Date();
var startingHour = date.getHours();

//created function for consistent time update
function renderClock() {
  $("#currentTime").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

  if (currentHour > startingHour) {
      updateTimeBlocks()
  }
}

$(document).keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        currentHour++  
    }
});

setInterval(renderClock, 1000);


//create a time block
var timeBlockMarkup = "<div></div>";
for (var i = 1; i <= 24; i++) {
  var hourMarkup = `${i} am`;
  if (i == 12) {
    hourMarkup = `${i} pm`;
  }
  if (i > 12) {
    hourMarkup = `${i - 12} pm`;
    if (i === 24) {
      hourMarkup = "12 am";
    }
  }
  timeBlockMarkup += `<div class="row"> 
    <div class="col-sm-1 hourCol" id="${i}">${hourMarkup}</div>
    <div class="col-sm-10 inputCol" id="input-${i}"><textarea id="input-${i}-text" style="width: 100%; border-left: 0px !important;"></textarea></div>
    <div class="col-sm-1 saveBtn" id="saveBtn-${i}"></div>
    </div>`;
}
$("#timeBlockContainer").append(timeBlockMarkup);
updateTimeBlocks();
//color code time block for past, present and future

console.log(currentHour);

// Use for loop to add past and future color coding
function updateTimeBlocks() {
  for (var i = 1; i <= 24; i++) {
    //default remove all
    $(`#input-${i}`).removeClass("past present future")
    
    if (i < currentHour) {
      $(`#input-${i}`).addClass("past");
    }

    $(`#input-${currentHour}`).addClass("present");

    if (i > currentHour) {
      $(`#input-${i}`).addClass("future");
    }
  }
}

//user can enter an event

//create a save button for each event/time block

//event saved in local storage

//refresh the page and saved information stays in place

//create text areas in time blocks
// .val of that input when save button is pressed

