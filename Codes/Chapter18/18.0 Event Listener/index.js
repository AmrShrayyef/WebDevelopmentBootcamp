alert("hi");
/*document.querySelector("button").addEventListener("click", handleClick);///dont use handleclick() but use it without the ()
function handleClick(){
    alert("i got clicked");
}
    */
/// or like this 
/*
document.querySelector("button").addEventListener("click", function() {
    alert("i got clicked");
});
*/
//now i want to apply it to all buttons
let numberOfButtons=document.querySelectorAll(".clickme").length;
for (let i=0;i<numberOfButtons;i++){
    document.querySelectorAll(".clickme")[i].addEventListener("click", function() {
        alert("i got clicked");
    });
}