/*
var date=new Date()
console.log(date) //2026-02-06T11:00:05.756Z
console.log(date.toString()) 
//2026-02-06T11:02:03.352Z
//Fri Feb 06 2026 16:32:03 GMT+0530 (India Standard Time)

var date1=new Date(2026,2,17,5,30,45)
console.log(date1.toString()) //Tue Mar 17 2026 05:30:45 GMT+0530 (India Standard Time)
*/


/*
var date=new Date()
var date1=date.getFullYear()
console.log(date1) //2026
console.log(date.getMonth()) //1 means feburary
console.log(date.getDate()) //6
console.log(date.getDay()) //5 means friday
console.log(date.getHours()) //18  as per current time
console.log(date.getMinutes()) //21
console.log(date.getSeconds()) //18
console.log(date.getMilliseconds())

console.log(date.toLocaleDateString()) //6/2/2026
console.log(date.toLocaleTimeString()) //6:29:23 pm
*/

var date=new Date()
console.log(date.toString()) // Sat Feb 07 2026 14:33:12 GMT+0530 (India Standard Time)
date.setFullYear(2027);
console.log(date.toString()) //Sun Feb 07 2027 14:28:19 GMT+0530 (India Standard Time)
date.setMonth(10)
console.log(date) //2027-11-07T09:15:58.936Z , it move forward one step
date.setDate(4)
console.log(date.toString()) //Thu Nov 04 2027 14:47:25 GMT+0530 (India Standard Time)
date.setHours(16)
console.log(date.toString()) //Thu Nov 04 2027 16:56:13 GMT+0530 (India Standard Time)
date.setMinutes(56)
console.log(date.toString())//Thu Nov 04 2027 16:56:48 GMT+0530 (India Standard Time)
date.setSeconds(13)
console.log(date.toString())//Thu Nov 04 2027 16:56:13 GMT+0530 (India Standard Time)
date.setMilliseconds(233)
console.log(date) //2027-11-04T11:26:13.233Z
