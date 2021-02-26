// set date and time
var time = moment().format("MMMM Do YYYY");
$("#currentDay").text(time);

var saveButton = $(".saveBtn");
// save appointments to local storage with click function
saveButton.on("click", function () {
  var appt = $(this).siblings("textarea").val();
  var storage = $(this).parent().attr("id");
  localStorage.setItem(storage, JSON.stringify(appt));
});
// get data from local storage when user comes back
$("#9 textarea").val(JSON.parse(localStorage.getItem("9")));
$("#10 textarea").val(JSON.parse(localStorage.getItem("10")));
$("#11 textarea").val(JSON.parse(localStorage.getItem("11")));
$("#12 textarea").val(JSON.parse(localStorage.getItem("12")));
$("#13 textarea").val(JSON.parse(localStorage.getItem("13")));
$("#14 textarea").val(JSON.parse(localStorage.getItem("14")));
$("#15 textarea").val(JSON.parse(localStorage.getItem("15")));
$("#16 textarea").val(JSON.parse(localStorage.getItem("16")));
$("#17 textarea").val(JSON.parse(localStorage.getItem("17")));
// function to color code rows during time ranges

var currentHour = moment().format("H");
$(".col-md-10").each(function () {
  var val = parseInt($(this).attr("id"));
  if (val > 9) {
    $(this).css("background-color", "lightgray");
  } else if (val < currentHour && val > currentHour - 6) {
    $(this).css("background-color", "Green");
  } else if (val === currentHour) {
    $(this).css("background-color", "Red");
  }
});
