'use strict'

const { size } = require("@11ty/eleventy/src/TemplateCache");

// Las funciones nFactoria y nFibonacci deben resolverlas
// usando recursión. Una vez realizadas de esa forma pueden probar hacerlas
// de forma iterativa pero esto último no es obligatorio.

function nFactorial(n) {
  // devolvé el factorial de n (n!)
  // ej:
  // el factorial de 3 es 6 (3 * 2 * 1)
  if(n > -1 && n < 2) {  // aca estoy poniendo la condicion de cierre, de manera que si te pide el factorial de 1, queremos que directamente nos devuelva 1.
    return 1; 
  } else if (n < 0) {
    return 0;
  }
  return n * nFactorial(n - 1); // acá si invoco la funcion nFactorial(5) me va a ir realizando la iteracion hasta llegar a 1y así volver en las iteraciones y realizarlas PERO con el resultado.
}

function nFibonacci(n) {
  // Secuencia de Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,…
  // Retorna el enésimo numero de la serie
  // nFibonacci(0) // 0  // el elemento 0 es cero
  // nFibonacci(1) // 1 // el elemento 1 es 1
  // nFibonacci(6) // 1 // el elemento 6 es 8
  if(n === 1) { // el fibonacci de 1 es 1, entonces lo establezco como condicion de cierre.
    return 1;
  } else if (n < 0) { // el fibonacci de cero es cero. Entonces tambien lo establezco como condicion de cierre.
    return 0;
  } 
  return nFibonacci(n - 1) + nFibonacci(n - 2) // esta es la formula, que se va a ir ejecutando hasta llegar al 1, que es la condicion de cierre. Luego, va a tener los resultados de todos los fibonaccis y ir sumandolos como especifica la funcion.
}

// Para esta parte no es necesario utilizar recursión.
// Implementa la clase Queue que debe contener los siguientes métodos:
// enqueue: Agrega un valor a la queue. Respeta el orden existente.
// dequeue: Remueve un valor de la queue. Obedece a FIFO y respeta el underflow (devuelve undefined cuando la queue tiene size cero, o sea, cuando no tiene ningún elemento).
// size: Devuelve el número de elementos que contiene la queue.
function Queue() {
  this.items = []; 
 Queue.prototype.enqueue = function (item) {
   this.items.push(item);
 }
 Queue.prototype.dequeue = function(item) {
   return this.items.shift(item);
 }
 Queue.prototype.size = function() {
   return this.items.length;
   }
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};
