const isValidParenthesis = (str) => {
  const stack = [];

  const brackets = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  for (let char of str) {
    if (brackets[char]) {
      stack.push(char);
    } else {
      let top = stack.pop();
      if (!top || brackets[top] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(isValidParenthesis("{}[]"));
console.log(isValidParenthesis("{}(])["));
