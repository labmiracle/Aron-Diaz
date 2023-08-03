import Stack from "./Stack";

export class decimalNumber extends Stack {
  constructor() {
    super();
  }

  decimalToBinary(decimalNumber: number): void {
    const stack = new Stack();
    let result = "";

    while (decimalNumber > 0) {
      const remainder = decimalNumber % 2;
      stack.push(remainder);
      decimalNumber = Math.floor(decimalNumber / 2);
    }

    while (stack.size() > 0) {
      result += stack.pop();
    }

    console.log(result);
  }
}

const decimalConverter = new decimalNumber();
decimalConverter.decimalToBinary(7);
