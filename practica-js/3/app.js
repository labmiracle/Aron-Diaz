//Ejercicio 3

let altura = 0;
let dias = 0;

function calcularDiasCrecimiento(
  velocidadCrecimiento,
  velocidadDecrecimiento,
  alturaDeseada
) {
  while (altura < alturaDeseada) {
    altura += velocidadCrecimiento;
    dias++;
    if (altura >= alturaDeseada) break;
    altura -= velocidadDecrecimiento;
  }
  return dias;
}

//177 dias tarda en crecer si la velocidad de crecimiento es 2cm, el decrecimiento es 0.30 y la altura 3 metros
console.log(calcularDiasCrecimiento(2, 0.3, 300));
