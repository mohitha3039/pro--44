var a = 98 
var b = 89
var c = 29
var d = 38
var e = 28
var f = 25
var g = 45
var h = 47   

function setup() {
  createCanvas(800,800);
even()
positive() 
calculatethelastdigit ()
buzznumber()
greatest ()
minimumamount ()
}
 function even (){
if (a%2==0){
  console.log("even")
}
else{
  console.log("odd")
}
} 
function positive(){
if (b>0){
console.log("positive")
}
else{
  console.log("negitive")
}
}
function calculatethelastdigit ()
{
  var a =c%10
console.log(a)  
}
function buzznumber()
{
  if (d%7==0||d%10==7) 
  {
    console.log("buzznumber")
  }
  else {
    console.log("notabuzznumber")
  }
}
function greatest ()
{
if (e<f){
  console.log("f")
}
else{
  console.log ("e")
}
}
function minimumamount ()
{
if (g>h){
  console.log("h") 
}
else {
  console.log("g")
}
}





function draw() {
  background("black");  
 
  
}




