//-------- operadores de incremento y decremento-------

let numero1 = parseInt(prompt("Inserte un numero para utilizar  en los operadores de incremento y decremento"));

// incremento 

console.log("incrementando el numero insertado en 1:"); //se imprime texto
numero1++;
console.log("el resultado despues del incremento es:", numero1) // imprime el proceso

//Decremento 
console.log("Decrementando el numero insertado en 1");
numero1--;
console.log("el resultado despues del decremento es:", numero1);

//----Operadores de asignacion con valor especifico-------

let numero2 = parseInt(prompt("Inserte un numero para utilizar en los operadores de asignacion con valor especifico"));

//Incremento por un valor especifico
console.log("Incrementando el numero insertado por 3;");
numero2+=3;
console.log("El resultado despues del incremento por un valor especifico es;", numero2);


//Decremento por un valor especifico
console.log("Decrementando el numero insertado por 2:" );
numero2-=2;
console.log("el resultado despues del decremento por un valor especifico es:", numero2);

//Multiplicacion por un valor especifico
console.log("Multiplicando el numero insertado por 2");
numero2+=2;
console.log("El resultado despues de la multiplicacion por un valor especifico es;", numero2);

//Division por un valor especifico
console.log("Dividiendo el numero insertado entre 2:");
numero2 /= 2;
console.log("El resultado despues de la divison por el valor especifico es:", numero2);

//Modulo por un valor especifico
console.log("Obteniendo el modulo del numero insertado dividiento entre 3:");
numero2 %=3;
console.log("El resultado del modulo por un valor especifico es:", numero2);

