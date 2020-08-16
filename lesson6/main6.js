var basket = {};

var products = {
    "ear" : {
        name: 'Сережки', price: 40, image: "img/earrings.jpg"
    },
    "bra" : {
        name: 'Браслет', price: 150, image: "img/bracelet.jpg"
    },
    "ring" : {
        name: 'Кольцо', price: 100, image: "img/ring.jpg"}
    }

var catalog = "";
for(var key in products) {
    catalog+="Изделие: " + products[key].name + "<br>";
    catalog+="Стоимость, евро: " + products[key].price + "<br>";
    catalog+='<img src="' + products[key].image + '">' + "<br>";
    catalog+='<button class="btn" data-art="'+ key +'">Купить</button>';
    catalog+='<hr>';
}

document.getElementById('catalog').innerHTML = catalog;
let toBasket = document.querySelectorAll('button');
    toBasket.forEach(function(basketBtn) {
        basketBtn.addEventListener('click', addToBasket);
    }
    )


function addToBasket() {
    var articul = this.getAttribute('data-art');
    if(basket[articul] !== undefined) {
        basket[articul]++;
    } else {
        basket[articul] = 1;
    }
    
    console.log(basket);
}


