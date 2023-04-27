
let aleatoryNumber = Math.floor(Math.random() * 10 + 1);
let intent = 0;
let game = false;
let difficulty = 0;

let select_dificult = prompt("Selecciona la dificultad: Fácil 1, Medio 2, Difícil, 3");

if (select_dificult == 1 || select_dificult == 2 ||select_dificult == 3){
    
}
else{
    alert ("Ingrese un número valido")
}



if (select_dificult == 1){
    difficulty = 1;
}

if (select_dificult == 2){
    difficulty = 2;
}


if (select_dificult == 3){
    difficulty = 3
}


if (difficulty == 1) {

    while (game == false){
        let userNumber = prompt("Introduce un numero del 1 al 10.");
        intent++;
        if (userNumber == aleatoryNumber){
            alert(`Ganaste!! Utilizaste ${intent}  intentos.`);
         game = true;
        
        }else if (userNumber > aleatoryNumber){
            alert("El numero es menor")
        }else if (userNumber < aleatoryNumber){
            alert("El numero es mayor")
        }
        else {
            alert(`Intentalo de nuevo, llevas ${intent} intentos.`)
        }
    }
}


if (difficulty == 2) {

    while (game == false && intent < 5){
        let userNumber = prompt("Introduce un numero del 1 al 10.");
        intent++;
        if (userNumber == aleatoryNumber){
            alert(`Ganaste!! Utilizaste ${intent} intentos.`);
         game = true;
        }else if (userNumber > aleatoryNumber){
            alert("El numero es menor")
        }else if (userNumber < aleatoryNumber){
            alert("El numero es mayor")
        }else {
            alert(`Intentalo de nuevo, llevas ${intent} intentos,`)
        }
    if (intent == 5){
        alert("Sin intentos");
    }
    }2
}



if (difficulty == 3) {
    while (game == false && intent < 3){
        let userNumber = prompt("Introduce un numero del 1 al 10.");
        intent++;
        if (userNumber == aleatoryNumber){
            alert(`Ganaste!! Utilizaste ${intent} intentos.`);
         game = true;
        }else if (userNumber > aleatoryNumber){
            alert("El numero es menor")
        }else if (userNumber < aleatoryNumber){
            alert("El numero es mayor")
        }
        else {
            alert(`Intentalo de nuevo, llevas ${intent} intentos,`)
        }
    if (intent == 3){
        alert("Sin intentos");
    }
    }
}

