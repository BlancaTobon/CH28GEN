/* Arrays
pemimitir almacenar cualquier elemento, objeto ej JS Recursividad: capacidad de una función, elemento, ciclo para llamarse a si misma dentro de su propio cuerpo y resolver un problema de manera repetitiva.
*/

//Factorial teniendo un conjunto de números (1-5) se multiplican cada uno hasta llegar al npumero final.
//5!= 1* 2* 3* 4* 5 = 120

function Factorial (n){
    if(n === 0){
        return 1;
    }
    return n * Factorial(n - 1);
}
console.log(Factorial(5));

/* Creando Arrays 
sintaxis
cons array_name = [item1, item2, item3...];

*/

const carros = [
    "Nissan", 
    "Kia", 
    "Jeep", 
    "Mazda", 
    "Volkswagen", 
    "Nissan", 
    "Kia", 
    "Jeep", 
    "Mazda", 
    "Volkswagen", 
    "Nissan", 
    "Kia", 
    "Jeep", 
    "Mazda", 
    "Volkswagen"
];
console.log(carros);
//Array vacío
const computadoras = [];
console.log(computadoras);
//Agregar elementos a mi array vacío
computadoras[0] = "Del";
computadoras[1] = "Hp";
computadoras[2] = "Mac";
computadoras[4] = "Toshiba";
console.log(computadoras);

//Otra manera de crear arrays

const celulares = new Array("samsung", "apple", "motorola", "Huawei", "LG");
console.log(celulares);

//Longitud de un array
console.log(celulares.length);
//Guardandolo en una variable
let longitudCelulares = celulares.length;
console.log(longitudCelulares);

//Acceso a los elementos del Array. Para acceder hacemos referencia al npumero de índicie de array.

console.log(celulares[0]);
console.log(celulares[2]);
console.log(celulares[5]);

//Acceder al último elemento del array
let ultimoElementoCelulares = celulares[celulares.length-1];
console.log(`El último elemento de mi Array celulares es ${ultimoElementoCelulares}`);

//Modificar un elemento del array mediante indices
const listaDeCompras = ["jamon", "Queso", "Yoguth", "Tortillinas", "pan"];
console.log(listaDeCompras);
//Cambiar el yogurt por yogurt friego oikos
listaDeCompras[2] = "Yogurt griego oikos";
console.log(listaDeCompras);

//Arreglos multidimensionales o arreglos de arreglos
console.log("*Arreglos multidimensionales o arreglos de arreglos*");

const platillos = ["tacos de pastor", "arepas", "sushi", "pizza"];
const paises = ["Japón", "Venezuela", "Italia", "México"];

const menu = [platillos, paises];
//Traer información de los dos arrays
console.log(menu[1][3]);

//Output: En Japón se come sushi
console.log(`En ${menu[1][0]} se come ${menu[0][2]}`);

/* Métodos de array
---Métodos de cola (queue). Implican agregar elementos al final del array y eliminar elementos del principio del array. Sigue el principio FIFO (first - in - first out).
* push
* shift
* unshift

---Métodos de pila (stack) implican agregar elemenos al final del array y eliminar elementos del final de array.principio LIFO (Last - in - first - out).
 * push
 * pop
 */

console.log("*Métodos de Arrays");
//Array de la CH28
const CH28 = ["Mari", "Andrea", "Pessy", "Ana Fer", "Ingrid", "Blanca", "Pau", "Nancy","Pessy"];
console.log(CH28);

//---indexOf() retorna el primer indice en ele que se puede encontrat un elemento dado en el array, o retorno -1 si el elemento no está presente.
console.log(CH28.indexOf("Pessy"));//output: 2
console.log(CH28.indexOf("Yareri"));//output: -1
console.log(CH28.indexOf("Pessy", 3));//output: 8
console.log(CH28.indexOf("Andrea", 2));//output: -1

//----pop() Eliminar el útimo elementos de un array
let popCH28 = CH28.pop();
console.log(CH28);

//----push() Agrega un elemento al final de un array
let pushCH28 = CH28.push("Juank");
console.log(CH28);

//----splice() Elimina uno  o varios elementos a partir de su posición
let spliceCH28 = CH28.splice(0,1); //A partir del índice 0 voy a eliminar un elemento
console.log(CH28);

//---*replacedCh28 = reemplaza  uno o varios elementos a partir de su posición.
let replacedCh28 = CH28.splice(8,1, "Yare");
console.log(CH28);

//---unshift() añadir un elemento al principio de un array
let unshiftCH28 = CH28.unshift("Osvaldo");
console.log(CH28);

//---shift() elimina a un elemento del principio del array
let shiftCH28 = CH28.shift();
console.log(CH28);

//----slice()  elimina elementos anteriores a la posición definicda sin modificar el array original
let sliceCH28 = CH28.slice(7);
console.log(CH28);
console.log(sliceCH28);

let agregandoMagalí = CH28.unshift("Magali");
console.log(CH28);
//---- forEach Recorre el array, itera sobre cada elemento y ejecuta una función de devolución para cada elemento.

CH28.forEach(elemento => console.log(elemento));

//---- sort Ordemanmiento de arrays de A a Z
let sortCH28 = CH28.sort();
console.log(CH28);

//---- reverse() cambia el sentido del ordem¿namiento
let reverseCH28 = CH28.reverse();
console.log(CH28);
let reverseCH28b = CH28.reverse();
console.log(CH28);

/*  -----------Objetos en programación

Un automovil es un objeto ya que tiene propiedades y métodos específicos ...

----Propiedades del automovil
nombre
modelo
número de llantas
peso
color
etc....

---- Métodos
frenar
avanzar
arrancar
etc....

A pesar de tener propiedades similares, los valores de dichas propiedades son diferentes entre cada uno.
Tambien los métodos son similares, se van a ejecutar en momentos diferentes.
Todos los objetos poseen propiedades y metodos con valores diferentes

sintaxis
    const object = {key1(property1):value1, ker2(property2): value2, key3(property3): value3, ...};
    */
//Objeto de JS
const automovil = {
    marca: "Kia",
    clase: "Forte",
    peso: 900,
    color: "Gris óxido",
    modelo: 2022,
    llantas: 4,
    puertas: 4
};
console.log(automovil);

//Puedo acceder a las propiedades y valores d un objeto.

let marcaAutomovil = automovil.marca;
console.log(marcaAutomovil);

console.log(automovil.modelo);

