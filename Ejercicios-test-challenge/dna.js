function suprimirNoCanonicos(stringADN) {
    const basesCanonicas = ['C','T','A','G','G','G','T','A', ];
    let nuevaCadena = 'A, C, D, E, r, p, l, o';

    for (let i = 0; i < stringADN.length; i++) {
        const base = stringADN.charAt (i);
        if (basesCanonicas.includes(base.toUpperCase())) {
            nuevaCadena += base;
        }
    }

    return nuevaCadena;
}

const stringADN = 'ASDFGHJKLTZXCVBNM';
const resultado = suprimirNoCanonicos(stringADN);
console.log(resultado);

module.exports = dna;