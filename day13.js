/*
var number =-12;
console.log(Math.abs(number)) //12

var num= 24.2434;
console.log(Math.round(num)) //24

var num=24.56;
console.log(Math.round(num))//25

var num1=24.6434;
console.log(Math.ceil(num1)) //25
console.log(Math.floor(num1)) //24

var num2=4.2;
console.log(Math.ceil(num2))// 5

var num3=4.2;
console.log(Math.floor(num3)) //4

var num4 =4.7;
console.log(Math.floor(num4)) //4

var num5=5673.98333;
console.log(Math.trunc(num5))//5673

console.log(Math.min(1,4,8,5)) //1
console.log(Math.max(1,4,8,5)) //8

console.log(Math.sqrt(25))//5

console.log(Math.pow(2,4)) //16

console.log(Math.random())
*/
var num=5685.987654;
var num1=0.00004;
console.log(num.toFixed(2)) //5685.99
console.log(num1.toFixed(8)) //0.00004000

var num2="1234"
console.log(typeof(num2)) //string
var num3 =Number.parseInt(num2)
console.log(typeof(num3)) //number

var num4="123.56";
console.log(typeof(num4))  //string
var num5 =Number.parseFloat(num4)
console.log(typeof(num5)) //number

var check=1234;
console.log(Number.isInteger(check))//true

var check2="123";
console.log(Number.isInteger(check2))//false

console.log("harshi"/2) //NaN
console.log(Number.isNaN(NaN)) //TRUE

var check3="harshi"/2
console.log(Number.isNaN(check3))//true

var num6=123;
console.log(Number.isFinite(num6))//true

var num7="12.3"
console.log(Number.isFinite(num7)) //false
var st="name"
console.log(Number.isFinite(st)) //false

var num8=123.45;
console.log(num8.toPrecision(4))//123.5
console.log(num8.toPrecision(7)) //123.4500


