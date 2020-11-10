function calcCircumference(rad){
    var circum = 2*Math.PI*rad;
    console.log('The circumference is ' + circum);
}
function calcArea(rad){
    var area = Math.PI*rad*rad;
    console.log('The area is ' + area);
}
calcCircumference(5);
calcArea(2);