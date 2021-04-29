
// initialize Date object
let day = new Date().getDay();

// arraylist 
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];

// check what day is today
if(day == 0 || day == 1 || day == 2 || day == 3 || day == 4 || day == 5 || day == 6){
	// different text appears for different days
	document.getElementById('date').innerHTML = "Today is: " + daylist[day]; 
}

// change the background color of the webpage
function colorChange(){
  let background = document.querySelector('body'); 
  let randomColor = Math.floor(Math.random() * 360);
  background.style.backgroundColor = 'hsl(' + randomColor + ', 100%, 80%)';
}

// function in response to DOM event
let btn = document.querySelector('button');

// forum page doesn't have button
if(btn != null){
  btn.addEventListener('click', colorChange);
}



