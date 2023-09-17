// - Escribe un programa que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»

// - Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor

// - Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.


// - Escribre un programa que pida un numero y muestre por consola desde el numer ingresado hasta el cero

// Ej : Si el usuario ingresa 5 deberia mostrar por consola

// 5
// 4
// 3
// 2
// 1
// 0


// - Simular un punto de venta donde el usuario primero tenga que ingresar cuantos productos va a comprar el cliente, despues que el usuario tenga que ingresar que producto compro por ejemplo zapatilla y por separado el precio, al final que se muestre en consola todos los productos que el usuario compro con su respectivo precio y una suma del total de la compra

// - Escribir un programa que muestre en consola los números del 1 al 100, pero para múltiplos de tres imprimir 'Fizz' en lugar del número y para los múltiplos de cinco imprimir 'Buzz'. Para los números que son múltiplos tanto de tres como de cinco imprimir "FizzBuzz"

// Ejemplo

// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz

//-------------DESARROLO EJERCICIOS-----------------


//EJERCICIO1
// let nombreUsuario = prompt("Ingrese su nombre")
// console.log(`hola ${nombreUsuario}`)



//EJERCICIO2
// let numero1 = +prompt("Ingrese el primer numero")
// let numero2 = +prompt("ingrese el segundo numero")
//  if(numero1<numero2) {
//     console.log(`el numero mayor es ${numero2}`)
//  } else {
//     console.log(`el numero mayor es ${numero1}`)
//  }



//EJERCICIO3
// let numero1 = +prompt("ingrese el primer numero")
// let numero2 = +prompt("ingrese el segundo numero")
// let numero3 = +prompt("ingrese el tercer numero")

// if (numero1 > numero2 && numero1 > numero3) {
//     console.log(`el numero ${numero1} es el mayor de los tres`)
// } else if (numero2 > numero1 && numero2 > numero3) {
//     console.log(`el numero ${numero2} es el mayor`)
// } else if (numero3 > numero1 && numero3 > numero2) {
//     console.log(`el numero ${numero3} es el mayor`)
// }



//EJERCICIO4
// let contador = +prompt("ingrese su numero")
// while (contador>=0) {
//     console.log(`${contador}`)
//     contador--
// }




//EJERCICIO5

// let cantProductos = +prompt("ingrese cuantos productos quiere comprar")
// let total = 0
// for (let contador = 1; contador <= cantProductos; contador++) {

// let producto = +prompt(`Escoja los productos que quiere comprar 
// 1 - Zapatillas
// 2 - Remera
// 3 - Pantalon
// 4 - Gorra
// 5- Reloj`)

//     switch (producto) {
//         case 1:
//             let precioZ = 20000
//             console.log(`Zapatillas $${precioZ}`)
//             total += precioZ
//             break;
//         case 2:
//             let precioR = 6000
//             console.log(`Remera $${precioR}`)
//             total += precioR
//             break;
//         case 3:
//             let precioP = 12000
//             console.log(`Pantalon $${precioP}`)
//             total += precioP
//             break;
//         case 4:
//             let precioG = 5000
//             console.log(`Gorra $${precioG}`)
//             total += precioG
//             break;
//         case 5:
//             let precioS = 8000
//             console.log(`Reloj $${precioS}`)
//             total += precioS
//             break;
//         default:
//             alert("ingrese un producto de la lista")
//             break;
//     }
// }
// console.log(`Total = $${total}`)



//EJERICIO6
// for (let contador = 1; contador<=100; contador++) {

//     if(contador % 3 === 0 && contador %5 === 0) {
//         console.log("Buzzfizz");
//     } else if (contador % 3 === 0){
//         console.log ("Fizz");
//     } else if (contador % 5 === 0 ) {
//         console.log("Buzz");
//     } else {
//         console.log(`${contador}`)
//     }
// }



//TAREA TERMINADA
