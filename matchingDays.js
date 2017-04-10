var days = document.querySelectorAll(".day");
var firstDate = document.querySelector("#input1");
var secondDate = document.querySelector("#input2");
var userButton = document.querySelector("#myButton");


userButton.addEventListener("click", function(){
var date1 = new Date(firstDate.value);
var date2 = new Date(secondDate.value);

var dayOneValue = date1.getDay("date1")
var dayTwoValue = date2.getDay("date2")

for (var i = 0; i < days.length; i++) {
days[i]
  days[i].classList.remove("style1");
  days[i].classList.remove("style2");
  days[i].classList.remove("style3");
}
if(dayOneValue === dayTwoValue){
  days[dayOneValue].classList.add("style1");
   
}
else { 
    days[dayOneValue].classList.add("style2")
     days[dayOneValue].classList.add("style3")  
}
});
