let guestlist=[ "amr", "soso" , "ahamad" ];
//console.log(guestlist);
//console.log(guestlist[0]);
let guest=prompt( "Enter Your Name" ) ;
if((guest===guestlist[0])||(guest===guestlist[1])||(guest===guestlist[2])){
    console.log("welcome! " + guest);
}
else{
    console.log("your are not invited!")
}


/// we can use guestlist.include(guest) instead of if