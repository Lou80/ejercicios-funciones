/*Crear un documento con el nombre fn_013.js
Copiar el código que se encuentra a continuación, y completar las funciones
Todo el código de cada función debería ir dentro de las llaves de esa función*/

function exclamar(str) { 
return '¡'+str+'!';
  // agregar un punto de exclamacion al principio y final del string que llega como parametro
  // retornar el nuevo string
  // por ejemplo: si el parametro es 'hola mundo' -> '¡hola mundo!'
}

function unirNombre(nombre, apellido) {
  // return nombre y apellido unidos en un solo string, separados por un espacio
  // 'Ada', 'Lovelace' -> 'Ada Lovelace'
}

function saludar(nombre) {
  // recibimos un parametro nombre y tenemos que concatenarlo con otro string para generar el siguiente mensaje: 'Ada' -> '¡Hola Ada!'
  // si querés, podés reutilizar la función exclamar() que creamos más arriba
}

console.log( exclamar('hola') === '¡hola!' );
console.log( exclamar('hola, mundo') === '¡hola, mundo!' );

console.log( unirNombre('Ada', 'Lovelace') === 'Ada Lovelace' );
console.log( unirNombre('Grace', 'Hopper') === 'Grace Hopper' );

console.log( saludar('Ada') === '¡Hola Ada!' );
console.log( saludar('Grace') === '¡Hola Grace!' );

// deberias ver en la consola todo en true