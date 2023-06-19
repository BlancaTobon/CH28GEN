//Obtener elementos /Nodos
const inputNombre = document.getElementById('nombre-input');

const parrafo = document.getElementById('texto')

//Obtiene la primer coincidencia
const parrafo2 = document.querySelector('#texto');

//Obtiene todos los nodos que coinciden
const parrafos = document.querySelectorAll('.texto');

//Obtener atributos de nodos
//console.log(inputNombre.getAttribute('id'));
//console.log(inputNombre.id);

//console.log(parrafo);

//Manipulación del DOM

//inputNombre.value = 'Hola soy un input';
//document.getElementById('texto').innerHTML.value = 'Modificamos el texto'

//Escuchando un evento
//Modificando el valor de un nodo
inputNombre.addEventListener('input', e =>{
    parrafo.textContent = e.target.value;
});

inputNombre.addEventListener('input', e => parrafo.textContent = e.target.value);
//function actulizarTexto(e) {
   // parrafo.textContent = e.target.value;
//}

//Creamos elemento 
const divParrafo = document.getElementById('section1');

const p = document.createElement('p');
p.textContent = 'Agregado desde JS';

//Insertamos elemento
divParrafo.appendChild(p);








