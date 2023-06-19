//const btn_suma = document.getElementById('suma');



function sumar() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    const Resultado = num1 + num2;
    document.getElementById('Resultado').innerText = `Resultado: ${Resultado}`;
}

function restar() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    const Resultado = num1 - num2;
    document.getElementById('Resultado').innerText = `Resultado: ${Resultado}`;
  }

  function multiplicar() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    const Resultado = num1 * num2;
    document.getElementById('Resultado').innerText = `Resultado: ${Resultado}`;
  }

  function dividir() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    const Resultado = num1 / num2;
    document.getElementById('Resultado').innerText = `Resultado: ${Resultado}`;
  }
   
