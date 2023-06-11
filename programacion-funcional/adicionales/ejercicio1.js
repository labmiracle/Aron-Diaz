const products = [
  {
    model: "Iphone 14",
    brand: "Apple",
    space: 128,
    price: 900,
  },
  {
    model: "S23 Ultra",
    brand: "Samsung",
    space: 256,
    price: 1050,
  },
  {
    model: "Torch",
    brand: "BlackBerry",
    space: 16,
    price: 3000,
  },
  {
    model: "Razer",
    brand: "Motorola",
    space: 2,
    price: 100,
  },
];

//1
function getProduct() {
  const productMap = [];
  for (let i = 0; i < products.length; i++) {
    productMap.push(products[i].model);
  }
  return productMap;
}

console.log(getProduct());

//2
function getModel() {
  for (let j = 0; j < products.length; j++) {
    if (products[j].model === "Torch") {
      return products[j];
    }
  }
}
console.log(getModel());

//3
function getPrice() {
  const productFilter = [""];
  for (let h = 0; h < products.length; h++) {
    if (products[h].price < 1000) {
      productFilter.push(products[h]);
    }
  }
  return productFilter;
}
console.log(getPrice());

//4
function getTotal() {
  let total = 0;
  for (let k = 0; k < products.length; k++) {
    total = total + products[k].price;
  }
  return total;
}
console.log(getTotal());
