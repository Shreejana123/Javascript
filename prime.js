let number = [3, 5, 7, 8];
function printPrime(arr){
    if(number === 1){
        console.log('1 is neither prime nor composite number.');
    }else if(number > 1){
        for(i = 2; i < Number; i++){
        if(number % i == 0){
            console.log(`${number} is a prime number`);
        }else{
            console.log(`${number} is not a prime number`);
        }
        }
    }else if(number < 1){
        console.log('The number is not a prime number.');
    }

}
printPrime(number);