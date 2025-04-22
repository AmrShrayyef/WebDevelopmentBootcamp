function bmiCalculater(weight,height){
    bmi=weight/(height*height);
    return Math.round(bmi);
}
/*

function result(bmi){
    console.log(bmi);
}
result(bmiCalculater(86,1.74)); ///// 1.74 m istead of 174 cm cause we want it in Meter not cm

*/

let bmi= bmiCalculater(86,1.74);