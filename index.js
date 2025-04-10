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

const getSameCaseLetterA = function getSameCaseLetterA(letter) {
  const codePoint = letter.codePointAt(0);
  if (codePoint >= 97 && codePoint <= 122) {
    return 'a';
  }
  if (codePoint >= 65 && codePoint <= 90) {
    return 'A';
  }
  return 'not letter';
};

const encryptLetter = function encryptLetter(eachLetter, shiftFactor) {
  const baseLetter = getSameCaseLetterA(eachLetter);
  if (baseLetter === 'not letter') {
    return eachLetter;
  }
  const baseCodePoint = baseLetter.codePointAt(0);
  const alphaIdx = eachLetter.codePointAt(0) - baseCodePoint;
  const cipherAlphaIdx = (alphaIdx + shiftFactor) % 26;
  const cipherLetter = String.fromCodePoint(baseCodePoint + cipherAlphaIdx);
  return cipherLetter;
};

const caesarCipher = function caesarCipher(plainText, shiftFactor) {
  const cipherText = Array.from(plainText, (eachLetter) => (
    encryptLetter(eachLetter, shiftFactor)
  ));

  return cipherText.join('');
};

export {
  calculator, capitalize, reverseString, caesarCipher,
};
