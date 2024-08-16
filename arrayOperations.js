// Reverse String
const reverseString = (str) => str.split("").reverse().join("");
console.log("Reverse String of Hello: ", reverseString("Hello"));

// Palindromes
const palindromeString = (str) => str.split("").reverse().join("") === str;
console.log("Palindrome String: ", palindromeString("mom"));
console.log("Palindrome String: ", palindromeString("hair"));

// Int Reverse
const intReverse = (number) => {
  const reversed = number.toString().split("").reverse().join("");
  return parseInt(reversed);
};
console.log("Integer Reverse of 1234: ", intReverse(1234));

console.log("---------------------------------------------");
// Sentence Capitalization
const capitalize = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};
console.log("Sentence Capitalization: ", capitalize("hello World"));
console.log("Sentence Capitalization: ", capitalize("DHRUvI Lad"));

console.log("---------------------------------------------");
// FizzBuzz Algorithm
const FizzBuzz = (number) => {
  console.log("-:- FizzBuzz Game -:-");
  for (let index = 1; index <= number; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
      console.log("FizzBuzz");
    } else if (index % 3 === 0) {
      console.log("Fizz");
    } else if (index % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(index);
    }
  }
};
FizzBuzz(30);
console.log("---------------------------------------------");

// MaxProfit
const maxProfit = (prices) => {
  let minProfit = prices[0];
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];

    minProfit = Math.min(minProfit, currentPrice);
    const potentialPrice = currentPrice - minProfit;

    maxProfit = Math.max(maxProfit, potentialPrice);
  }
  return maxProfit;
};
console.log("Max profit of this [7,1,5,3,6,4]:", maxProfit([7, 1, 5, 3, 6, 4]));

// Array Chunk
const arrayChunk = (array, number) => {
  const chunked = [];
  let index = 0;
  while (index < array.length) {
    const chunk = array.slice(index, index + number);
    chunked.push(chunk);
    index += number;
  }
  return chunked;
};

console.log("Array Chunk:", arrayChunk([1, 5, 2, 6, 2, 6, 8, 1, 5, 3], 3));

// Two sum
const twoSum = (array, digit) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      if (array[i] + array[j] === digit) {
        return `[Digit,Index]:[[${array[i]},${i}],[${array[j]},${j}]]`;
      }
    }
  }
  return [];
};
console.log("---------------------------------------------");
console.log(
  "Two Sum of array [2,7,11,15] and digit is 9:",
  twoSum([2, 7, 11, 15], 9)
);

const option2TwoSum = (array, digit) => {
  let map = new Map();
  for (let i = 0; i < array.length; i++) {
    console.log(map.get(digit - array[i]));
    if (map.get(digit - array[i]) !== undefined) {
      return [i, map.get(digit - array[i])];
    }
    map.set(array[i], i);
  }
  return [];
};

console.log("---------------------------------------------");
console.log(
  "Two Sum of array [2,7,11,15] and digit is 9:",
  option2TwoSum([2, 7, 11, 15], 9)
);
