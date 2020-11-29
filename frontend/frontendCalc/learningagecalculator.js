var DOB = "March 1, 1995";

var age = Date.now();

var millisecond = age;
var second = 1000;
var minute = second * 60;
var hour = minute * 60;
var day = hour * 24;
var month = day * 30;
var year = month * 12;

var years =Math.round(milliseconds/year);

function printResult(){
    var message = "Age in years:" + years;
    document.getElementById('placeholder').innerHTML = message;
}
window.onload = printResult;