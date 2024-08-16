class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    let newNode = new Node(value);
    this.first = newNode;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.first = newNode;
    }

    newNode.next = this.first;
    this.first = newNode;
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }
    let temp = this.first.next;
    this.first = temp;
    this.length--;
    return temp;
  }
}

const myStack = new Stack("Dhruvi");
myStack.push("Parth");
myStack.push("Dev");
myStack.pop();
console.log(myStack);
