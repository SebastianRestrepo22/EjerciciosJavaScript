/*
Crea una función que reciba una palabra y devuelva esa palabra invertida.

Ejemplo:
invertirTexto("javascript");

// Resultado: "tpircsavaj"

Condiciones:
- No puedes utilizar .reverse().
- Debes retornar el resultado.
- Debe funcionar con cualquier palabra.
*/

function invertirTexto(texto) {
    let invertido = '';
    for (let i = texto.length - 1; i >= 0; i--) {
        invertido += texto[i];
    }

    texto = invertido;
    return invertido
}

invertirTexto("javascript");

// let texto = "javascritp";

// let textoInvertido = texto.split('').reverse().join('');

// console.log(textoInvertido);