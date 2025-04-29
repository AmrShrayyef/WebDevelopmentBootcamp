let tune=new Audio("./notification.mp3");
/*
document.getElementById("greet").innerHTML="hayo";

document.querySelector("#greet").style.color="red";

document.getElementById("greet").style.color="yellow";// will overwrite the above 


document.getElementsByClassName("b1")[0].addEventListener("click", function(){ /// remember to add [0]
    tune.play();}
);

document.querySelector(".b2").style.color="red";

document.getElementsByTagName("button")[1].style.color="white";/// overwrite the above

let buttons=document.querySelectorAll("button");//// overwrite the above and we can use this method to apply what we want to the elements of the same type
for(let i=0  ; i<buttons.length ;i++){
    buttons[i].style.color="black";
}

document.querySelectorAll("button").forEach(function(button) {
    button.style.color = "red"; ////////////////////////////////////////////////////or this way
});

document.querySelectorAll("button").forEach(function(button){//// make all buttons do voice
    button.addEventListener("click", function(){
        tune.play(); //// do not use it with this
        this.style.color = "yellow";  ////or button.style.color
        this.style.backgroundColor = "red"; ////or button.style.backgroundcolor
    })
});

/*
//////////////////////////////////////understand This
const person = {
    name: "Amr",
    greet: function() {
        console.log("Hi, I am " + this.name); // `this` refers to `person`
    }
};
person.greet(); // Output: "Hi, I am Amr"
///////////////////////////////////////understand this              /////////////
document.querySelector("button").addEventListener("click", function() {//////////
    this.style.color = "blue"; // `this` refers to the button that was clicked///
});                                                                          ////
/////////////////////////////////////////////////////////////////////////////////
*/


/*
document.addEventListener("keypress", function(){
    tune.play();
    alert("u ued the keyboard to play a sound");
});
*/

document.addEventListener("keypress", function(event) { // Listen for keypress events
    switch (event.key) { // Use event.key to identify the pressed key
        case "a": // Play sound if the key pressed is "a"
            tune.play();
            console.log("You pressed 'a' and played a sound!");
            break;

        case "b": // Example for another key
            console.log("You pressed 'b', but no sound is played.");
            tune.play();
            break;

        default:
            console.log("Key pressed does nothing.");
            break;
    }
});


document.querySelectorAll("button").forEach(function(button) {
    button.addEventListener("click", function() { // Attach the event listener to each button
        switch (button.className){ // Use the button's class bane to match in the switch
            case "b1":
                button.style.color = "red"; // Change color to red
                break;

            case "b2":
                button.style.color = "yellow";
                tune.play(); // Change color to yellow
                break;

            default:
                alert("No matching button was clicked!");
                break;
        }
    });
});

//// using this to achieve the above
document.querySelectorAll("button").forEach(function(button) {
    button.addEventListener("click", function() { // Attach the event listener to each button
        switch (this.className) { // Use `this` to refer to the clicked button ////////////////////////////////////
            case "b1":
                this.style.color = "white"; // Change the clicked button's text color to red
                break;

            case "b2":
                this.style.color = "white"; // Change the clicked button's text color to yellow
                tune.play(); // Play the sound
                break;

            default:
                alert("No matching button was clicked!");
                break;
        }
    });
});

function PC(type, ram, gpu, extras) {
    this.type = type;
    this.ram = ram;
    this.gpu = gpu;
    this.extras = extras;
}

let BuyPC = new PC("acer", "16", "rtx", ["fans", "leds"]);
console.log(BuyPC);



/// adding a class to an elemnt using java script
document.querySelectorAll("button").forEach(function(button){
    button.classList.add("makeItWhite");
});