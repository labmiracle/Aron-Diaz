class Nodo {
  public data: any;
  public next: Nodo | null;

  constructor(data: any, next: Nodo | null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  public head: Nodo | null;
  public size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  public add(data: any) {
    const newNode = new Nodo(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  removeData(data: any) {
    let current = this.head;
    let prev = null;
    while (current != null) {
      if (current.data === data) {
        if (!prev) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        this.size--;
        return current.data;
      }
      prev = current;
      current = current.next;
    }
    return null;
  }

  getSize() {
    return this.size;
  }

  findData(data: any) {
    let current = this.head;
    while (current != null) {
      if (current.data === data) {
        return current.data;
      }
      current = current.next;
    }
    return null;
  }

  invert() {
    let current = this.head;
    let prev = null;
    let next = null;
    while (current != null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }

  deleteDups() {
    let current = this.head;
    let prev = null;
    let hash: Record<string, boolean> = {};
    while (current != null) {
      if (hash[current.data]) {
        prev.next = current.next;
      } else {
        hash[current.data] = true;
        prev = current;
      }
      current = current.next;
    }
  }
}

const linkedList = new LinkedList();

linkedList.add(12);
linkedList.add(44);
linkedList.add(55);
linkedList.add(55);
linkedList.removeData(12);
console.log(linkedList.getSize());
console.log(linkedList.findData(44));
console.log(linkedList.invert());
console.log(linkedList.deleteDups());
console.log(linkedList);
