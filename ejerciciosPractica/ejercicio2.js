/* Bucle: Crea una función llamada sumarNumeros(n) que sume todos los números desde 1 hasta n. */

function sumarNumeros(num) {
    let suma = 0;
    for (let i = 0; i <= num; i++){
        suma += i
    }
    return suma;
}

console.log(sumarNumeros(8));