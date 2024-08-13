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

  shift() {
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }

  delete(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

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

// // delete last array item
// myNewArray.pop();

// // shift data by 1 from front
// myNewArray.shift();

// delete item by index
myNewArray.delete(2);

console.log(myNewArray);
