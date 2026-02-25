// console.log("one")
// console.log("two")
// console.log("three")  execute line by line


/*
console.log(" 1 hi everyone")
setTimeout(()=>{
    console.log(" 2 how are you")
},2000)
console.log(" 3 take care") 
// o/p 1, 3,2
*/


// using call back 
/*
function fun(subject,callback){
    console.log(subject + "is over")
    callback()
}
function hm(){
    console.log("homework completely successfully")
}
fun("maths",hm)
*/


//using setTimeout
/*
function fun(subject,callback){
    setTimeout(()=>console.log(subject + "is over"),2000)
    callback()
}
function hm(){
    console.log("homework completely successfully")
}
fun("maths",hm)
*/

/*
setTimeout(()=>{
    console.log("step1")
    setTimeout(()=>{
        console.log("step2")
        setTimeout(()=>{
            console.log("step3")
            setTimeout(()=>{
                console.log("step4")
            })
        },2000)
    },2000)
},2000)
*/

function boil(callback){
    setTimeout(()=>{
        console.log("boiling the water")
        callback();
    },3000)
}
function addnoodles(callback){
    setTimeout(()=>{
        console.log("noodles added")
        callback();
    },2000)
}
function addmasala(callback){
    setTimeout(()=>{
        console.log("masala added")
        callback();
    },2000)
}
function serving(){
    setTimeout(()=>{
        console.log("maggie iss servied to every one")
    },2000)
}
boil(()=>{
    addnoodles(()=>{
        addmasala(()=>{
            serving()
        })
    })
})