//Other varibles
var setTodayDT = moment().format('dddd, MMMM Do YYYY');
var currentHour =moment().format('HH');
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

for (var i = 0; i < description.length; i++) {
    descriptionID = description[i].id;
    descriptionUserText = description[i].textContent;

    data = JSON.parse(localStorage.getItem("descriptionUserText" + descriptionID || []));
    data = data.toString().replaceAll("\"", "");
    //var descriptionP = document.querySelector("#descriptionID")
    //console.log(descriptionP);
    // puts the p element back.
    //var pElem = document.createElement('p');
    //pElem.className = 'm-1';
    //pElem.innerHTML = data;  
    //var text_to_change = description[i].childNodes[0].nodeValue;
    //var text_to_change = $(description[i].childNodes[0].nodeValue = "");
//console.log(text_to_change);
    //text_to_change = data;
    

   //this overwrites  
    //description[i].textContent = data;
    description[i].childNodes[0].nodeValue = data;
    //descriptionUserText = data;
    console.log(data);
   // console.log(descriptionID);
   // console.log(descriptionUserText);
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
/*
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
*/
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
    
      // recreate textarea element
    var taskP = $("<textarea>")
    .addClass("m-1")
    .text(text);
    
    // replace textarea with textarea element
    $(this).replaceWith(taskP);

});



$(".saveBtn").click(function() {
    console.log("yassss you clicked save btn");

    for (var i = 0; i < description.length; i++) {
      descriptionID = description[i].id;
      //localStorage.setItem("descriptionID", JSON.stringify(descriptionID));
      descriptionUserText = description[i].textContent;
      localStorage.setItem("descriptionUserText" + descriptionID, JSON.stringify(descriptionUserText));
      console.log(descriptionID);
      console.log(descriptionUserText);
    }
    //userDescEntry = descriptionUserText;
    console.log(userDescEntry);
    
    //get the text from div.
    //var userDescEntry = descriptionUserText;
    //console.log(userDescEntry);
});

  



