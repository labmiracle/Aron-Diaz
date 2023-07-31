class Queue {
  items: any[];
  constructor() {
    this.items = [];
  }

  enqueue(element: any) {
    this.items.push(element);
  }

  dequeue() {
    if (!this.isEmpty()) {
      return this.items.shift();
    }
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const queue = new Queue();

console.log(queue.isEmpty());

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.size());

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue);
console.log(queue.size());
