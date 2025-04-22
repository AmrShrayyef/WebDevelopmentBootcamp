let myName=("amr");
alert(myName.slice(0,2));
/// 2-0 = 2 characters will be shown = am

//now if u want to let user write and article of 10 straings and nothing more you can use slice to achieve this
let post=prompt("Enter Your Name should be less than 10 chacters anything above will be cut");
characterLength=post.length;
alert("Your name's Number of string is without cutting "+characterLength);
alert(post.slice(0,10));