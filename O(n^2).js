const array = [1, 2, 3, 4, 5];

const createPair = (arr) => {
  // O(n)
  for (let i = 0; i < arr.length; i++) {
    // O(n)
    for (let j = i; j < arr.length; j++) {
      console.log(`[${arr[i]},${arr[j]}]`);
    }
  }

  // O(n * n)
  // O(n^2)
};

createPair(array);
