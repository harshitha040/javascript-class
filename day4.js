// var person = {}
// console.log(person) // object { }
// console.log(typeof (person)) // object

var person ={name: "John", age: 30, city: "New York"}
console.log(person) // object { name: "John", age: 30, city: "New York" }



//syntax for  adding values after creating an object : object _name . property _name =value ;
var person={}
console.log(person) // { }
person.name="harsi"
console.log(person) // { name: "harsi" }
person.age=22
person.city="bangalore"
console.log(person) // { name: "harsi", age: 22, city: "bangalore" }



// if we want particular value by dot notation
console.log(person.name) // harsi
console.log(person.city) // bangalore

// if we want particular value by bracket notation
console.log(person["age"]) // 22
console.log(person["name"]) // harsi

// for deleting a property from object
delete person.age
console.log(person) // { name: "harsi", city: "bangalore" }

console.log(delete person.age) // true
