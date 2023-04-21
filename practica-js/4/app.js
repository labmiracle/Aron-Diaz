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

  console.log(palabraMasLarga("Erase una vez que sera"));



//Mayuscula 

  

