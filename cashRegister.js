function cashRegister(cart){
    var items = Object.keys(cart);
    var sum = 0;

    for(var i = 0; i < items.length; i++){
        var itemName = items[i];
        var itemPrice = cart[itemName];
        sum += Number.parseFloat(itemPrice);
    }
    return sum;
}
var cartForParty = {  
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"
  };
console.log(cashRegister(cartForParty));