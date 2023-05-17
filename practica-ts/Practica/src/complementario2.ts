//Genera numero aleatorio de 4 digitos de 0 al 6
function aleatoryNumber(): string {
	let number = '';
	for (let i = 0; i < 4; i++) {
		let digits = Math.floor(Math.random() * 7).toString();
		number += digits;
	}
	return number;
}

//Ingreso del numero
function userNumber(): string {
	let user = prompt("Ingrese 4 numeros del 0 al 6!");
	while (user === null || user.length !== 4){
		user = prompt("Ingrese 4 numeros");
	}
	return user;
}
//Comprobacion del resultado
function results(aleatoryNumber: string, userNumber:string) {
	let result = "";
	for (let i = 0; i < 4; i++) {
		if (aleatoryNumber[i] === userNumber[i]) {
				result = "X" + result;
		}
		else if (aleatoryNumber.includes(userNumber[i])) {
				result += "-";
		}
	}
	return result;
}

//
let numeroUsuario = userNumber();
let numeroAleatorio = aleatoryNumber();
console.log("Número secreto: ", numeroAleatorio)
console.log("Número ingresado: ", numeroUsuario)
console.log("Resultado: ", results(numeroAleatorio, numeroUsuario));