// tipos de Datos y Variables en JS
/*

Declaración de variables

var: utilizamos esta palabra reservada para variables globales - que se pueden usar a lo largo de todo
nuestro código

let: utilizamos esta alabra reservada para variables locales - se pueden utilizar en un bloque
específico de código

const: esta palabra reservada la utilizamos para datos o información que no pueden cambiar su valor

var nombreDeVariable = x;


*/
// Tipos de Dto npumerico (Number)

/*
Los tipos de dato numérico se expresan sin comillas
Se pueden trabajar enteros, decimales, positivos, negativos

*/


var edad = 26;
var altura=1.55;
var añoDeNacimiento=1996;
var díaDeLaSemana = 5;

var edadTexto = "22";

var nuevaEdad = Number (edadTexto);


//Tipo de dato cadena de texto (string)

/* Los tipos de datos string o cademas de tecto utilizan comillas dobles o sencillas para asignar un valor

Son un tipo de dato sumamente flexible, sin enbargo hay que utilizarlos con cuidado.
*/

var nombre = "Blanca";
var ciudad = "CDMX";
var colorFav = "Negro";

var edadString = String(edad);


//Tipo de Dato Booleano (boolean)
/*
Los tipos de datos booleanos solo arrojan 2 resultados 
true 
false
*/
var esRegio = false;
var escucharMusica = true;
var condicion = Boolean (10 < 5); //False

var nuevaVariable = null;
// Variables de Lunita

//number
var edad = 8;
var alturaEnCm =60;
var peso =25;
var añoOrigen = 1899;
var hermanos = 4;
var novio = 0;


//string
var nombre = "Luna";
var apellido = "Tobón";
var color = "negro con amarillo";
var personalidad = "protectora";
var jugueteFav = "limones";
var postreFav = "Gelatina";
var verduraFav = "Zanahoria";
var amigoFav = "Gato";

//Boolean
var muerde = false;
var juega = true;
var comeNiños = false;
var comeVerduras = true;
var obedece = true;
var esInteligente = true;
var esFeliz = true;

/////////////////////////////////
// Array y Objetos

/*

Array, también conocido como Arreglo, es un tipo
de dato que pertenece a JS, en el cual
almacena una coleccion de elementos de manera
ordenada

Primer elemento = indice 0.
Hasta n cantidad de indices.


*/

var ejemploDeArray = ["Saludos", "Que onda", "Que hay", "Buenos días"];
var otroArray = [34, 254, 117, 6, 321]

/*
Objetos, los encontramos como Object
Son tipos de dato similares a los Arrays, sin embargo
NO SON LO MISMO y su estructura y semántica indican al
motor de JS del navegador como trabajar con estos 
elementos

ker = llave
value = valor
no tienen un orden
*/

var ejemploDeObjeto = {
nombre: "Blanca",
apellido: "Tobón",
edad: 26,
esEstudiante: true,
}

/*
*/

