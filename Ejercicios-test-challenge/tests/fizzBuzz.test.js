const fizzBuzz = require('../fizzBuzz.js');

test('Muestra fizzBuzz si se el número es divisible en 3 y 5', () =>{
    expect(fizzBuzz.fizzBuzz(15)).toBe(fizzBuzz);
});

test ('Muestra fizz si el número es divisible en 3', () => {
    expect(fizzBuzz.fizzBuzz(9)).toBe(fizz);
});

test ('Muestra Buzz si el número es divisible en 5', () => {
    expect(fizzBuzz.fizzBuzz(25)).toBe(Buzz);
});

test ('Muestra un número si la condición no se cumple', () => {
    expect(fizzBuzz.fizzBuzz(7)).toBe(7);
});
