//Ejercicio 10

function combineTwoArrays(A, B) {
  let C = [...A, ...B];

  return C;
}

let lenguajes = ["Javascript", "Java", "Python"];
let frameworks = ["React", "Angular", "Vue"];

console.assert(combineTwoArrays(lenguajes, frameworks));
console.assert(combineTwoArrays(["Hola"], ["Mundo"]));
