//Ejercicio 6

const carrito = {
  productos: [
    {
      nombre: "Papel higienico",
      unidades: 4,
      precio: 5,
    },
    {
      nombre: "chocolate",
      unidades: 2,
      precio: 1.5,
    },
  ],

  get precioTotal() {
    let precioTotal = 0;
    for (let producto of this.productos) {
      precioTotal += producto.precio * producto.unidades;
    }
    return precioTotal;
  },
};

console.log(carrito.precioTotal);
