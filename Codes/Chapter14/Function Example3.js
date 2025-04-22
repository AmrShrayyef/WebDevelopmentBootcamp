/*
function buy(money){
    console.log("Amr went To the shop with "+ money + " in his Pocket to buy Milk");
    let milk=10;
    console.log("the price of 1 bottle is "+ milk + " dollars");
    if(money>=10){
        let bottles= Math.floor(money/milk); // used math floor to make the answer appear with no .
        let extra=money % milk;
        console.log("Amr Bought "+ bottles + " with "+ money + " $ and have "  + extra +" left in his pocket" );

    }
    else{
        console.log("amr does not have enough money to buy a bottle of milk");
    }
    return("hay it is a way to send this and assign it to something ");
}

buy(41);
let message=buy(41);
console.log(message);
*/
let yourmoney;
let priceallParts;

function buyPC(money,price) {
    alert("Total price: " + price+" money ="+money); 
}

function price(graphicCards, cpu, motherboard) {
    if ((typeof graphicCards === 'number') && (typeof cpu === 'number') && (typeof motherboard === 'number')) {
        priceallParts = graphicCards + cpu + motherboard;
    }
    return priceallParts; 
}

function money(wallet){
    if (typeof wallet === 'number'){
        yourmoney=wallet;
    }
    return yourmoney;
}

buyPC(money(4),price(1, 1, 1));
