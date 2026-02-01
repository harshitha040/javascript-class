var food =["Pizza", "Burger", "Pasta", "Salad", "Sushi"];
console.log(food); // [ 'Pizza', 'Burger', 'Pasta', 'Salad', 'Sushi' ]
console.log(...food); // Pizza Burger Pasta Salad Sushi , here u can see each element is printed seperated

var food1=[...food]
console.log(food1); // [ 'Pizza', 'Burger', 'Pasta', 'Salad', 'Sushi' ]
console.log(...food1); // Pizza Burger Pasta Salad Sushi


//object spreading
var obj={ name: "John", age: 30, city: "New York" };
console.log(obj); // { name: 'John', age: 30, city: 'New York' }
//console.log(...obj); // error occurs

// take aniother object and copy the properties of person object into it
var obj1 = {obj};
console.log(obj); // { name: 'John', age: 30, city: 'New York' }
console.log(obj1);// { obj: { name: 'John', age: 30, city: 'New York' } }


// here we are accessing properties separately 
var arr=[name="John", age=30, city="New York"];
console.log(arr); // [ 'John', 30, 'New York' ]
var arr2=arr[0]
console.log(arr2); // john 
var arr3=arr[1]
console.log(arr3);//30

//  Array destructuring assignment
var[name , age, city]=arr;
console.log(name); // John
console.log(age); // 30
console.log(city); // New York

// Object destructuring assignment
var arr={ name: "John", age: 30, city: "New York" };
// var arr2=arr.name
// console.log(arr2); // John
// var arr2 = arr['age']
// console.log(arr2); // 30  we can write in above and this way also
var {name, age, city}=arr;
console.log(name); // John
console.log(age); // 30
console.log(city); // New York 

// Deif we change names 
var{names,ages,cities}=arr;
console.log(names); // undefined
console.log(ages); // undefined
console.log(cities); // undefined   // we have to use same names as in object for destructuring assignment

var {name: n, age: a, city: c}=arr;
console.log(n); // John
console.log(a); // 30
console.log(c); // New York  // we can change names by using colon(:) operator


var obj1={ name: "harshitha", age: 22, city: "New York" , country: "USA"};
var obj2={college: "srk", year:2025, branch: "datascience" , grade: "A+"};
var obj3={...obj1, ...obj2};
console.log(obj3); 

// Arthematic operators
var a=10;
var b=20;
console.log(a+b); //30
console.log(a-b); //-10
console.log(a*b); //200
console.log(a/b); //0.5
console.log(a%b); //10

// Assignment operators
var a=10;
console.log(a); //10
console.log(a+=5); //15
console.log(a-=3); //12
console.log(a*=2); //24
console.log(a/=4); //6
console.log(a%=4); //2

// Comparison operators
var a=10;
var b=20;
console.log(a==b); // false
console.log(a!=b); // true
console.log(a>b); // false
console.log(a<b); // true
console.log(a>=b); // false
console.log(a<=b); // true

var a="10";
var b=10;
console.log(a==b); // true , but we know they r different by datatypes
console.log(a===b); // false , here both value and datatype r compared

// Logical operators
var a=10;
var b=20;
var c=30;
var d=40;
console.log(a<b || c>d); // true for or ,if one condition is true it returns true
console.log(a<b && c>d); // false for and both conditions should be true to return true
console.log(a<b && c<d); // true
console.log(!(a<b)); // false ,actual condition is true if we  use ! operator  it reverses the result

