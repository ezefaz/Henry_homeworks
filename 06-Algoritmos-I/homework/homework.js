'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  
  let array = [1]; // creo una array con un 1 ya que siempre vamos a llegar a este punto, tal como establece la consigna.
  let i = 2; // el primer valor primo por el cual se dividirá es 2.
  

  //  para factorear tengo que dividir al 180 por el minimo numero primo (180:2 = 90... 45=2 y así) debiendo obtener un resto de cero.
while (num !== 1) {           // Mientras mi número sea distinto de 1, vamos a hacer algo.  
   if(num % i === 0) {       // establecemos que mientras el resto de la division sea cero estamos bien. 
    array.push(i);          // entonces pusheamos el arreglo
     num = num/i;          //  el numero pasa a ser el mismo dividido por dos (por ejemeplo 180:2= 90, entonces se quedaria con el 90 y repetiría el bucle)
 } else {
    i++;                  // si el numero no es resto cero, entonces incremento i (que en primer instancia es 2) hasta que no tengamos nada que dividir y nuestro numero sea 1.
  }
 }  
  return array;
} 

function bubbleSort(array) { // Me va llevando el más grande hasta el final, comparando con el que tenía al lado hasta que avanzaba.

  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
for(let j = 0; j < array.length; j++) {  // con este bucle vamos a ir controlando los valores, mientras que con el segundo vamos a ir desarrollandolos.
    for(let i = 0; i < array.length; i++) {
        if(array[i] > array[i + 1]) { // chequear si el valor actual es mayor que el numero siguiente.
            let current = array[i]; // guardar el valor actual para generar el swap. 
            array[i] = array[i+1]; // ahora la posicion actual toma la posicion siguiente.
            array[i+1] = current; // almacenamos la posicion siguiente (que ahora es la actual) en la variable current.
        }
    }
 }      
return array;
}

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i = 1; i < array.length; i++) { 
    j = i;
    current = array[i]; // establezco la primer posicion como la posicion actual.
    while(j > 0 && array[j - 1] > current) { // mientras la primer posicion sea mayor a cero y la siguiente posicion sea mayor a la primer posicion...
      array[j] = array[j - 1]; // la posicion más grande pasa a ser la primer posicion, y asi hasta finalizar el bucle. 
      j--; 
    }
    array[j] = current;
  }
  return array;
}

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let j = 0; j < array.length-1; j++){
    let min = j;
    for(let i = j + 1; i < array.length; i++){
      if(array[i] < array[min]){
        min = i;
      }
    }
    if(j !== min){
      let aux = array[j]; 
      array[j] = array[min];
      array[min] = aux;
    }
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
