// var name=prompt("enter ur name");
// console.log(name); 
// document.write(name);

// var name=prompt("enter ur name");
// var age=prompt("enter ur age");
// console.log(name);
// document.write(name);
// console.log(age);
// document.write(age);

var person =["harshitha",22,"developer"];
console.log(person);  //[ 'harshitha', 22, 'developer' ]

var person=[];
console.log(person); // []

var person=[];
console.log(person); // []
person[0]="harshitha";
person[1]=22;
person[2]="developer";
console.log(person); // [ 'harshitha', 22, 'developer' ]
console.log(person[0]); //harshitha


var car=new Array();
car[0]="Thar";
car[1]=2000;
car[2]="black";
console.log(car); // [ 'Thar', 2000, 'black' ]



var fruits=["mango","apple","banana"];
console.log(fruits); // [ 'mango', 'apple', 'banana' ]
fruits.push("grapes");
console.log(fruits); // [ 'mango', 'apple', 'banana', 'grapes' ]
console.log(fruits.pop()); // grapes
console.log(fruits); // [ 'mango', 'apple', 'banana' ]
fruits.unshift("kiwi"); 
console.log(fruits); // [ 'kiwi', 'mango', 'apple', 'banana' ]
fruits.shift(); // removes kiwi
console.log(fruits); // [ 'mango', 'apple', 'banana' ]
console.log(fruits.length); // 3
console.log(fruits.includes("apple")); // true
console.log(fruits.indexOf("banana")); // 2

var fruits=["mango","apple","banana","mango"];
console.log(fruits.lastIndexOf("mango")); // 3

console.log(fruits.slice(1,3)); // [ 'apple', 'banana' ]


fruits.splice(1,0,"orange","strawberry","pineapple");
console.log(fruits); // [ 'mango', 'orange', 'strawberry', 'pineapple', 'apple', 'banana', 'mango' ]

fruits.splice(1,1,"watermelon");
console.log(fruits); // [ 'mango', 'watermelon', 'strawberry', 'pineapple', 'apple', 'banana', 'mango' ] , here orange is deleted

var arr1=["hyderabad","mumbai","chennai"];
var arr2=["delhi","bangalore","kolkata"];
console.log(arr1);
console.log(arr2);
console.log(arr1.concat(arr2)); // [ 'hyderabad', 'mumbai', 'chennai', 'delhi', 'bangalore', 'kolkata' ]
console.log(arr1.join("-")); // hyderabad-mumbai-chennai
console.log(arr1.toString()); // hyderabad,mumbai,chennai


var numbers=[10,20,30,40,50];
console.log(numbers.reverse()); // [ 50, 40, 30, 20, 10 ]
console.log(numbers.sort()); // [ 10, 20, 30, 40, 50 ] //sort in ascending order
