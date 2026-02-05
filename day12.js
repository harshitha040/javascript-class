/*console.log(food)
var food="biryani"
console.log(food) 
//  o/p : undefined 
//        biryani */

/*
var food;
console.log(food)
food = "mushroom biryani" 
console.log(food)  // this is done in hoisting as u can see above 2 lines indicates as this
*/


/*
console.log(name)
let name ="harshi"

it will display as below also
let name; -- temporal dead zone
conso;e.log(name)
name = "harshi"; 
*/

/*
console.log(chocolate)
const chocolate = "5start" */

/*
const chocolate; --tdz
console.log(chocolate);
chocolate = "5start"  // this is how in backend , here we get reference error */ 

// function hoisting
/*
add(2,3);
function add(a,b){
    console.log(a+b);
}
*/

/*
Meet();
var meet=()=>{
    console.log("hi")
} // here we get type error
*/

//for in
/*
var person={
    name : "harshi",
    age : 22,
    place : "banglore"

}
for(var per in person){
    console.log(`${per}: ${person[per]}`)
} */

// for of
var colors =["black","blue","red","white","purple"]
for(var col of colors){
    console.log(`the colors are ${col}`)
}