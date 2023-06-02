let iceCreamPrice = 50;
let toppings = {
  "oreo": 10,
  "kitkat": 15,
  "brownie": 20
};

let toppingChoice = prompt("¿Qué topping te gustaría agregar a tu helado? (Oreo, KitKat, Brownie)").toLowerCase();

if (toppings[toppingChoice]) {
  let toppingPrice = toppings[toppingChoice];
  let totalPrice = iceCreamPrice + toppingPrice;
  alert(`El precio total de tu helado con el topping de ${toppingChoice} es ${totalPrice} MXN.`);
} else {
  alert(`No tenemos este topping, lo sentimos. El precio del helado sin ningún topping es ${iceCreamPrice} MXN.`);
}

