let x=Math.random();
x=x*6;
let xx=Math.floor(x);
console.log(xx);
//////love Calculater
let love=Math.random();
let precent=love*100;
let result=Math.floor(precent);
let first=prompt("Enter your name");
let second=prompt("Enter your lover name");
if((typeof first==='string')&&(typeof second==="string")){
    console.log(first+" love " +second+" "+result+"%" );
}
else{
    alert("that is not a name");
}