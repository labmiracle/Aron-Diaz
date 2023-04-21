//Ejercicio 5

function camelize(str) {
    
    let oraciones = str.split(" ");
    let letraMayuscula = "";
    let resultado = "";

    for (let oracion of oraciones) {
        letraMayuscula += oracion[0].toUpperCase() + oracion.substring(1);
    }
    return resultado += letraMayuscula[0].toLowerCase() + letraMayuscula.substring(1);
}

console.log(camelize("Hola a todos que tal"));




