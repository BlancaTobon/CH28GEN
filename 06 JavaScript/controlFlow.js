/*
Expresiones Condicionales
Conjunto de instrucciones que se ejecutan si se cumple una condición
- if
- else
- else if
- swtch

===Declaración If
Sintaxis
    if (condición){
    //Bloque de código que se ejecuta si la condición es verdadera
}

//Ejemplo para validar la mayoría de edad
*/

let edadDaniel = 7;

    if(edadDaniel >= 18){
        console.log("Es mayor de edad")
    }

    /* Declaración else
    Se utiliza como instrucción para ejecutar un bloque de código que se ejecuta si la condicón es falsa.
    Sintaxis

        if(condition){
            //bloque de código que se ejecuta si la condición es verdadera
        } else{
            //bloque de código que se ejecuta si la condición es falsa
        }
    */

   if(edadDaniel >= 18){
    console.log("Es mayor de edad");
   } else {
        console.log("Es menor de edad");
   }

   //Ejemplo de comparación entre dos números con declaración if-else entre dos variables
   let num1 = 845369;
   let num2 = 4587296;

   if(num1 > num2){
   console.log("El número " + num1 + "es mayor que " + num2);
   console.log(`El número ${num1} es mayor que ${num2}`);
       } else{
        console.log(`El número ${num2} es mayor que ${num1}`);
       }

       //Segunda forma
       let resultado;

       if(num1 > num2){
            resultado = ("El múmero" + num1 + " es mayor que " + num2);
       } else{
            resultado = ("El múmero" + num2 + " es mayor que " + num1);
       }
       console.log(resultado);
//Determinar si un número es par o impar
let numerito = 18979;

if(numerito % 2 == 0){
    console.log("El número " + numerito + " es par ");
}else{
    console.log("El número " + numerito + " es impar ");
}

/*
Operador ternario
    Son una forma concisa de escribir una expresión condicional en un lenguaje de programación. Se puede utilizar para realizar la misma tarea de una declaración if-else completa.
sintaxis
(condición) ? expresión_true : expresión_false;

*/
//Determinar si un número es par o impar utilizando Operador Ternario
let numerito2 = 18978;
(numerito2 % 2 === 0) ? console.log("El número " + numerito2 + " Es par") : console.log("El número " + numerito2 + " Es impar");

//Tercera forma
/*
let resultadoOperadorTernario = (numerito % 2 === 0) ? ("El numero " + numerito + " Es par") : ("El numero " + numerito + " Es impar");

console.log(resultadoOperadorTernario) */

/* ====Declaración else-if
Se utiliza para espeficifar una nueva condición si la primera condición es falsa (no se cumple).
sintaxis
    if(condición1){
        //Si se cumple, se ejecuta este bloque
    } else if(condición2){
        //Si se cumple, se ejecuta este bloque
    } else if(condición3){
        //Si se cumple, se ejecuta este bloque
    } else{
        //Se ejecuta sino se cumplio ninguna de las condiciones anteriores
    }
*/

/*Determinar que día de la semana corresponde al número, segun la siguiente tabla:
    - 1 = Lunes 
    - 2 = Martes
    - 3 = Miércoles
    - 4 = Jueves
    - 5 = Viernes
*/
let día = 4;

    if(día === 1){
        console.log("Lunes");
    }else if(día === 2){
        console.log("Martes");
    }else if(día === 3){
        console.log("Miercoles");
    }else if(día === 4){
        console.log("Jueves");
    }else if(día === 5){
            console.log("Viernes");
    }else if(día === 6){
        console.log("Sábado");
    } else if(día === 7){
            console.log("MDomingo");
    }else{
        console.log("Número invalido, inente nuevamente");
    }

    /* Instrucciones: Crea un programa en JS en donde le muestres al usuario si es de mañana, de tarde, de noche o madrugrada.
    Requerimientos:
    - La hora almacenada en una variable (let hora)
    - Establecer el fomato de 24 horas (0 - 23)
    - Tablita para determinar los horarios correspondientes a mañana, tarde, noche y madrugada:
    * 6 - 12 es de mañana (hora >= 6 && <= 12)
    * 13 - 18 es de tarde (hora >= 13 && <= 18)
    * 19 - 23 es de noche (hora >= 19 && <= 23)
    * 0 - 5 es de madrugada (hora >= 0 && <= 5)
    */

       let hora = 7;

if(hora >= 6 && hora <= 12){
    console.log("Es de mañana");
}else if(hora >= 13 && hora <=18){
    console.log("Es de tarde");
}else if(hora >= 19 && hora <= 23){
    console.log("Es de noche, ya que inicia a las 19 horas según la mayoría de la CH28");
}else if(hora >= 0 && hora <= 5){
    console.log("Es de madrugada, aunque nadie da las buenas madrugadas");
}else{
    console.log("Escribe una hora válida entre las 0 y 23");
}

// Sentencias anidadas 
/* Instrucciones: crear un programa para determinar si es mayor de edad o menor de edad. Si es mayor de edad y tiene menos de 65 años, catalogarlo como adulto, si tiene más de 65 años catalogarlo como adulto mayor */
let edadGiovani = 7;

if(edadGiovani >= 18){
    if(edadGiovani < 65){
        console.log("Es un adulto");
    }else{
        console.log("Es un adulto mayor");
}
}else if(edadGiovani >= 12){
    console.log("Es un adolescente");
}else if(edadGiovani >= 3){
    console.log("Es un niño");
}else{
    console.log("Es un bebé");
}

// Verificar la hora del día
/* 
*/
const today = new Date();  //Nuevo objeto con un constructor Date(). Sirve para traer la fecha y hora actual.
//console.log(today);
let hour = today.getHours(); //toLocaleTimeString();
//getHours(); //Método para invocar la hora del día en entero formato 24horas console.log(hour);
console.log(hour);

function greeting() {
    if(hour >= 6 && hour <= 12){
        console.log("Es de mañana");
    }else if(hour >= 13 && hour <=18){
        console.log("Es de tarde");
    }else if(hour >= 19 && hour <= 23){
        console.log("Es de noche, ya que inicia a las 19 horas según la mayoría de la CH28");
    }else if(hour >= 0 && hour <= 5){
        console.log("Es de madrugada, aunque nadie da las buenas madrugadas");
    }else{
        console.log("Escribe una hora válida entre las 0 y 23");
    } 
}
greeting();
//Verificar la hora del día mediante una función pero de otra manera, guardando los bloque de ejecución de una nueva variable 

function saludo(){
    let mensaje = "Error";

    if(hour >= 6 && hour <= 12){
        mensaje = "Buenos días";
    }else if(hour >= 13 && hour <=18){
        mensaje = "Buenas tardes";
    }else if(hour >= 19 && hour <= 23){
        mensaje = "Buenas noches";
    }else{
        mensaje = "Buenas madrugadas";
    } 
    return mensaje;
}
console.log (saludo());

//Crear un programa en JS que evalúe si un día corresponde a día de la semana de (L - V) o fin de semana (S y D).

const checarDía = (díaDeSemana) =>{
    let finDeSemana = díaDeSemana  === "Sábado" || díaDeSemana === "Domingo";

if(finDeSemana){
    return "Es fin de semana";
}else{
    return "Es día de semana (Lunes a Viernes)"
}
};

console.log(checarDía("Sábado"));

//Reto 1 Programa para calcular la edad de un michi 0-2 años gatunos = 24 años humanos 1 año gatuno extra = 4 años humanos extra.
//Reto 2 Crear una función general y función flecha para verificar si un número es par o impar.
// Reto 3 Crear un programa para calcular la edad de una persona y que determine si es mayor o menor de edad, utilizando funcion general y funcion flecha. const today = new Date();

//Reto 4 Crear un programa de cajero automático que permita: 
//consulta de saldo Donar 10 pesitos a beneficencia (¿o no?) Convertir divisas (dolares a pesos: 1 USD = 18MXN)

/* 
============= SWITCH ==========

Permite evaluar la expresion haciendo coincidir el valor de la expresion con una etiqueta case. Si la encuentra, ejecuta la 
declaración. 

Sintaxis 

Switch (expresion){
case etiquetal: 
    declaracion1;
    //break;
case etiqueta2;
    declaracion2;
    //break;
case etiqueta3;
    declaracion3;
    //break;
case etiquetaN.........
    declaracionN;
    //break;
default:
    declaracionDefault;
    //break;
} 

*/

/*Determinar que día de la semana corresponde al número, segun la siguiente tabla:
    - 1 = Lunes 
    - 2 = Martes
    - 3 = Miércoles
    - 4 = Jueves
    - 5 = Viernes */

    let diaSemana = 3;
switch(diaSemana){
    case 1:
        console.log("Lunes")
        //break;
        case 2: 
        console.log("Martes")
        //break;
        case 3: 
        console.log("Miercoles")
        //break;
        case 4: 
        console.log("Jueves")
        //break;
        case 5: 
        console.log("Viernes")
        //break;
        case 6: 
        console.log("Sábado")
        break;
        case 7: 
        console.log("Domingo")
        break;
        default:
        console.log("Número de la semana inválido")
        break;
}

//Crear un programa con un switch que muestre el precio del kilo de naranjas, manzanas, mandarinas, plátanis, mangos.

let fruta = "Mandarinas";

switch(fruta.toLowerCase()){
    case"naranjas":
        console.log("Las naranjas cuestan $30 el kilo");
        break;
    case"manzanas":
    console.log("Las manzanas cuestan $60 el kilo");
    break;
    case"mandarinas":
    console.log("Las mandarinas cuestan $25 el kilo");
    break;
    case"plátano":
    console.log("Las plátanos cuestan $60 el kilo");
    break;
    case"mangos":
    console.log("Las mangos cuestan $22 el kilo");
    break;
    default:
    console.log("No tenemos esa fruta :C");
    break;
}

//Crear un programa con switch para evaluación de alumnos (las calificaciones aprobatorias van de 5.5 a 10 y deben redondearse al número superior inmediato)

let calificación = 7.5;

switch(calificación){
    case 5:
    console.log("Directo a extra");
    break;
    case 5.5:
    console.log("Te salvaste, pero sigue estudiando");
    break;
    case 6:
    console.log("Estás salvado");
    break;
    case 6.5:
    console.log("Aprobado");
    break;
    case 7:
    console.log("Aprobado");
    break;
    case 7.5:
    console.log("Aprobado");
    break;
    case 8:
    console.log("Aprobado");
    break;
    case 8.5:
    console.log("Aprobado");
    break;
    case 9:
    console.log("Buen Trabajo, aprobado");
    break;
    case 9.5:
    console.log("Excelente, aprobado");
    break;
    case 10:
    console.log("Felicidades, aprobado");
    break;
    default:
    console.log("Calificación inválida");
    break;
}

