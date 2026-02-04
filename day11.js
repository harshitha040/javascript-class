/*//basic interpolation
var place = "Nellore"
var food = "Biryani"
console.log("harshi is from "+ place +" she like "+ food)
console.log(`harshi is from ${place} she like ${food}`)

//add expressions
var num1=20;
var num2=45;
console.log("the addition of" + num1 + "and " + num2 +  "are" + (num1+num2))
console.log(`the addition of ${num1}and ${num2} are ${num1+num2}`)

//we can include the Additional quotes
console.log(`harshish restuarnt is so famous for "biryani"`) //harshish restuarnt is so famous for "biryani"


// we can write a multiple string 
console.log("twinkle twinkle\n little start\n how i wonder what u are")
// o/p : twinkle twinkle
//        little start
//        how i wonder what u are , here we use \n to get in seoerate line 

console.log(`twinkle twinkle
     little start
      how i wonder what u are`) 
// twinkle twinkle
//        little start
//        how i wonder what u are , here by using backticks we can write as above

*/

// if statement , if else
/*var sundri =17
if(sundri>=18){
    console.log("eligible to get vote")
}
else{
    console.log("not eligible to vote")
}*/

/*
var marks=prompt("enter marks")
if(marks>=90 && marks<=100){
    console.log("grade a")
}
else if(marks<90 && marks>=85){
    console.log("grade b")
}
else if(marks<85 && marks>=60){
    console.log("grade c")
}
else if(marks<60 && marks>=35){
    console.log("grade d")
}
else if(marks<35){
    console.log("fail")
}
else{
    console.log("enter marks")
}
*/

/*
//break
for(i=0;i<=10;i++){
    if(i==5){
        break
    }
    console.log(i)
    
}

//continue
for(i=0;i<=10;i++){
    if(i==5){
        continue
    }
    console.log(i)
    
}// o/p : 0 to 10 by skipping 5
*/


//switch 
var day ="monday";
switch(day)
{
    case "sunday":console.log("holiday")
    break;
    case "monday":console.log("no non veg")
    break;
    case "tuesday":console.log("working day")
    break;
    default :console.log("yo have entered wrong day")
    break;
}