/*Crear un documento con el nombre fn_020.js

Crear una función con el nombre mostrarElNumeroMasGrande que acepte dos parámetros numéricos llamados numero1 y numero2

La función tiene que retornar el mensaje:

SI numero1 es mayor que numero2, retornar El número ${numero1} es más grande que ${numero2}
SI numero2 es menor que numero1, retornar El número ${numero2} es más grande que ${numero1}
SI numero1 es igual que numero2, retornar Los dos números son iguales
Para comparar los dos números, hay que usar la función compararNumeros desarrollada en el ejercicio fn_019

Probar la función en el siguiente código
*/

// codear acá la función
function compararNumeros(numero1, numero2) {
    if (numero1 < numero2) {
        return -1;
    } else if(numero2 < numero1) {
        return 1;
    } else {
        return 0;
    }
}

console.log( mostrarElNumeroMasGrande(1, 5) ); // El número 5 es más grande que 1
console.log( mostrarElNumeroMasGrande(63, 27) ); // El número 63 es más grande que 27
console.log( mostrarElNumeroMasGrande(1, 1) ); // Los dos números son iguales