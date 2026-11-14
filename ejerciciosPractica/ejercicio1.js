/*
Condicionales: Crea una función llamada esPar(numero) que:
- Reciba un número.
- Devuelva true si es par.
- Devuelva false si es impar.
*/

function esPar(numero) {
    if (numero % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(esPar(2))

// Segunda forma
function esPar2(num) {
    return num % 2 == 0;
}

console.log(esPar2(5));