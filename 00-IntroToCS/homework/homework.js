'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
 

// Utilizo la funcion "parseInt", ya que permite convertir de un lenguaje de bajo nivel a alto nivel. 

  var decimal = parseInt(num, 2);
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

    result = result + factor  * array[i];
  }
    return result;   
  */

}

function DecimalABinario(num) {
  // tu codigo aca

  // OPCIOMN 1: convierto el numero decimal en un string con base 2.
  
/*  var binary = num.toString(2);
  return binary */

var binary = "";

while(num > 0) {
    binary =  num % 2 + binary;
    num = Math.floor(num / 2); 
  }
  return binary;

/* 
  1. Creo un string
  2. Implemento el bucle While, siempre que sea mayor a cero, y dividimos por 2 HASTA que de cero, porque utilizaremos los restos de la division para sumarlos
    y así obtener el numero en binario.
  
Quedaría asi:

var binary = "";

while(num > 0) {
    binary = binary + (num%2);
    num = Math.floor(num/2); 
  }
  return binary
  */
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}