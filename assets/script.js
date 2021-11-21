//intial global values. they arent set unless something saved in local storage

var time8 = "";
var time9 = "";
var time10 = "";
var time11 = "";
var time12 = "";
var time1 = "";
var time2 = "";
var time3 = "";
var time4 = "";
var time5 = "";
//This decides if something was saved previously in local storage be being set to true (for when something was saved) 
//and false (for when nothing was saved)
var savedData = localStorage.getItem("isThereSavedData");


//this function will run only when the page is loaded
//it takes items from local storage if there is any saved items and redisplays them
window.onload = function(){
    if (savedData == true){
    
        time8 = localStorage.getItem('theEight');

        time9 = localStorage.getItem("theNine"); 

        time10 = localStorage.getItem("theTen");

        time11 = localStorage.getItem("theEleven"); 

        time12 = localStorage.getItem("theTwelve"); 

        time1 = localStorage.getItem("theOne");

        time2 = localStorage.getItem("theTwo"); 

        time3 = localStorage.getItem("theThree"); 

        time4 = localStorage.getItem("theFour"); 

        time5 = localStorage.getItem("theFive"); 
    }
};
///////////


//this function is called when the saved button is clicked
//it takes the input from all time slots and saves them to their own local storage
const saveMe = function() {
    //here it sets a variable to be equal to the text held within that time slots input
    time8 = document.getElementById("hour8").textContent;
    time9 = document.getElementById("hour9").textContent;
    time10 = document.getElementById("hour10").textContent;
    time11 = document.getElementById("hour11").textContent;
    time12 = document.getElementById("hour12").textContent;
    time1 =  document.getElementById("hour1").textContent;
    time2 =  document.getElementById("hour2").textContent;
    time3 = document.getElementById("hour3").textContent;
    time4 = document.getElementById("hour4").textContent;
    time5 = document.getElementById("hour5").textContent;


    localStorage.setItem("theEight", time8);
    localStorage.setItem("theNine", time9);
    localStorage.setItem("theTen", time10);
    localStorage.setItem("theEleven", time11);
    localStorage.setItem("theTwelve", time12);
    localStorage.setItem("theOne", time1);
    localStorage.setItem("theTwo", time2);
    localStorage.setItem("theThree", time3);
    localStorage.setItem("theFour", time4);
    localStorage.setItem("theFive", time5);

    localStorage.setItem("isThereSavedData", true)


}


document.getElementsByClassName("saveBtn").addEventListener("Click", saveMe);