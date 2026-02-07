/* global 
var a=9;
function fun_name(){
    console.log(a); //value is accessed inside function
    if(true){
        console.log(a); //value accessed in block , within  function
    }
}
console.log(a); //outside the function 
fun_name();
*/

/* functional /local 
function add(){
    var name="harshitha"
    console.log(`the girl name is name is ${name}`) // variable accessed inside function
    if(20==20){
        console.log(`the girl name is name is ${name}`)
    }
}
var name1="varun"
if(true){
    //console.log(`the boy name is name is ${name}`) //raise error because name is declared in function cannot accessed outside
    console.log(`the boy name is name is ${name1}`) //the boy name is name is varun 
}
//console.log(name) //raise error because name is declared in function cannot accessed outside
add();
*/


/* Block 
function num(){
    if(true){
        var name="barre"
        console.log(name +" likes chicken")
    }
    console.log(name +" likes chicken") // it can be access outside block because we use var key word ,var is a block scope
}
//console.log(name +" likes chicken") // error , we cannot access outside function
num();
*/

/*
function parent(){
    var a=10;
    //console.log(a-b); //arise error , we cannot access child function
    function child(){
        var b =5;
        var c =a+b;
        console.log(c);
    }
    child()
}
parent();
*/


/* problem
function fun(a,b,c) {
    if (a === 13) {
        return 0;
    } 
    else if (b === 13) {
        return a;
    } 
    else if(a==13 || b==13 || c==13){
        return "nothing"
    }
}
console.log(fun(1,13,5)) // return a alue 1 
*/
    
//closures
function outer(){
    var a=10;
    function inner(){
        console.log(a);
    }
    return inner();
}
var result=outer();
result  //10


