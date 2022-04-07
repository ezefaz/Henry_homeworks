const {
    Queue,
    Node,
    LinkedList,
    BinarySearchTree
} = require('./DS.js')

// Implementar la función countArray: a partir de un array en el cual cada posición puede ser un único
// número u otro array anidado de números, determinar la suma de todos los números contenidos en el array.
// El array será recibido por parámetro.
// Ejemplo:
//    const array = [1, [2, [3,4]], [5,6], 7];
//    countArray(array); --> Debería devolver 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)
// Pista: utilizar el método Array.isArray() para determinar si algun elemento de array es un array anidado
// [Para más información del método: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray]

var countArray = function(array) {
    // Tu código aca:
let sum = 0; // voy a tener que sumar los valores segun la consigna, entonces inicializo una variable sum en cero.

for(let i = 0; i < array.length; i++) { // recorro el array.
    if(Array.isArray(array[i])) { // si es que encuentro un array dentro del array general
        sum += countArray(array[i]); // quiero que se ejecute la suma para cada posicion del arreglo interno.
    } else {
        sum += array[i];  // si es un numero y no un arreglo, quiero que lo sume.
    }
}
    return sum; // finalmente retorno la suma total.
}


// Implementar la función countProps: a partir de un objeto en el cual cada propiedad puede contener
// cualquier tipo de dato, determinar la cantidad de propiedades de objetos en cualquier nivel, ya sea el inicial
// u objetos anidados
// Ejemplo:
var obj = {
  a: {
    a1: 10,
    a2: 'Franco',
    a3: {f: 'r', a: 'n', c: {o: true}}
  },
  b: 2,
  c: [1, {a: 1}, 'Franco']
}
// countProps(obj)--> Deberia devolver 10 ya que el objeto inicial tiene 3 propiedades, pero a su vez
// dentro de a tenemos 3 propiedades mas, luego a3 tiene otras 3 y por ultimo c tiene una extra.
// Propiedades: a, a1, a2, a3, f, a, c, o, b, c --> 10 en total

var countProps = function(obj) {
    // Tu código aca:
    let count = 0;

    for(let prop in obj)  { 
        count++; 
        if(typeof obj[prop] === 'object') { // se pregunta si dentro de la propiedad hay un objeto
            if(!Array.isArray(obj[prop])) { // si no es un arreglo entra a la condicion de abajo, si es un array directamente no entra.
                count = count + countProps(obj[prop]); // analiza las propiedades del objeto (en este caso analiza obj.a.a3.c, que como es un objeto, lo suma).
            }
        }
    }
    return count;
}


// Implementar el método changeNotNumbers dentro del prototype de LinkedList que deberá cambiar
// aquellos valores que no puedan castearse a numeros por 'Kiricocho' y devolver la cantidad de cambios que hizo
// Aclaracion: si el valor del nodo puede castearse a número NO hay que reemplazarlo
// Ejemplo 1:
//    Suponiendo que la lista actual es: Head --> [1] --> ['2'] --> [false] --> ['Franco']
//    lista.changeNotNumbers();
//    Ahora la lista quedaría: Head --> [1] --> ['2'] --> [false] --> ['Kirikocho] y la función debería haber devuelto el valor 1

LinkedList.prototype.changeNotNumbers = function(){
    // Tu código aca:
let count = 0;
let current = this.head;

 while(current) {
    if(isNaN(Number(current.value))) {
        count++;
        current.value = `Kiricocho`;
    }
 current = current.next;
    }
    return count;
}

// Implementar la función mergeQueues que a partir de dos queues recibidas por parametro
// debe devolver una nueva Queue que vaya mergeando los nodos de las anteriores.
// Ejemplo:
// - queueOne: [7,3,5]
// - queueTwo: [2,4,6]
// mergeQueues(queueOne, queueTwo) --> [7,2,3,4,5,6]
// IMPORTANTE: NO son arreglos sino que son Queues.

var mergeQueues = function(queueOne, queueTwo) {
    // Tu código aca:
    let queue = new Queue();
    while(queueOne.size() || queueTwo.size()) { // se pregunta mientras alguno de los dos queues tenga algo sigamos avanzando.
        let firstElement = queueOne.dequeue(); // me devuelve el valor del primer elemento del array 1.
        let secondElement = queueTwo.dequeue(); // me devuelve el valor del primer elemento del array 2.
        if(firstElement) queue.enqueue(firstElement); // si firstelement tiene un valor, quiero que se sume a la nueva cola.
        if(secondElement) queue.enqueue(secondElement); // hago lo mismo que con el primer elemento. 
    }
    return queue; // de esta manera se va a ir sumando los elementos a la nueva cola creada anteriormente. La retornamos como pide el ejercicio.
}


// Implementar la funcion closureMult que permita generar nuevas funciones que representen
// las tablas de multiplicación de distintos numeros
// Ejemplo: 
// - var multByFour = closureMult(4);
// - multByFour(2) --> 8 (2 * 4)
// - multByFour(5) --> 20
// - var multBySix = closureMult(6);
// - multBySix(4) --> 24

var closureMult = function(multiplier) {
    // Tu código aca:
    return function(num) {
        return num * multiplier;
    }
}

// Implementar el método sum dentro del prototype de BinarySearchTree
// que debe retornar la suma total de los valores dentro de cada nodo del arbol
BinarySearchTree.prototype.sum = function(value) {
    // Tu código aca:
    if(!this.rigth && !this.left) return this.value;
    if(!this.rigth && this.left) return this.value + this.left.sum();
    if(this.rigth && !this.left) return this.value + this.right.sum();
    if(this.rigth && !this.left) return this.value + this.right.sum() + this.left.sum();
}

module.exports = {
    countArray,
    countProps,
    mergeQueues,
    closureMult
}