'use strict'
// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests

function BinarySearchTree(value) { // Establezco la funcion constructora de arboles.
  this.value = value;
  this.right = null;
  this.left = null;
}
 // bts es root, es decir que va a contener el nodo raiz.

BinarySearchTree.prototype.insert = function() {  
  // izquierda
  if(this.value > value) // como el nodo raíz es mayor al nuevo valor, tengo que ir para la izquierda.
  if(this.left === null) this.left = new BinarySearchTree(value); // llamo a la funcion y me fijo si es que NO contiene algun valor. De no tener valor, incorporo valor dado. Si es que tiene un valor, se sigue ejecutando el bucle hasta que no haya un valor.
  else this.left.insert(value); // cuando el this.left === null, quiere decir que ya no entra en el bucle y ya incorporo el nuevo valor.
    
  // derecha
  if (this.value < value) { // si el valor insertado es mayor al this.value (que es el nodo raíz), quiere decir que tengo que ir hacia la derecha.
  if(this.right === null) this.right = new BinarySearchTree(value); // si a la derecha no tiene ningun valor, entonces creo el objeto. (!this.right) -> es lo mismo.
  else this.right.insert(value);
  }
}

BinarySearchTree.prototype.contains = function(value) {
  if(this.value = value) return true; // si el nodo raíz es igual al valor, entonces retorno true, ya tengo el valor.
    // hacia la derecha
  if(this.value < value) { // me voy hacia la derecha y me consulto si en la derecha tengo el valor buscado o no.
    if(this.right === null) return false; // no tengo el valor.
    else return this.right.contains(value);
  }
    // hacia la izquierda
    if(this.value > value) {
      if(this.left === null) return false;
      else return this.left.contains(value);
    }
}

BinarySearchTree.prototype.size = function() { // esta funcion es recursiva.
  if(this.left === null && this.right === null) return 1; // si tanto left como right estan en null, quiere decir que estoy en un nodo hoja.
  if(this.left === null && this.right != null) return 1 + this.right.size(); // si en la derecha tengo un valor, retorno 1 y se aplica la recursividad
  if(this.left != null && this.right === null) return 1 + this.left.size();
  if(this.left != null && this.right != null) return 1 + this.left.size() + this.right.size();
}

BinarySearchTree.prototype.depthFirstForEach = function(cb, order) {
  if(order === 'pre-order') {
    // root - left - right
    cb(this.value); // cb es una funcion que hace lo que quiera por cada uno de los nodos.
    if(this.left != null) this.left.depthFirstForEach(cb, order);
    if(this.right != null) this.right.depthFirstForEach(cb,order);
  }
  else if(order === 'post-order') {
    // left - right - root 
    if(this.left != null) this.left.depthFirstForEach(cb, order);
    if(this.right != null) this.right.depthFirstForEach(cb,order);
    cb(this.value);
  } 
  else{
    // left - root - right (in order)
    if(this.left != null) this.left.depthFirstForEach(cb, order);
    cb(this.value);
    if(this.right != null) this.right.depthFirstForEach(cb, order);
  }
}

BinarySearchTree.prototype.breadthFirstForEach = function(cb, array = []) {
  // el array vacio nos va a permitir mantener el orden de los niveles, porque sino los perdemos.
  if(this.left != null) array.push(this.left);

  if(this.right != null) array.push(this.right);

  cb(this.value);

  if(array.length > 0) array.shift().breadthFirstForEach(cb, array);

}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};
