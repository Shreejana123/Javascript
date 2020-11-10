function calculateSupply(age, amountPerDay){
    var maxAge = 70;
    var totalNeed = (amountPerDay*365)*(maxAge - age);
    console.log('You will need ' + totalNeed + ' to last you until the ripe old age of' + maxAge);
}
calculateSupply(21, 3);
calculateSupply(18, 4);
calculateSupply(30, 2);