function setPrice(item, price) {
  return { ...item, price };
}


const addToCart = (cart, item) => {
  return [...cart, item];
};

module.exports = { setPrice, addToCart };
