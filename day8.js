/* function fun_name(){
    console.log("This is a function");
    var a = 10;
    var b= 30;
    var c= a + b;
    console.log(c);
    var d=a-b;
    document.write("hyderabad");
    return d;
    return "Function ended";
    console.log("bengulur"); // it will show an error unreachable code after return statement
    
}
// fun_name();  when we just call fun the o/p of return value will not be visible
// var result = fun_name(); 
// console.log(result); // when we store the return value in a variable and then print it we can see the o/p of return value
console.log(fun_name()); // we can also directly print the return value by calling the function inside console.log() */


// function fun_name(length,breadth){
//     var area =length*breadth;
//     return area;
    
// }
// console.log(fun_name(5,6)); //30


//arrow function
var place=()=>{
    console.log("This is an arrow function");
    document.write("hello")
}
place();

//parameterized arrow function
var add=(a,b)=>{
    console.log(a+b);
}
add(10,20); //30

//return arrow fun
var a=()=>{
    console.log("Inside return arrow function");
    return "This is return arrow function";
}
var result= a();
console.log(result); //This is return arrow function
console.log(a()); //This is return arrow function , we can also directly print the return value by calling the function inside console.log()

//parameterized  return arrow function
var a=(x,y)=>{
    return x+y;
}
console.log(a(3,5)); //8





function employeeDetails(EId, EName, EPhoneNo, EDOJ, Experience) {
    document.write("Employee ID is ----- " + EId + "<br>");
    document.write("Employee Name is ----- " + EName + "<br>");
    document.write("Employee Phone Number is ----- " + EPhoneNo + "<br>");
    document.write("Employee Date of Joining is ----- " + EDOJ + "<br>");
    document.write("Employee Experience is ----- " + Experience + "<br>");
}
employeeDetails(
    101,
    "Harshitha",
    "9876543210",
    "12-06-2022",
    "3 Years"
);
