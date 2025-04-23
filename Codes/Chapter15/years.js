let number;
function year(number){
    if(typeof number !=="number"){
        console.log("please Enter A number");
    }
    else{
        if(number%4!==0){
            console.log("no leep");
        }
        else{ 
            if(number%100===0){
                console.log("leap");
            }
        }
    }
}

year(3);
