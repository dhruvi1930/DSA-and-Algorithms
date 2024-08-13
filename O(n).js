const fruits = ["apple", "orange", "banana", "grape"];

const findFruit = (fruits, findName) => {
  // O(n)
  for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === findName) {
      console.log(`Found: ${findName}`);
    }
  }

  // O(n)
  for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === findName) {
      console.log(`Found: ${findName}`);
    }
  }

  // O(n+n)
  // O(2n)
  // O(n) ----> Constant can be ignored
};

findFruit(fruits, "banana");
