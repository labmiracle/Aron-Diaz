class Stack {
  items: any[];
  constructor() {
    this.items = [];
  }

  push(element: any) {
    this.items.push(element);
  }
  
  pop() {
    if (this.isEmpty()) {
      return "The stack is empty";
    }
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

const myStack = new Stack();
console.log(myStack.isEmpty());

myStack.push(10);
myStack.push(20);
myStack.push(30);
console.log(myStack.size());
console.log(myStack.pop());
console.log(myStack.pop());

console.log(myStack.size());
console.log(myStack.isEmpty());
