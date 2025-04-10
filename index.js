const capitalize = function capitalize(inputStr) {
  const capitalizedLetter = inputStr[0].toUpperCase();
  const theRestOfString = inputStr.slice(1);

  return capitalizedLetter + theRestOfString;
};

const reverseString = function reverseString(inputStr) {
  const inputStrArr = Array.from(inputStr);
  inputStrArr.reverse();
  return inputStrArr.join('');
};

const calculator = {
  add(num1, num2) {
    return (num1 + num2);
  },

  sub(num1, num2) {
    return (num1 - num2);
  },

  multiply(num1, num2) {
    return (num1 * num2);
  },

  divide(num1, num2) {
    return (num1 / num2);
  },
};

export { calculator, capitalize, reverseString };
