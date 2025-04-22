//make words look uppercase --> amr>>>AMR
let myName="amrr";
newName=myName.toUpperCase();
alert(newName);

//now if i want to make only the first letter big and other remains the same
let myName2="amr";
firstSlice=myName2.slice(0,1);
SecondSlice=myName2.slice(1,100);
let big=firstSlice.toUpperCase();
alert(big+ SecondSlice);