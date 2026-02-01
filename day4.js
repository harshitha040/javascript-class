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
console.log(person) // { name: "harsi", city: "bangalore" } here age property is deleted

console.log(delete person.age) // true


// object methods
console.log(Object.keys(person)) // [ 'name', 'city' ]
console.log(Object.values(person)) // [ 'harsi', 'bangalore' ]
console.log(Object.entries(person)) // [ [ 'name', 'harsi' ], [ 'city', 'bangalore' ] ] diffent array is created for each key value pair

var object1={name:"harshi",age:22} // target object
var object2={city:"bangalore",country:"india"} //source
var object3=Object.assign(object1,object2)
console.log(object3) // { name: 'harshi', age: 22, city: 'bangalore', country: 'india' }


var vegitables={veg1:"carrot",veg2:"onion"}
console.log(Object.freeze(vegitables)) // { veg1: 'carrot', veg2: 'onion' }
vegitables.veg3="potato" // we cant add new property to frozen object
console.log(vegitables) // { veg1: 'carrot', veg2: 'onion' }



var fruits={fruit1:"apple",fruit2:"banana"}
console.log(Object.seal(fruits)) // { fruit1: 'apple', fruit2: 'banana' }
fruits.fruit3="grapes" // we cant add new property to sealed object
console.log(fruits) // { fruit1: 'apple', fruit2: 'banana' }
fruits.fruit1="mango" // we can modify existing property
console.log(fruits) // { fruit1: 'mango', fruit2: 'banana' }


var bikes={name:"honda",model:"720",rate:"800000"}
console.log(Object.hasOwnProperty( 'name')) // true
console.log(Object.hasOwnProperty( 'color')) // false


var laptop=Object.create({type:"gaming"})
console.log(laptop.type) // gaming