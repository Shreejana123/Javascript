function celciusToFahrenheit(celc){
    var fahrenheit = celc * (9/5) + 32;
    console.log(celc + '°C is ' + fahrenheit + 'F');
}
function fahrenheitToCelcius(fahren){
    var celcius = (fahren - 32)*(5/9);
    console.log(fahren + 'F is ' + celcius + '°C');
}
celciusToFahrenheit(100);
fahrenheitToCelcius(32);