/*Crear un documento con el nombre fn_019.js

Crear una función con el nombre compararNumeros que acepte dos parámetros numéricos llamados numero1 y numero2

La función tiene que retornar:

SI numero1 es menor que numero2, retornar -1
SI numero2 es menor que numero1, retornar 1
SI numero1 es igual que numero2, retornar 0
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
console.log( compararNumeros(1, 5) < 0 ); // true
console.log( compararNumeros(5, 1) > 0 ); // true
console.log( compararNumeros(1, 1) === 0 ); // true