//Ejercicio 4

  function palabraMasLarga(str){
    
    let palabras = str.split(" ");
    let scanPalabra = "";
    for(let palabra of palabras){
        if(palabra.length >= scanPalabra.length){
            scanPalabra = palabra;
        }
    }
    return scanPalabra;

  }

  console.assert(palabraMasLarga("Erase una vez que sera") === "Erase Una Vez Que Sera");



//Mayuscula 

  
function primeraMayuscula(str){
  let palabras = str.split(" ");
  let resultado = "";
  for (let palabra of palabras){
    resultado += palabra[0].toUpperCase() + palabra.substr(1) + " ";
  }
  return resultado;

}

console.assert(primeraMayuscula("En un lugar de la Mancha") === "En Un Lugar De La Mancha");

