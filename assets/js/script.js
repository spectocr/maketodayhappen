//Other varibles
var setTodayDT = moment().format('dddd, MMMM Do YYYY');
var currentHour =moment().hours();
var userDescEntry = "";
//get data from local storage
var data = ""


// get them querySelctors
var todayDT = document.querySelector("#currentDay");
var hourSlot = document.querySelectorAll(".hourTime");
//grabs the whole div.
var description = document.querySelectorAll(".description");
//$('description').get(0);

console.log(description);

var saveBtn = document.querySelector(".saveBtn");

for (var i = 0; i < hourSlot.length; i++) {
    milliHour = hourSlot[i].id;
    if (milliHour < currentHour) {
        hourSlot[i].classList = ("col-1 hour hourTime past")
    } else if (milliHour == currentHour) {
        hourSlot[i].classList = ("col-1 hour hourTime present")
    } else {
        hourSlot[i].classList = ("col-1 hour hourTime future")
    }
};

todayDT.innerHTML = setTodayDT
console.log(setTodayDT)

  $(".description").on("blur", "textarea", function() {
    // get the textarea's current value/text
    var text = $(this)
      .val()
      .trim();
      
    var status = $(this)
      .closest(".description")
      .attr("id")
    
    // get the task's position in the list of other li elements
    var index = $(this)
      .closest(".description")
      .index();
      console.log(this);
    
      // recreate textarea element
    var taskP = $("<textarea>")
    .addClass("m-1")
    .text(text);
    
    // replace textarea with textarea element
    $(this).replaceWith(taskP);

});



$(".saveBtn").on("click", function() {
    console.log("yassss you clicked save btn");

    var value = $(this).siblings(".description")[0].textContent
    var time = $(this).siblings(".hourTime").attr("id");


    localStorage.setItem(time, value)
});

for (var i = 09; i <18; i++) {
  hourSlotCounter = "#" + i + "Desc";
  console.log(i)
  $(hourSlotCounter).val(localStorage.getItem(i));
};