//Ejercicio 2

function sum(arr, n) {
    let result = 0;
    for (let i = 0; i < n; i++) {
      result += arr[i];
    }
    return result;
  }
  
  let operation = sum([1, 1, 2, 8, 9 , 100], 4);
  
  console.log(operation);
  