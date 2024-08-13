const fruits = ["apple", "orange", "banana", "grape"];

const findFruit = (fruits, findName) => {
  for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === findName) {
      console.log(`Found: ${findName}`);
    }
  }
};

findFruit(fruits, "banana");
