//Other varibles
var setTodayDT = moment().format('dddd, MMMM Do YYYY');
var currentHour =moment().format('HH');
var userDescEntry = "";

// get them querySelctors
var todayDT = document.querySelector("#currentDay");
var hourSlot = document.querySelectorAll(".hourTime");
var description = document.querySelectorAll(".description");
var saveBtn = document.querySelector(".saveBtn");

for (var i = 0; i < description.length; i++) {
    descriptionID = description[i].id;
    descriptionUserText = description[i].textContent;
    console.log(descriptionID);
    console.log(descriptionUserText);
}
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

   // console.log(currentHour + " = current Hour");
    //console.log(hourSlot[i]);
    //console.log(milliHour + " = Millihour");
};
// set hourSlot to whatever hour it is. making code more DRY.
//hourSlot = hourSlot.innerHTML;
//console.log(hourSlot);
//console.log(currentHour);

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
      
    //console.log(this);
    //console.log(descriptionID);
    // get the parent ul's id attribute
    var status = $(this)
      .closest(".description")
      .attr("id")
      //console.log(this);
      //.replace("list-", "");
    
    // get the task's position in the list of other li elements
    var index = $(this)
      .closest(".description")
      .index();
      console.log(this);
    
      // recreate p element
    var taskP = $("<p>")
    .addClass("m-1")
    .text(text);
    
    // replace textarea with p element
    $(this).replaceWith(taskP);

});



$(".saveBtn").click(function() {
    console.log("yassss you clicked save btn");

    for (var i = 0; i < description.length; i++) {
      descriptionID = description[i].id;
      localStorage.setItem("descriptionID", JSON.stringify(descriptionID));
      descriptionUserText = description[i].textContent;
      localStorage.setItem("descriptionUserText", JSON.stringify(descriptionUserText));
      console.log(descriptionID);
      console.log(descriptionUserText);
    }
    //userDescEntry = descriptionUserText;
    console.log(userDescEntry);
    
    //get the text from div.
    //var userDescEntry = descriptionUserText;
    //console.log(userDescEntry);
});

  



