// set date and time
var time = moment().format('MMMM Do YYYY');
$('#currentDay').text(time);


var saveButton = $(".saveBtn");
// save appointments to local storage with click function
saveButton.on("click", function(){
    var appt = $(this).siblings('textarea').val();
    var storage = $(this).parent().attr('id');
    localStorage.setItem(storage, JSON.stringify(appt));
});
// get data from local storage when user comes back
$('#9AM textarea').val(JSON.parse(localStorage.getItem("9AM")));
$('#10AM textarea').val(JSON.parse(localStorage.getItem("10AM")));
$('#11AM textarea').val(JSON.parse(localStorage.getItem("11AM")));
$('#12PM textarea').val(JSON.parse(localStorage.getItem("12PM")));
$('#1PM textarea').val(JSON.parse(localStorage.getItem("1PM")));
$('#2PM textarea').val(JSON.parse(localStorage.getItem("2PM")));
$('#3PM textarea').val(JSON.parse(localStorage.getItem("3PM")));
$('#4PM textarea').val(JSON.parse(localStorage.getItem("4PM")));
$('#5PM textarea').val(JSON.parse(localStorage.getItem("5PM")));
// function to color code rows during time ranges
var currentHour = parseInt(moment().format('hh'));
$('.col-md-10').each(function(){
    var val = parseInt($(this).attr('id'));
    if (val === currentHour){
        $(this).css('.present');
    }else if (val > currentHour && val < currentHour+6){
        $(this).css('.future');
    }else if (val < currentHour && val > currentHour-6){
        $(this).css('.past');
    }else {
        $(this).css('background-color','white');
    }
});

