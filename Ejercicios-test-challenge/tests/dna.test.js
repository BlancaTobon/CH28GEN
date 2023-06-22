const suprimirNoCanonicos = require('../dna.js');

test('Muestra la nueva cadena que se formó', () =>{
    expect(suprimirNoCanonicos()).toBe('cadena');
});

test('Muestra la nueva cadena', () =>{
    expect(suprimirNoCanonicos()).toBe('nueva cadena');
});