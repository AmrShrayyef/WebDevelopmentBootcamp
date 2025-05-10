$("button").on("click", function () {
   $("h1").hide(); 
   $("button").fadeOut(); 
});
///// hide what inside h1 when presing button And the button will fadeout


//// fadeToggle(); on and off

/// slideUp(); USEFUL for menus
/*
$("button").on("click", function () { /// we can use animate to do many things and make rules
    $("a").animate({opacity : 0.5});
 ///   $("h2").animate({color :"red"}); /// can't do that
    $("h2").animate({margin : "555.5 "});
 });
*/

 /// we can mix things together
$("button").on("click", function () { 
    $("h2").slideUp().slideDown().animate({margin: 333});
 });
