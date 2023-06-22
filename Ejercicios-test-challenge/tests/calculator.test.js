const calculator = require('../calculator.js');

test('adds a + b', () => {
    expect(calculator.sum(10,10)).toBe(20);
})

test('substracts a - b', () => {
    expect(calculator.rest(8,3)).toBe(5);
})

test('multiplies a * b', () => {
    expect(calculator.multiply(2,3)).toBe(6);
})

test('divides a / b', () => {
    expect(calculator.divide(8,2)).toBe(4);
})

test('Raises to power a ^ b', () => {
    expect(calculator.power(2,3)).toBe(8);
})