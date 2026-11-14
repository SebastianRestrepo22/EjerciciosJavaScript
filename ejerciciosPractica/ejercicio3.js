/* Arrays: Crea una función llamada obtenerMayores(edades) que reciba un array de edades y devuelva únicamente las edades mayores o iguales a 18. */

function obtenerMayores(edades) {
    const maxEdad = [];
    for (const edad of edades) {
        if (edad >= 18) {
            maxEdad.push(edad)
        }
    }
    return maxEdad;
}

console.log(obtenerMayores([12, 18, 25, 15, 30]));

// Segunda fomra
function obtenerMayores2(edades) {
    /*
    edades.filter(function(edad) {
        return edad >= 18;
    });
    */
    return edades.filter(edad => edad >= 18); // "Toma cada edad (izquierda de la flecha) y devuelve true si esa edad es mayor o igual a 18 (derecha de la flecha)."
}

console.log(obtenerMayores2([12, 18, 25, 15, 30]));
