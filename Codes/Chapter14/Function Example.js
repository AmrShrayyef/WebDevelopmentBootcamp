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
}

buy(41);