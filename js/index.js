/*CONSIGNA
Realizar un programa en javascript que solicite al usuario ingresar su puesto ej:
“administrador”, “gerente de ventas”, “gerente”, etc (puede ser cualquier puesto laboral deseado por ustedes).
Una vez ingresado el puesto laboral, el usuario deberá ingresar el sueldo percibido.
Deberemos elegir el bono que cobrará cada uno de los empleados y en caso de que la sumatoria de sueldo + bono sea mayor a 770000 deberemos extraer un 25% del total del sueldo (simulando imp a ganancias).*/



let puestoTrabajo = prompt("ingrese su puesto")
console.log(puestoTrabajo)

let sueldo = prompt("ingrese su sueldo")
console.log(sueldo)

let bono = 180000;
let topeImpuestos = 770000;
const impuesto = 0.25
let operacion = +sueldo + +bono;
let resultado = operacion - (operacion * impuesto);

if (operacion >= topeImpuestos) {
    console.log(`total: ${operacion} paga impuestos a la ganancia`)
    console.log(`monto a cobrar: ${resultado}`)

} else{
    console.log(`total: ${operacion} no paga impuestos`)
}
