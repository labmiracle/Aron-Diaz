//FizzBuzz

const fizzBuzz = (numero) => {
  if (numero === 0) {
    return numero;
  }

  if (numero % 3 === 0 && numero % 5 === 0) {
    return "FizzBuzz";
  } else if (numero % 3 === 0) {
    return "Fizz";
  } else if (numero % 5 === 0) {
    return "Buzz";
  } else {
    return numero;
  }
};

module.exports = { fizzBuzz };
