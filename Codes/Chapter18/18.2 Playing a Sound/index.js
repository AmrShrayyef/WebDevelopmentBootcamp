let sound = new Audio("Sounds/Abeer Nehme - Bala Ma Nhess _ عبير نعمة - بلا ما نحس(M4A_128K).m4a");
let numberOfButtons=document.querySelectorAll(".clickme").length;
for (let i=0;i<numberOfButtons;i++){
    document.querySelectorAll(".clickme")[i].addEventListener("click", function() {
        sound.play();
        console.log(this.innerHTML); //will Show what you clicked
        this.style.color="red";
        
    });
}


