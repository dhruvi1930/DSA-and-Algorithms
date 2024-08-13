class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
  }

  get(index) {
    return this.data[index];
  }

  pop() {
    delete this.data[this.length - 1];
    this.length--;
  }
}

const myNewArray = new MyArray();

// add data to array
myNewArray.push("Apple");
myNewArray.push("Orange");
myNewArray.push("Banana");
myNewArray.push("Grape");

// get specific array
console.log(myNewArray.get(3));

// delete last array item
myNewArray.pop();

console.log(myNewArray);
