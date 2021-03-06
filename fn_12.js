/*Crear un documento con el nombre fn_012.js
Copiar el código que se encuentra a continuación, y completar las funciones
Todo el código de cada función debería ir dentro de las llaves de esa función
*/
function sonIguales(a, b) {
    // retorna true si a y b son iguales
  // sino retorna false
  if (a === b) {
      return true;
  } else {
      return false;
  }
}

function tienenLaMismaLongitud(str1, str2) {
    // retorna true si los dos strings str1 y str2 tienen el mismo largo
  // sino retorna false
    if (str1.length == str2.length) {
        return true;
    } else {
        return false;
    }
  
}

function esMenorQueNoventa(num) {
    // retorna true si el parametro de la funcion: num, es menor a 90
  // sino retorna false
    if (num < 90) {
        return true;
    } else {
        return false;
    }
  
}

function esMayorQueCincuenta(num) {
    if (num > 50) {
        return true;
    } else {
        return false;
    }
  // retorna true si el parametro de la funcion: num, es mayor a 50
  // sino retorna false
}

function obtenerResto(a, b) {
  return a % b;// retornar  el resto de dividir a y b
}

function esPar(num) {
    if ( obtenerResto(num,2) == 0) {
        return true;
    } else {
        return false;
    }
  // retorna true si el numero es par
  // sino retorna false
  // AYUDA: un numero es par si el resto de dividir por 2 es 0
  // podés utilizar la función desarrollada anteriormente obtenerResto()
}

function esImpar(num) {
    if ( obtenerResto(num,2) != 0) {
        return true;
    } else {
        return false;
    }
  // retorna true si el numero es impar
  // sino retorna false
  // AYUDA: un numero es impar si el resto de dividir por 2 es distinto de 0
  // podés utilizar la función desarrollada anteriormente obtenerResto()
}


console.log( sonIguales('Ada', 'ada') === false );
console.log( sonIguales('Ada', 'Ada') === true );

console.log( tienenLaMismaLongitud('ada', 'Ada') === true );
console.log( tienenLaMismaLongitud('ada', 'Grace') === false );

console.log( esMenorQueNoventa(45) === true );
console.log( esMenorQueNoventa(115) === false );
console.log( esMenorQueNoventa(90) === false );

console.log( esMayorQueCincuenta(90) === true );
console.log( esMayorQueCincuenta(45) === false );
console.log( esMayorQueCincuenta(50) === false );

console.log( esPar(5) === false );
console.log( esPar(116) === true );
console.log( esPar(0) === true );
console.log( esPar(-4) === true );

console.log( esImpar(50) === false );
console.log( esImpar(3) === true );
console.log( esImpar(-5) === true );
console.log( esImpar(4) === false );
// deberias ver en la consola todo en true