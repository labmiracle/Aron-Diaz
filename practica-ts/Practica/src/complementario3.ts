//Genero los numeros de cartas aleatorios
function obtenerNumero(){
    let numeroCarta = Math.floor(Math.random()* 12)+ 1
    return numeroCarta;
}
//Genero los palos de las cartas de manera aleatoria
function obtenerPalo(){
    let palos = ["Palo", "Basto", "Copa", "Oro"]
    return palos [Math.floor(Math.random()*4)]
}

//Asigno esas funciones a variables para cada jugador
let numero1: number = obtenerNumero()
let palo1: string = obtenerPalo()
let numero2: number= obtenerNumero()
let palo2:string = obtenerPalo()

//Llamo las funciones mediante las variables, agrupo y comparo resultados
do{
    numero2 = obtenerNumero()
    palo2 = obtenerPalo()

} while(numero2 === numero1 && palo2 === palo1);

console.log("Usuario 1: ", numero1, " de ", palo1);
console.log("Usuario 2: ", numero2, " de ", palo2);
if(numero1 > numero2){
    console.log("Ganó usuario 1");
}
else if(numero1 < numero2){
    console.log("Ganó usuario 2");
}
else{
    console.log("Empataron");
}