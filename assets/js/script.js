var saveEl = $(".saveBtn");
var descriptionEl = $(".description");

// Find and display today's date and time
var today = moment().format("dddd, MMMM Do");
$("#currentDay").html(today);

// Save description entry
saveEl.on("click", function () {

    // id of the row
    var buttonRow = $(this).parent().attr('id');

    // description of the task
    var buttonDescription = $(this).siblings(".description").val();

    // Set description into local storage.
    localStorage.setItem(buttonRow, buttonDescription);
})

// Set variable for the current hour.
var currentHour = moment().hour();

descriptionEl.each(function(i){
    // Display task descriptions from local memory
    $("#hr-" + i + " .description").val(localStorage.getItem("hr-" + i));
    
    // Set background color of descriptions based on current time of day.
    if (i + 9 < currentHour) {
        $("#hr-" + i + " .description").removeClass("present");
        $("#hr-" + i + " .description").removeClass("future");
        $("#hr-" + i + " .description").addClass("past");
    }
    else if (i + 9 > currentHour) {
        $("#hr-" + i + " .description").removeClass("present");
        $("#hr-" + i + " .description").removeClass("past");
        $("#hr-" + i + " .description").addClass("future");
    }
    else {
        $("#hr-" + i + " .description").removeClass("past");
        $("#hr-" + i + " .description").removeClass("future");
        $("#hr-" + i + " .description").addClass("present");
    }
})
