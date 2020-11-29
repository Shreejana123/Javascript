let currentDate, birthDate;
function ageCalculator(){

    let diff = currentDate - birthDate;
    let age = new Date(diff); 
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}
console.log(ageCalculator(new Date(diff)));

let button = document.getElementById('button1');

window.onload = function(){
    
    let button = document.getElementById('button1');
    
    button.onclick = function(){
        
        }
    }