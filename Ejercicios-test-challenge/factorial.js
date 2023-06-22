function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    
    return n * factorial(n - 1);
  }
  
  const numero = 5;
  const resultado = factorial(numero);
  console.log(`El factorial de ${numero} es: ${resultado}`);

module.exports = factorial;