let love = Math.random();
let percent = love * 100;
let result = Math.floor(percent)+1; 

let first = prompt("Enter your name");
let second = prompt("Enter your lover's name");
let password = prompt("Enter the secret password of 4 letters in Arabic to win");

// Check if inputs are non-empty strings (not numbers) and trim used to make sure no whitespace is added
if (password === "بحبك") {
    alert(first + " loves " + second + " with 100000% in love score!!!!");
} else if (typeof first === "string" && first.trim() !== "" &&typeof second === "string" && second.trim() !== "") {
    alert(first + " loves " + second + " " + result + "%");
} else {
    alert("Please enter valid names (text only, not numbers or empty).");
}