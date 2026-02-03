/*var res = function() {
    console.log("hello")
}
res();


//parameterized anonymous function
var place=function(a,b){
    var c=a+b;
    console.log(c);
}
place(10,20);//30

//returned anonymous function
var food=function(){
    document.write("welcome to my world");
    return "hello world";
}
console.log(food()); //helloworld in console and welcom to my world in html page

// anonymous arrow function
var greet = (() => {
    console.log("hii");
})
greet(); //hii

//parameterized arrow  anonymous function
var clothes=((a,b)=>{
    var c=a+b;
    console.log(c);
})
clothes(2,3); //5  */

// call back function
/*function print(){
    document.write("hello kitty")
}
function sum(a,b){
    var c=a+b;
    console.log(c);
}
function fun(f1){
    f1();
}
fun(print(),sum(10,20)) // hello kitty in browser and 30 in console */

// in anothere way
/*function fun_name(f,name){
    f();
    console.log(name);
}
fun_name(()=>{
    console.log("hello barre keerthi")
},"subakka pranu") */

// iife function using array function
/*(()=>{
    console.log("hellooohii")
})() */

//iife function using anonymous function
(function(){
    console.log("write")
})()

