1.

function chessBoard() {

    var table = document.createElement('table');
    var rows = ["A", 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

    for (var i = 0; i < 9; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < 9; j++) {
            var td = document.createElement('td');
            if (i == 8 && j > 0) {
                td.className = 'coordinates';
                td.textContent = rows[j - 1];
            } else if (i != 8 && j == 0) {
                td.className = 'coordinates';
                td.textContent = 8 - i;
            } else if (i % 2 == j % 2) {
                td.className = 'white';
            } else {
                td.className = 'black';
            }
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table);
}

chessBoard();



2.

var basket = {
    products: [],

    basketMessage: function(){
        if (this.products.length == 0){
            return "Корзина пуста!";
        } else {
            return "В корзине: " + this.countBasketCount() + " товаров на сумму " + this.countBasketPrice() + " рублей";    
        }
    },

    countBasketPrice: function(){
        var sum = 0;
        for(var i = 0; i < this.products.length; i++){
            sum = sum + this.products[i].price * this.products[i].count;
        }
        return sum;
    },

    countBasketCount: function(){
        var sum = 0;
        for(var i = 0; i < this.products.length; i++){
            sum = sum + this.products[i].count;
        }
        return sum;
    }
}

function displayText($dom,text){
    $dom.textContent = text;    
}

var products = [
    {name: 'Сережки', price: 20, count: 2}, 
    {name: 'Браслет', price: 30, count: 3}, 
    {name: 'Кольцо', price: 40, count: 1},
];

basket.products = products;

$cart = document.getElementById("cart");
$cart.classList.add("cart");

displayText($cart,basket.basketMessage());