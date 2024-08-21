const reverseString = (str) => {
  const stack = [];
  for (let char of str) {
    stack.push(char);
  }
  let revString = "";

  while (stack.length > 0) {
    revString += stack.pop();
  }

  return revString;
};

console.log(reverseString("Dhruvi Lad"));
