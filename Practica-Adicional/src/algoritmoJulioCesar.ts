function code(message: string, displacement: number) {
  const letters = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz";
  let result = "";

  for (let i = 0; i < message.length; i++) {
    const letter = message[i];
    const index = letters.indexOf(letter);

    if (index !== -1) {
      let newIndex = index + displacement;
      if (newIndex >= letters.length) newIndex -= letters.length;
      if (newIndex < 0) newIndex += letters.length;
      result += letters[newIndex];
    } else {
      result += letter;
    }
  }
  return result;
}

function decode(message: string, displacement: number) {
  return code(message, -displacement);
}

const message = "Hola, que tal?";
const displacement = 6;

const codedMessage = code(message, displacement);
console.log(`mensaje codificado:  ${codedMessage}`);

const decodedMessage = decode(codedMessage, displacement);
console.log(`mensaje decodificado: ${decodedMessage} `);
