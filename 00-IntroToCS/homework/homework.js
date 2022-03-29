'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
 
  var decimal = parseInt(num, 2); // Utilizo la funcion "parseInt", ya que permite convertir de un lenguaje de bajo nivel a alto nivel. 
  return decimal

  /* OTRA MANERA:
  1. Convertir el string en Array.
  2. Darlo vuelta con la funcion reverse, ya que para convertirlo es necesario hacerlo
    de derecha a izquierda.
  3. Recorrer el array y realizar las elevaciónes correspondientes (teniendo en cuenta que la base es 2).
  4. Multiplicar el resultado de las elevaciones por el valor original (i).
  5. Sumar los resultados.

  quedaría así:

  var array = num.split("")

  array = array.reverse()

  var result = 0

  for(var i = 0; i < array.length; i++) {

    var factor = Math.pow(2, i);

    result = result + factor * array[i];
  }
    return result;   
  */

}

function DecimalABinario(num) {
  // tu codigo aca

  // OPCIOMN 1: convierto el numero decimal en un string con base 2.
  
/*  var binary = num.toString(2);
  return binary */

var binary = ""; // Tengo que pasar de un número a un string, entonces creo un string vacio.

while(num > 0) {
    binary =  num % 2 + binary; // Agarro el num y obtengo el resto de la division por 2 y JS lo concatena al string.
    num = Math.floor(num / 2);  // Divido el numero por 2 y repito el bucle con el resultado hasta que este numero sea CERO.
  }
  return binary;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}