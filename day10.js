/*async function fetchData(){
    var response = await fetch('https://fakestoreapi.com/products/1')
    var result = response.json();
    document.write(result);
    console.log(result);
}
fetchData(); */

for(i=0;i<=10;i++){
    console.log(i)
}

for(i=10;i>=0;i--){
      console.log(i)
}

var i=5;
while(i<=10){
    console.log(i)
    i+=2
} // 5 7 9

var i=1;
do{
    console.log("harshii")
    i++
}
while(i<=5);


//terinary operator 
var age=18;
age>=18?console.log('eligible to vote'):console.log('not eligible')
