/* ============= Bucles=======
*Iteración. Proceso de repetir una secuencia de instrucciones o acciones en un programa, Es decir, ejecutar un bloque e código muchas veces, basado en una condición o una colección de elementos.

--Operadores de incremento (++) y operadores de decremento (--).


============== Ciclo For =================
Un ciclo for se repite hasta que la condción se evalpue como false. Crea 3 expresionales opcionales.

Sintaxis 
    for(expresiónInicial; expresiónCondicional; expresiónDeActualización){
            //Bloque de código a ejecutar
    }

    1. Inicialización. Debe inicializar con una variable que será evaluada en la expresión a comparar. Variable global o local.
    2. Condición. Es una expresión que debe cumplir la variable inicial (true), sino se cumple (false)  el bucle termina.
    3. Actualización, pasos a realizar. Son los intervalos que cambiarán la variable inicial mientras sea true.
    */
   //Programa para contar los boletos de un concierto con variable local.
   for(let boleto = 1; boleto <= 50; boleto++){
    console.log(`Boleto ${boleto}`);
   } 
//Programa para contar paletas con variable global
   let paletas = 1;
   for(paletas; paletas <=20; paletas++){
   }
   console.log(`Tengo ${paletas} paletas`);

   //Cuenta regresiva
   let cuentaRegresiva = 18;
   for(cuentaRegresiva; cuentaRegresiva >=0; cuentaRegresiva--){
    console.log(cuentaRegresiva);
   }

   /*
   ¿Como recorremos arrays con el ciclo for?
   debemos usar índices del arreglo para poder usar el bucle, indices desde 0 hasta n y vamos a utilizar la propiedad length, 
   */
   const ch28 = ["Mari", "Andrea", "Pessy", "Ana Fer", "Ingrid", "Blanca", "Pau", "Nancy", "Pessy", "Yare", "Magali"];

   for(let i = 0; i < ch28.length; i++){
   console.log(ch28[i]);
    }

    /* =====Variaciones del ciclo for
    ---for .... of nos permite recorrer el objeto (array) y devuelve el valor
    --for-- in  nos permite recorrer el objeto (array) y devuelve su posición.
    */
    //for .... of 
    let animales = ["perro", "gato", "colibri", "pantera", "león", "grillo"];
    for(let animal of animales){
        console.log(animal + " pertemece al array animales ");
    }
    //for .... in
    for(let animal in animales){
        console.log(animal);
    }

    //Sumar los números de 1 al 100
    let suma = 0;
    for(let i = 1; i <= 100; i++){
        //suma = suma + i;
        suma += i;
    }
    console.log(suma);

    //Imprima los números pares del 1 a 20
    for(let i = 1; i <= 20; i++){
        if(i % 2 === 0){
            console.log(i);
        }
    }
    //Imprima la tabla de multiplicar del 5
    const multiplicando = 5; 
    for (let i= 1; i <= 10; i++){
        let resultado = multiplicando * i;
        console.log(`${multiplicando} x ${i} = ${resultado}`);
    } 
    /* ============= Ciclo While =======
    recorre un bloque de código siempre que una condición especifica sea verdadera.
    Sirve para realizar una trarea repetitiva MIENTRAS una condición sea verdadera
    Sintaxis
    while(condicion){
        //bloque de código a ejecutar
    }
    */
   let productos = 5;
   while(productos > 0){
        console.log(productos + "Productos vendidos");
        productos --;
    }
    
    //Imprimir números del 1 al 10
    let numero1 = 0;
    while(numero1 < 10){
        numero1++
        console.log("El número es " + numero1);
    }

    //Imprimir los elementos de un array
    const frutas = ["manzana", "plátano", "naranja", "mandarina", "limon"];
    let fruta = 0;

    while(fruta < frutas.length){
        console.log(frutas[fruta]);
        fruta++;
    }

    //Hacer una secuencia de asterisco
    let totalDeAsteriscos= 5;
    let Iteración = 0;
    let texto = "";

    while(Iteración < totalDeAsteriscos){
        texto = texto + "*";
        console.log(texto)
        Iteración++;
    }
  /* ============== Ciclo Do While
  Hacer mientras, crea un bucle que ejecuta una sentencia especificada, hasta que la condición de comprobación se evalúa como false

  sintaxis
    do{

    }whilw (condición);
  */
    //Contar del al 5
    let numero2 = 0;
    do{
        numero2++;
        console.log(numero2);
    }while(numero2 < 6); 

    //Mostrar productos vendidos
    let producto = 5;
    do{
        console.log(producto + " productos vendidos");
        producto--;
    }while(producto >=1);

    /*==================== Control de ciclos ===========
    ---------- Sentencia break Terminar el bucle actual. Permite al programa salir de una secuencia pero para que se ejecute necesita estar anidado dentro de la sentencia.
    
    ---------- Sentencia continue. No termina el bucle sino que salta a la siguiente iteración.
     */
    //Ejemplo de Break
    let numero3 = 0;

    while(numero3 < 100){
    numero3++;
    console.log(numero3);

    if(numero3 === 10){
        break;
        }
    }

    //Ejemplo de continue
    for(let cliente = 1; cliente < 10; cliente++){
        if(cliente === 5){
            console.log("Erees el cliente número 5: ¡¡¡¡ Ganaste !!!!")
            continue;
        }if(cliente === 9){
            console.log("Erees el cliente número 9: ¡¡¡¡ Ganaste !!!!")
            continue;
        }
        console.log(" Erees el cliente número " + cliente);
    }

    const filaBanco = ["Sofía", "David", "Juan"];
    