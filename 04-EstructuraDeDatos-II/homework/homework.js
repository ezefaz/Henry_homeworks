'use strict'

const { add } = require("@11ty/eleventy/src/TemplateCache");

// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.

function LinkedList() { // funcion constructora de listas.
 this.head = null;
 this._length = 0;
}

function Node(value) { //funcion constructora de nodos.
  this.value = value;
  this.next = null;
}
let list = new LinkedList(); // creo una lista aplicando la funcion constructora anterior de lista.

// FUNCION CONSTRUCTORA PARA AGREGAR UN NODO AL FINAL.
LinkedList.prototype.add = function(value) { // lo almacenamos en el prototype para ahorrar memoria. Cuando la necesita, la usa.
  let node = new Node(value); 
  
  var current = this.head;
  // Primer caso. this.head = null. No hay un valor asignado.
  if(current === null) { // tambien if(!current) Si current es Null, no hay ningun nodo definido. Entonces estoy en el caso de current = null y no tengo ningun elemento en mi lista actual.
    this.head = node;
    this._length++;
    return node;
  }
  // Segundo caso. this.head = value. Si hay un valor asignado.
  while(current.next !== null) { // mientras haya un current.next, es decir que NO sea null, quiero que avance a la siguiente posicion hasta llegar al último nodo.
    current = current.next; // aca avanzamos simplemente.
  } 
    current.next = node;
    this._length++;
    return node;

} 
// FUNCION CONSTRUCTORA PARA ELIMINAR UN NODO AL FINAL.
LinkedList.prototype.remove = function(value) {
  let current = this.head;
  // Primer caso. Eliminar el primer elemento.
  if(this._length === 0) return null; //si current no tiene un valor. Directamente que devuelva null.
  else if(this._length === 1) { // si la longitud de la lista es igual a 1, quiero declarar una variable auxiliar que contenga el valor de ese nodo.
    let aux = current.value;
    this.head = null; // asignamos null a this.head, entonces se estaria eliminando el valor anterior.
    this._length--; // reducimos la longitud en 1 puesto al valor eliminado.
    return aux; // retornamos el valor eliminado.
  }
  // Segundo caso. Eliminar el último elemento.
  while(current.next.next !== null) { // le pregunto al proximo elemento si su PROXIMO elemento es null, entonces de esta manera ya se que es el último elemento.
    current = current.next;
  }
  let aux = current.next;
  current.next = null;
  this._length--;
  return aux.value;
}
// FUNCION CONSTRUCTORA PARA BUSCAR UN ELEMENTO DE LA LISTA.
LinkedList.prototype.search = function(value) {
  // Primer caso. Que no haya un valor existente.
  if(this.head === null) return null;
  let current = this.head;
  // Segundo caso. Que haya un valor.
  while(current) { // mientras exista un current.
    if(current.value === value) return current.value;
    // si current.value = value, entonces habre encontrado el valor que queria.
  // Tercer caso. Que el valor sea una function.
  else if (typeof (value) === 'function') { // comprueba si el valor que me pasaron es una function.
    if(value(current.value)) { // voy a evaluar el elemento invocando a la function, y si efectivamente es una function, me devolvería true.
      return current.value; // finalmente quiero que me retorne el elemento evaluado ya que es una function.
    }
  }
  current = current.next; // si no se cumplen las anteriores condiciones, quiero que se pruebe en el siguiente valor.
  }
   return null; // si el valor no esta en la lista, devuelvo null.
}

// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo. 
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta. 
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición 
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.

function HashTable() {
this.numBuckets = 35;
this.buckets = []; // creo un arreglo para ir poniendo las cosas.
}

HashTable.prototype.hash = function(key) {
  let sum = 0;
  for(let i = 0; i < key.length; i++) {
    sum += key.charCodeAt(i);
  }
  return sum % this.numBuckets // da numeros entre 0 y 34.
}

HashTable.prototype.set = function(key, value) {
  if(typeof key !== 'string') throw TypeError('Keys must be strings');
  let i = this.hash(key);
  if(this.buckets[i] === undefined) { // estoy verificando si en la posición i existe un valor. En este caso seria undefined porque no le asignamos valor. 
    this.buckets[i] = {}
  }
  this.buckets[i][key] = value; // si no está el valor que estamos buscando, este va y lo crea en dicha posición. 
 // en este caso estaríamos aplicando colisión. Ya que podriamos asignar dos objetos juntos en esta misma posición.

}   


HashTable.prototype.get = function(key) {
  let i = this.hash(key);
  return this.buckets[i][key];

}


HashTable.prototype.hasKey = function(key) {
  let i = this.hash(key);
  return this.buckets[i].hasOwnProperty(key); //se fija si dentro de la posicion que otorgo la funcion hash tiene dicha propiedad. Si no la tiene devolveria false.
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};
