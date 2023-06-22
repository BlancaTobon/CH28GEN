const factorial = require('..factorial.js');

test('Calcula el factorial de 0', () => {
  expect(factorial(5)).toBe(120);
});

test('Calcula el factorial de 1', () => {
  expect(factorial(6)).toBe(720);
});

test('Calcula el factorial de 7', () => {
  expect(factorial(8)).toBe(40320);
});

test('Calcula el factorial de 9', () => {
  expect(factorial(13)).toBe(6227020800);
});