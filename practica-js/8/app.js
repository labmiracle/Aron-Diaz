//Ejercicio 8

function sum(...arguments) {
  let sum = 0;
  arguments.map((num) => {
    sum = num + sum;
  });
  return sum;
}
console.log(sum(3, 4, 2, 1, 1, 1));
