/*
Crea una función que reciba un array de números y encuentre el número mayor.

Ejemplo:
encontrarMayor([10, 5, 80, 3, 25]);

Condiciones:
- No puedes utilizar Math.max().
- Debes recorrer el array.
- Considera qué sucede si el array está vacío.
*/

function encontrarMayor(numeros) {
    if (numeros.length === 0) {
        console.log('El array puede estar vacio')
    } else {
        let maximo = numeros[0];
        for (let i = 0; i < numeros.length; i++) {
            if (numeros[i] > maximo) {
                maximo = numeros[i]
            }
            
        }
        return maximo
    }
}

console.log(encontrarMayor([10, 5, 80, 3, 25]));

// const lista = [10, 5, 80, 3, 25];

// let numeroMayor = Math.max(...lista);

// console.log(numeroMayor);
