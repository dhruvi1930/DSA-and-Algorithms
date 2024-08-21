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

  minStack() {
    if (this.length === 0) {
      return undefined;
    }

    let current = this.first;
    let min = current.value;

    while (current.next) {
      current = current.next;
      if (min > current.value) {
        min = current.value;
      }
    }
    return min;
  }
}

const myStack = new Stack(100);
myStack.push(40);
myStack.push(22);
myStack.push(89);
myStack.pop();
console.log(myStack);
console.log("Min value of stack", myStack.minStack());
