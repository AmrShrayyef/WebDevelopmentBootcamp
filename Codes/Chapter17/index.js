let radomNumber1=Math.round(Math.random()*6)+1;
let radomNumber2=Math.round(Math.random()*6)+1;
if(radomNumber1===1){
    document.querySelector(".img1").setAttribute("src","./images/1.JPG");
}
else if(radomNumber1===2){
    document.querySelector(".img1").setAttribute("src","./images/2.JPG");
}
else if(radomNumber1===3){
    document.querySelector(".img1").setAttribute("src","./images/3.JPG");
}
else if(radomNumber1===4){
    document.querySelector(".img1").setAttribute("src","./images/4.JPG");
}
else if(radomNumber1===5){
    document.querySelector(".img1").setAttribute("src","./images/5.JPG");
}
else {
    document.querySelector(".img1").setAttribute("src","./images/6.JPG");
}
if(radomNumber2===1){
    document.querySelector(".img2").setAttribute("src","./images/1.JPG");
}
else if(radomNumber2===2){
    document.querySelector(".img2").setAttribute("src","./images/2.JPG");
}
else if(radomNumber2===3){
    document.querySelector(".img2").setAttribute("src","./images/3.JPG");
}
else if(radomNumber2===4){
    document.querySelector(".img2").setAttribute("src","./images/4.JPG");
}
else if(radomNumber2===5){
    document.querySelector(".img2").setAttribute("src","./images/5.JPG");
}
else {
    document.querySelector(".img2").setAttribute("src","./images/6.JPG");
}
if(radomNumber1>radomNumber2){
    document.querySelector("h1").innerHTML="player1 wins";
}
else if(radomNumber1<radomNumber2){
    document.querySelector("h1").innerHTML="player2 wins";
}
else{
    document.querySelector("h1").innerHTML="draw";
}