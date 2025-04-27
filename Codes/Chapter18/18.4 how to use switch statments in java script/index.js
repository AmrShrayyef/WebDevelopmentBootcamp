
//// we yse switch to make sure each button have a different sound that this other 
let numberOfButtons=document.querySelectorAll(".clickme").length;
for (let i=0;i<numberOfButtons;i++){
    document.querySelectorAll(".clickme")[i].addEventListener("click", function() {
        let buttonInnerHTML=this.innerHTML
        switch (buttonInnerHTML) {
             case "a": // look in the html page it target the name of button
                    var sound = new Audio("Sounds/Abeer Nehme - Bala Ma Nhess _ عبير نعمة - بلا ما نحس(M4A_128K).m4a");
                    sound.play();
                    break;
             case "b":
                    var sound = new Audio("Sounds/Abeer Nehme - Bala Ma Nhess _ عبير نعمة - بلا ما نحس(M4A_128K).m4a");
                    sound.play();
                    break;
             default: console.log("how did you reach this? "); /// for other things that you maybe missed
        }
        
    });
}


