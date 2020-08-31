var basket = {};
var products = {
  ear: {
    name: "Сережки",
    price: 40,
    image: "../lesson7/img/earrings.jpg",
  },
  bra: {
    name: "Браслет",
    price: 150,
    image: "../lesson7/img/bracelet.jpg",
  },
  ring: {
    name: "Кольцо",
    price: 100,
    image: "../lesson7/img/ring.jpg",
  },
};

var catalog = "";
for (var key in products) {
  catalog += "Изделие: " + products[key].name + "<br>";
  catalog += "Стоимость, евро: " + products[key].price + "<br>";
  catalog += '<img src="' + products[key].image + '">' + "<br>";
  catalog += '<button class="btn" data-art="' + key + '">Купить</button>';
  catalog += "<hr>";
}
document.getElementById("catalog").innerHTML = catalog;

var toBasket = document.querySelectorAll("button");
toBasket.forEach(function (basketBtn) {
  basketBtn.addEventListener("click", addToBasket);
});

function addToBasket() {
  var articul = this.getAttribute("data-art");
  if (basket[articul] !== undefined) {
    basket[articul]++;
  } else {
    basket[articul] = 1;
  }
  localStorage.setItem("basket", JSON.stringify(basket));
  showBasket();
}

//Функция замыкания
function wrap(){
  console.log('Это обертка для функции')
  return function checkCart() {
    if (localStorage.getItem("basket") != null) {
      basket = JSON.parse(localStorage.getItem("basket"));
    }
  }
}
//Передаем замыкающую функцию в переменную 
let check = wrap()
//Вызываем функцию
check()

function saveCardToLS() {
  localStorage.setItem("basket", JSON.stringify(basket));
}

//Объект для работы с bind
let prod = {
  type: null,
  addEvent: function () {
    this.type.forEach((btn) => {
      btn.addEventListener("click", () => {
        doSomething(`${this.type[0].classList.value}`);
      });
    });
  },
};

function showBasket() {
  var out = "";
  for (var key in basket) {
    //out += j + ' --- ' + basket[j] + '<br>';
    out += '<button class="delete" data-art="' + key + '">X</button>';
    out += '<img src="' + products[key].image + '"width = "48">';
    out += products[key].name;
    out += '<button class="minus" data-art="' + key + '">-</button>';
    out += key;
    out += '<button class="plus" data-art="' + key + '">+</button>';
    out += basket[key] * products[key].price;
    out += "<br>";
  }
  document.getElementById("basket").innerHTML = out;

  //Bind на кнопки
  let add = prod.addEvent.bind({
    type: document.querySelectorAll("button.plus"),
  });
  let reduce = prod.addEvent.bind({
    type: document.querySelectorAll("button.minus"),
  });
  let remove = prod.addEvent.bind({
    type: document.querySelectorAll("button.delete"),
  });
  //Вызов Bind
  add();
  remove();
  reduce();
}

//Переписал функции в одну
function doSomething(toDo) {
  let articul = event.target.dataset.art;

  if (toDo === "minus") {
    basket[articul] > 1 ? basket[articul]-- : delete basket[articul];
  } else if (toDo === "delete") {
    delete basket[articul];
  } else if (toDo === "plus") {
    basket[articul]++;
  }
  saveCardToLS();
  showBasket();
};

showBasket();
