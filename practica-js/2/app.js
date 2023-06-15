//Ejercicio 2


function sum(arr, n) {
  if (n === 0) {
    return 0;
  }
  return sum(arr, n - 1) + arr[n - 1];
}

let operation = sum([1, 7, 3], 2);
console.log(operation);
