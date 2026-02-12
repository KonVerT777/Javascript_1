1.

function primeNumber(number) {
    if (number <= 1) {
        return false;
    }
    var i = 2;

    while (i < number) {
        if (number % i ==0) {
            return false;
        }
        i++;
    }
    return true;
}

var number = 0;
while (number <= 100) {
    if (primeNumber(number)) {
        alert(number);
    }
    number++;
}



2., 3.

function countBasketPrice(basket) {
    var sum = 0;

    for(var i = 0; i < basket.length; i++) {
        sum = sum + basket[i][1];
    }
    return sum;
}

var basket = [['Сережки', 20], ['Браслет', 30], ['Кольцо', 40]];
var basketSum = countBasketPrice(basket);
alert('Сумма корзины составляет: ' + basketSum);



4. 

for (var i = 0; i < 9; alert(i++)) {}



5.

var x = "";
for (var i = 0; i < 20; i++) {
    x = x + 'x';
    console.log(x);
}