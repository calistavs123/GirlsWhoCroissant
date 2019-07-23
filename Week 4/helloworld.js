
// var h1tag = document.getElementsByTagName("h1")[0];
//
// var loc = document.getElementsByClassName("headings")[3];

var adjectives = ["Special", "Courageous", "Happy", "Inspirational", "Smart", "Funny"];
var pos = 0;
var loc = document.getElementById("adjective")

function changeAdj(){
  loc.innerHTML = adjectives[pos];
  pos++;
  if (pos >= adjectives.length){
    pos = 0;
  }
}


var x = document.getElementsByTagName("body")[0]
function colorfulBackground(){
  x.setAttribute("style", `background-color:rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}`)
}


var pic = document.getElementById("a")
var deg = 90

function changePic(){
  pic.setAttribute("style", `transform: rotate(${deg}deg)`);
  deg += 30;
}
