console.log("hello world!")
var i = 0;
for (I = 0; I <= 20; I += 2){
  console.log(i);
}

i = 0; //sets i to 0
while(i <= 20){    //runs when i<= 20
  console.log(i);
  i += 2;
}

i = 0;
while(i <= 20){
  if(i % 2 == 0){
    console.log(i);
  }
  i += 1;
}
function gettemp(){
  return 22.5;
}

var temperature = getTemp();



console.log(temperature);

function getTemp2(type){
  if (type == "c"){
    return 22.5;
  }
  if (type == "f"){
    alert("it is really hot today!")
    return 100;
  }
}

console.log(getTemp2("f"))
console.log(getTemp2("c"))
