'use strict'

function counter() {
  // Retorna una funcion que cuando sea invocada retorne un valor creciente.
  // el primer valor deberia ser 1.
  // Vas a tener que usar closures.
  // ejemplo: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
  var counter = 0;
  return function() {
    return counter = counter+1;
  }
}

function cacheFunction(cb) {
  // Usa closures para crear un caché para la función cb.
  // la función que retornas debe aceptar un solo argumento e invocar a cb con ese argumento
  // cuando la función que hayas retornado es invocada de nuevo, debería guardar el argumento y el resultado de la invocacion
  // cuando la función que retornaste sea invocada de nuevo con un argumento con el cual se había invocado anterioremente, no deberia invocar de nuevo a cb
  // debería retornar el resultado (previamente guardado)
  // Ejemplo:
  // cb -> function(x) { return x * x; }
  // si invocas la function que retornaste con 5, adentro deberia invocar cb(5) y retornar 25.
  // si la invocas de nuevo con 5, deberia retornar 25 (guardado previament en el cache)
  // Tips, usá un objeto donde cada propiedad sea un argumento, y el valor el resultado.
  // usá hasOwnProperty!
  var cache = {} // creamos un objeto vacio donde se almacenara el resultado
  return function (argumento) {  // retornamos una funcion que acepta un solo argumento
    if (cache.hasOwnProperty(argumento)) { // realizamos la comprobacion: si cache TIENE un el argumento...
      return cache[argumento]; // quiero que me retorne el valor de la posicion argumento
    } cache[argumento] = cb(argumento) // si NO tiene este argumento, se va a buscarlo a la funcion callback que esta asignada en los test, y lo devuelva en el objeto cache.
    return cache[argumento] // finalmente me devuelve el obj cache con la posicion de la propiedad.
  } 
}

/* OTRA MANERA
var cache = {}
return function(argumento) { 
  if (!cache.hasOwnProperty(argumento)) {
    return cache[argumento] = cb(argumento);
  }
  return cache[argumento]
}
*/

// Bind

var instructor = {
  nombre: "Franco",
  edad: 25
}

var alumno = {
  nombre: "Juan",
  curso: "FullStack"
}

function getNombre(){
  return this.nombre;
}
// Escribir código, sin modificar lo que ya se encuentra escrito arriba, para poder llamar al método getNombre para obtener primero el nombre del instructor y luego para obtener el nombre del alumno.
// Modificar los undefined por el código correspondiente en cada caso
// Pista, tenes que bindear el this!
let getNombreInstructor = getNombre.bind(instructor); // con el bind estamos especificando que el this se refiera a (instructor)
// es lo mismo que hacer
// function getNombre() {return(instructor.nombre)}
let getNombreAlumno = getNombre.bind(alumno); // de nuevo, estamos especificando al this que se refiera a "alumno" y no a instructor.


/*Guardar en las siguientes tres variables una función que devuelva una cadena utilizando la función "crearCadena"
y el delimitador especificado. La idea es realizarlo con la función bind para poder volver a utilizarlo múltiples veces luego:

1. textoAsteriscos
2. textoGuiones
3. textoUnderscore

Esto nos va a permitir llamar por ejemplo al método "textoAsteriscos" únicamente pasándole un argumento en vez de los tres que recibe "crearCadena"
*/
function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena){
    return delimitadorIzquierda + cadena + delimitadorDerecha;
}

// Modificar los undefined por el código correspondiente en cada caso
// Pista, tenes que usar bind para "bindear" algunos parámetros de la función crearCadena.

let textoAsteriscos = crearCadena.bind(this, '*', '*'); // No me interesa cambiar la direccion del This, entonces lo dejo fijo. Deveria devolver "*Hola*"

let textoGuiones = crearCadena.bind(this, '-', '-');

let textoUnderscore = crearCadena.bind(this, '_', '_');


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  counter,
  cacheFunction,
  getNombreInstructor,
  getNombreAlumno,
  textoAsteriscos,
  textoGuiones,
  textoUnderscore,
};
