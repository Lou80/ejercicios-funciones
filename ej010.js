/*Crear un documento con el nombre fn_010.js
Crear una función llamada mostrarNombreCompleto
Esta función recibe 2 parámetros nombre y apellido
Mostrar con console.log() el nombre completo de la persona, concatenando nombre y apellido
Por ejemplo: si los parámetros son 'Ada' y 'Lovelace', mostrar en consola 'Ada Lovelace'
Crear una función llamada obtenerNombreCompleto
Esta función recibe 2 parámetros nombre y apellido
Retornar el nombre completo de la persona, concatenando nombre y apellido
Por ejemplo: si los parámetros son 'Grace' y 'Hopper', debe retornar el string resultante 'Grace Hopper'
var firstName = 'Ada';
var lastName = 'Lovelace';

// esta funcion muestra el nombre concatenado, ya que tiene un console.log adentro
mostrarNombreCompleto(firstName, lastName); // Ada Lovelace

// en el caso de esta funcion, como solo retorna el string concatenado, necesito poner el console.log
console.log( obtenerNombreCompleto(firstName, lastName) ); // Ada Lovelace*/


function mostrarNombreCompleto (nombre, apellido) {
    console.log(nombre, apellido);
}

mostrarNombreCompleto ('Ada', 'Lovelace');

function obtenerNombreCompleto(nombre, apellido) {
    return nombre + apellido;
}

obtenerNombreCompleto();