export default class Stack {
  protected elements: number[];

  constructor() {
    this.elements = [];
  }

  public push(element: any) {
    this.elements.push(element);
  }

  public pop() {
    return this.elements.pop();
  }

  public size() {
    return this.elements.length;
  }
}

const myStack = new Stack();
console.log(myStack.push(10));
console.log(myStack.push(20));
console.log(myStack.push(30));
console.log(myStack);
console.log(myStack.pop());
console.log(myStack.size());
