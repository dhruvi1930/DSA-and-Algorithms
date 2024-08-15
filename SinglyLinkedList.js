class Node {
  constructor(value) {
    this.value = value; // corrected to use 'value' property
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // added 'else' to prevent adding 'newNode' twice
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }

    let temp = this.head;
    let prev = this.head;

    if (this.length === 1) {
      // added check for single-element list
      this.head = null;
      this.tail = null;
      this.length--;
      return temp;
    }

    while (temp.next) {
      prev = temp;
      temp = temp.next;
    }

    this.tail = prev;
    this.tail.next = null;
    this.length--;

    return temp; // returning the popped node
  }

  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    const temp = this.head;
    this.head = this.head.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return temp;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    return this.tail;
  }

  get(index) {
    let counter = 1;
    let temp = this.head;

    while (temp) {
      if (index === counter) {
        return temp;
      }
      temp = temp.next;
      counter++;
    }
    return null;
  }

  set(index, newValue) {
    let counter = 1;
    let temp = this.head;

    while (temp) {
      if (index === counter) {
        temp.value = newValue;
      }
      temp = temp.next;
      counter++;
    }
    console.log("Set index 2 to value God :", myLinkedList);
  }

  insertNode(index, value) {
    if (index < 1 || index > this.length + 1) {
      console.log("Index out of bounds");
      return;
    }

    const newNode = new Node(value);

    if (index === 1) {
      newNode.next = this.head;
      this.head = newNode;
      if (this.length === 0) {
        this.tail = newNode;
      }
    } else {
      let counter = 1;
      let prev = null;
      let temp = this.head;

      while (counter < index) {
        prev = temp;
        temp = temp.next;
        counter++;
      }

      newNode.next = temp;
      prev.next = newNode;

      if (index === this.length + 1) {
        this.tail = newNode;
      }
    }

    this.length++;
    console.log(`Inserted node at index ${index} with value ${value}:`, this);
  }

  getSize() {
    return this.length;
  }

  clearLinkedList() {
    this.head = null;
    this.tail = null;
    this.length = 0;

    console.log("Cleared LinkedList", this);
  }
}

const myLinkedList = new LinkedList("Dhruvi");
myLinkedList.push("Parth");
myLinkedList.push("Jay");
myLinkedList.push("Dev");
myLinkedList.pop();
myLinkedList.unshift("Prachi");
myLinkedList.shift();

console.log("Full LinkedList:", myLinkedList);
console.log("First Node:", myLinkedList.getFirst());
console.log("Last Node:", myLinkedList.getLast());
console.log("Get index 2 node:", myLinkedList.get(2));

myLinkedList.set(2, "God");
myLinkedList.insertNode(2, "Prachi");

console.log("Length of the LinkedList", myLinkedList.getSize());
myLinkedList.clearLinkedList();
