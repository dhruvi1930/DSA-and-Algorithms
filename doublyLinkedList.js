class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor(value) {
    let newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }

    let temp = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      temp.prev = null;
    }

    this.length--;
    return temp;
  }

  unshift(value) {
    let newNode = new Node(value);
    let temp = this.head;

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    this.head.prev = newNode;
    this.head = newNode;
    this.head.next = temp;
    this.length++;

    console.log(`Unshift for value ${value}`, this);
  }

  shift() {
    let temp = this.head.next;

    temp.prev = null;
    this.head = temp;
    this.length--;
    console.log(`Shift head `, this);
  }
}

const myLinkedList = new LinkedList("Dhruvi");
myLinkedList.push("Parth");
myLinkedList.push("Dev");
console.log("Full LinkedList:", myLinkedList);
console.log("Popped Node:", myLinkedList.pop());
console.log("After pop method:", myLinkedList);
myLinkedList.unshift("Jay");
myLinkedList.shift();
