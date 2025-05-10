$("h1").click(function(){
    $("h1").css("color","red")
});

$("button").click(function(){
    $("button").css("color","red")
});


$("input").keypress(function(event){ // will show you what you put inside when u press any key on keyboard
console.log(event.key);
$("h1").text(event.key);
});


///or use on

$("h1").on("mouseover", function(){
    $("h1").css("color", "purple")
});