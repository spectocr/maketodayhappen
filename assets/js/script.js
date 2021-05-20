//Other varibles
var setTodayDT = moment().format('dddd, MMMM Do YYYY');
var currentHour =moment().format('HH');

// get them querySelctors
var todayDT = document.querySelector("#currentDay")
var hourSlot = document.querySelectorAll(".hourTime");
//hourSlot.innerHTML = hourSlot.innerHTML.replace(/\D/g,'');
for (var i = 0; i < hourSlot.length; i++) {
    milliHour = hourSlot[i].id;
    if (milliHour < currentHour) {
        hourSlot[i].classList = ("col-1 hour hourTime past")
    } else if (milliHour == currentHour) {
        hourSlot[i].classList = ("col-1 hour hourTime present")
    } else {
        hourSlot[i].classList = ("col-1 hour hourTime future")
    }

    console.log(currentHour + " = current Hour");
    console.log(hourSlot[i]);
    console.log(milliHour + " = Millihour");
};
// set hourSlot to whatever hour it is. making code more DRY.
//hourSlot = hourSlot.innerHTML;
console.log(hourSlot);
console.log(currentHour);

// Set that time via queryselctor
todayDT.innerHTML = setTodayDT

$(".description").on("click", "p", function() {
    var text = $(this)
    .text()
    .trim();
    
    var textInput = $("<textarea>")
    .addClass("form-control")
    .val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
  });

  $(".description").on("blur", "textarea", function() {
    // get the textarea's current value/text
    var text = $(this)
      .val()
      .trim();
    console.log(this);
    // get the parent ul's id attribute
    var status = $(this)
      .closest(".description")
      .attr("id")
      //.replace("list-", "");
    
    // get the task's position in the list of other li elements
    var index = $(this)
      .closest(".description")
      .index();
    
      // recreate p element
    var taskP = $("<p>")
    .addClass("m-1")
    .text(text);
    
    // replace textarea with p element
    $(this).replaceWith(taskP);

});

  



