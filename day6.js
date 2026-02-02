var place ="WARANGAL";
/*var place1=place.charAt(2);
console.log(place1); // R */

console.log(place.charAt(2)); // R  , It can be written in this way also
console.log(place.charAt(-5)); // <empty string> , it return empty string for negative index

console.log(place.charCodeAt(1)); //65 . it return ASCII  value of A
console.log(place.charCodeAt(2)); //82 . it return ASCII value of R

console.log(place.at(3)); // A  , it return character at index 3
console.log(place.at(-5));// A , it return character at negative index -5


var place1="hyderabad";
var place2="vijayawada";
console.log(place1.concat(place2)); // hyderabadvijayawada
console.log(place1 + place2); // hyderabadvijayawada
console.log(place1,place2); // hyderabad vijayawada  comma adds space between two strings
console.log(place1.concat(" ", place2)); // hyderabad vijayawada
console.log(place1.concat(" "+place2)); // hyderabad vijayawada  , concat done by using + and ,


console.log(place.includes('W')); // true 
console.log(place.includes('M')); // false

console.log(place.indexOf('G')); // 4
console.log(place.indexOf('A')); // 1  , it returns first occurance index of A

console.log(place.lastIndexOf('A')); //6  , it returns last occurance index of A

console.log(place.length); //8  , it returns length of string

console.log(place1.toUpperCase()); // HYDERABAD
console.log(place.toLowerCase()); // warangal

var boy="   varun  ";
console.log(boy.trim()); // varun , it removes leading and trailing spaces
console.log(boy) //   varun   , original string remains same with spaces

console.log(boy.trimStart()); // <space removed >varun   , it removes leading spaces only
console.log(boy.trimEnd()); //   varun<space removed> , it removes trailing spaces only

console.log(place.slice(2,7)) // RANGA , it extracts characters from index 2 to 6 (7-1)

console.log(place.substring(2,7)) // RANGA  , it is also same as slice 

var num=12345;
console.log(typeof(num)); // number
var num1=num.toString();
console.log(typeof(num1)); // string
console.log(num1); // 12345


var num="3"
console.log(num.padStart(3,'4')) // 433  , it adds 4 at the starting to make total length 3
console.log(num.padEnd(3,'4')) // 344  , it adds 4 at the end to make total length 3

console.log(place.replace('A','a')) // WArANGAL , it replaces first occurance of A with a
console.log(place.replaceAll('A','a')) // WaRaNGaL , it replaces all occurance of A with a

console.log(place.localeCompare(place)) // 0 , it returns 0 if both strings are same
console.log(place.localeCompare(place1)) // -1 , it returns -1 if first string is smaller than second string
console.log(place1.localeCompare(place)) // 1 , it returns 1 if first string is greater than second string


var place ="Korean"
console.log(place.startsWith('K')) // true
console.log(place.endsWith('n')) // true
console.log(place.startsWith('k')) // false , it is case sensitive
console.log(place.endsWith('N')) // false , it is case sensitive

console.log(place.repeat(3)) // KoreanKoreanKorean , it repeats the string 3 times


var veg="123"
console.log(Number(veg)) // 123 , it converts string to number
console.log(veg.split(",")) // [ '123' ] , it splits string into array based on comma, here no comma so it return whole string as single element array

var fruit="1,2,4"
console.log(fruit.split(",")) // [ '1', '2', '4' ] , it splits string into array based on comma


