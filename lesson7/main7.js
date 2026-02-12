var basket = {};
var products = {
    "ear": {
        name: 'Сережки',
        price: 40,
        image: "../lesson7/img/earrings.jpg"
    },
    "bra": {
        name: 'Браслет',
        price: 150,
        image: "../lesson7/img/bracelet.jpg"
    },
    "ring": {
        name: 'Кольцо',
        price: 100,
        image: "../lesson7/img/ring.jpg"
    }
};

var catalog = "";
for (var key in products) {
    catalog += "Изделие: " + products[key].name + "<br>";
    catalog += "Стоимость, евро: " + products[key].price + "<br>";
    catalog += '<img src="' + products[key].image + '">' + "<br>";
    catalog += '<button class="btn" data-art="' + key + '">Купить</button>';
    catalog += '<hr>';
}
document.getElementById('catalog').innerHTML = catalog;

checkCart();

var toBasket = document.querySelectorAll('button');
toBasket.forEach(function (basketBtn) {
    basketBtn.addEventListener('click', addToBasket);
})

function addToBasket() {
    var articul = this.getAttribute('data-art');
    if (basket[articul] !== undefined) {
        basket[articul]++;
    } else {
        basket[articul] = 1;
    }
    localStorage.setItem('basket', JSON.stringify(basket));
    //console.log(basket);
    showBasket();
}

function checkCart() {
    if (localStorage.getItem('basket') != null) {
        basket = JSON.parse(localStorage.getItem('basket'));
    }
}

function saveCardToLS() {
    localStorage.setItem('basket', JSON.stringify(basket));
}

function showBasket() {
        var out = '';
        for (var key in basket) {
            //out += j + ' --- ' + basket[j] + '<br>';
            out += '<button class="delete" data-art="' + key + '">X</button>';
            out += '<img src="' + products[key].image + '"width = "48">';
            out += products[key].name;
            out += '<button class="minus" data-art="' + key + '">-</button>';
            out += key;
            out += '<button class="plus" data-art="' + key + '">+</button>';
            out += basket[key] * products[key].price;
            out += '<br>';
        }
        document.getElementById('basket').innerHTML = out;

        var plusProducts = document.querySelectorAll('button.plus');
        plusProducts.forEach(function (plusBtn) {
            plusBtn.addEventListener('click', plusProduct);
        });

        function plusProduct() {
            var articul = this.getAttribute('data-art');
            basket[articul]++;
            saveCardToLS();
            showBasket();
        }

        var minusProducts = document.querySelectorAll('button.minus');
        minusProducts.forEach(function (minusBtn) {
            minusBtn.addEventListener('click', minusProduct);
        });

        function minusProduct() {
            var articul = this.getAttribute('data-art');
            if (basket[articul] > 1) {
                basket[articul]--;
            } else {
                delete basket[articul];
            }
            saveCardToLS();
            showBasket();
        }

        var deleteProducts = document.querySelectorAll('button.delete');
        deleteProducts.forEach(function (deleteBtn) {
            deleteBtn.addEventListener('click', deleteProduct);
        });

        function deleteProduct() {
            var articul = this.getAttribute('data-art');
            delete basket[articul];
            saveCardToLS();
            showBasket();
        }
    }

}