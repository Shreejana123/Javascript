let currentDate, birthDate;
function ageCalculator(currentDate, birthDate){

    let diff = currentDate - birthDate;
    let age = new Date(diff); 
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}
console.log(ageCalculator(new Date(diff)));

