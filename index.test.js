import { describe, test, expect } from '@jest/globals';
import {
  calculator, capitalize, reverseString, caesarCipher, analyzeArray,
} from './index.js';

describe('capitalize()', () => {
  test('all lowercase test', () => {
    expect(capitalize('hello world')).toBe('Hello world');
    expect(capitalize('goodbye world')).toBe('Goodbye world');
  });

  test('only capitalize first letter in mixed-case strings', () => {
    expect(capitalize('Hello World')).toBe('Hello World');
    expect(capitalize('Goodbye World')).toBe('Goodbye World');
  });
});

describe('reverseString()', () => {
  test('testing words', () => {
    expect(reverseString('Apple')).toBe('elppA');
    expect(reverseString('Orange')).toBe('egnarO');
  });

  test('testing sentences', () => {
    expect(reverseString('This is a cat.')).toBe('.tac a si sihT');
    expect(reverseString('I love chocolates!')).toBe('!setalocohc evol I');
  });
});

describe('calculator util', () => {
  test('testing addition', () => {
    expect(calculator.add(1, 1)).toBe(1 + 1);
    expect(calculator.add(2, 8)).toBe(2 + 8);
    expect(calculator.add(0.1, 0.2)).toBe(0.1 + 0.2);
  });

  test('testing subtraction', () => {
    expect(calculator.sub(2, 1)).toBe(2 - 1);
    expect(calculator.sub(5, 2)).toBe(5 - 2);
  });

  test('testing subtraction that results in negatives', () => {
    expect(calculator.sub(1, 2)).toBe(1 - 2);
    expect(calculator.sub(2, 5)).toBe(2 - 5);
  });

  test('testing multiplication', () => {
    expect(calculator.mul(2, 3)).toBe(2 * 3);
    expect(calculator.mul(5, 2)).toBe(5 * 2);
  });

  test('test division', () => {
    expect(calculator.div(3, 2)).toBe(3 / 2);
    expect(calculator.div(9, 3)).toBe(9 / 3);
  });

  test('test division', () => {
    expect(calculator.div(3, 2)).toBe(3 / 2);
    expect(calculator.div(9, 3)).toBe(9 / 3);
  });
});

describe('caesar cipher', () => {
  test('lowercase test', () => {
    expect(caesarCipher('abc', 1)).toBe('bcd');
    expect(caesarCipher('xyz', 3)).toBe('abc');
    expect(caesarCipher('abc', 5)).toBe('fgh');
  });

  test('uppercase test', () => {
    expect(caesarCipher('ABC', 1)).toBe('BCD');
    expect(caesarCipher('XYZ', 3)).toBe('ABC');
    expect(caesarCipher('ABC', 5)).toBe('FGH');
  });

  test('mixed-case test', () => {
    expect(caesarCipher('aBc', 1)).toBe('bCd');
    expect(caesarCipher('xYz', 3)).toBe('aBc');
    expect(caesarCipher('Abc', 5)).toBe('Fgh');
  });

  test('test punctuation', () => {
    expect(caesarCipher('You too, Brutus?', 5)).toBe('Dtz ytt, Gwzyzx?');
    expect(caesarCipher('My favorite number is 123!', 8)).toBe(
      'Ug nidwzqbm vcujmz qa 123!',
    );
  });

  describe('analyzeArray()', () => {
    test('normal path testing', () => {
      expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual(
        {
          average: 4,
          min: 1,
          max: 8,
          length: 6,
        },
      );
      expect(analyzeArray([7, 6, 5, 8, 1, 0])).toEqual(
        {
          average: 4.5,
          min: 0,
          max: 8,
          length: 6,
        },
      );
    });

    test('imprecise floating-point member test', () => {
      expect(analyzeArray([0, 0, 1])).toEqual(
        {
          average: 0.33,
          min: 0,
          max: 1,
          length: 3,
        },
      );
    });
  });
});
