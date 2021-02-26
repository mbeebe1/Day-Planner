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

