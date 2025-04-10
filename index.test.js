import { describe, test, expect } from '@jest/globals';
import { calculator, capitalize, reverseString } from './index.js';

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
    expect(calculator.multiply(2, 3)).toBe(2 * 3);
    expect(calculator.multiply(5, 2)).toBe(5 * 2);
  });

  test('test division', () => {
    expect(calculator.divide(3, 2)).toBe(3 / 2);
    expect(calculator.divide(9, 3)).toBe(9 / 3);
  });

  test('test division', () => {
    expect(calculator.divide(3, 2)).toBe(3 / 2);
    expect(calculator.divide(9, 3)).toBe(9 / 3);
  });
});
