class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    }

    let temp = this.last;
    temp.next = newNode;
    this.last = newNode;
    this.length++;
    return this;
  }

  dequeue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      return undefined;
    }

    if (this.length === 1) {
      this.first = null;
      this.last = null;
    }

    let temp = this.first.next;
    this.first = temp;
    this.length--;
  }
}

const myQueue = new Queue("0");
myQueue.enqueue("1");
myQueue.enqueue("2");
myQueue.dequeue();
console.log(myQueue);
