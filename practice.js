/*
function fun(str) {
    for (let i = 0; i < str.length; i++) {
        let count = 0;
        for (let j = 0; j < str.length; j++) {
            if (str[i] === str[j]) {
                count++;
            }
        }
        if (count === 1) {
            return str[i];
        }
    }
    return null;
}
console.log(fun("aabbcde")); // c
*/

// Celsius to Fahrenheit conversion
/*
let celsius = prompt("Enter temperature in Celsius:");
celsius = Number(celsius);

// Formula: F = (9/5) * C + 32
let fahrenheit = (9 / 5) * celsius + 32;

console.log("Celsius:", celsius + "°C");
console.log("Fahrenheit:", fahrenheit + "°F");
*/

/*
let n = prompt("enter digit");
while (n > 9) {
    let sum = 0;
    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    n = sum;
}
console.log(n); // if we take 198 -->1+9+8= 18 again 1+8 =9 single digit appear
*/


function isEmpty(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
}
console.log(isEmpty({}));        // true
console.log(isEmpty({ a: 1 }));  // false
