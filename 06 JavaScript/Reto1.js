//Reto 1 Programa para calcular la edad de un michi 0-2 años gatunos = 24 años humanos 1 año gatuno extra = 4 años humanos extra.
function calcularEdadMichi(edadGatuna) {
    let edadHumana = 0;
  
    if (edadGatuna === 1) {
      edadHumana = 15;
    } else if (edadGatuna === 2) {
      edadHumana = 24;
    } else if (edadGatuna > 2) {
      edadHumana = 24 + (edadGatuna - 2) * 4;
    }
  
    return edadHumana;
  }
  
  const edadMichi = calcularEdadMichi(3);
  console.log(edadMichi); 

  // Reto 2: Verificar si un número es par o impar

//Funcion general

function verificarParImpar(numero) {
    if (numero % 2 === 0) {
      return "Es un número par";
    } else {
      return "Es un número impar";
    }
  }
  
  //Funcion flecha
  
  const verificarParImparFlecha = (numero) => (numero % 2 === 0) ? "Es un número par" : "Es un número impar";
  
  console.log(verificarParImpar(27)); 
  console.log(verificarParImparFlecha(18));

  // Reto 3 Crear un programa para calcular la edad de una persona y que determine si es mayor o menor de edad, utilizando funcion general y funcion flecha. const today = new Date();
  
