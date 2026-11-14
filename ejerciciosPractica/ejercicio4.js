/* Strings: Crea una función llamada contarVocales(texto) que cuente cuántas vocales tiene una palabra o frase. */

function contarVocales(texto){
    let contador = 0;
    const vocales = ["a", "e", "i", "o", "u"];

    for(const letra of texto.toLowerCase()){
        if (vocales.includes(letra)) {
            contador += 1;
        }
    }
    
    return contador;
}

console.log(contarVocales("Hola javascript"));

// Segunda forma

function contarVocales1(texto){
    let contador = 0;
    const vocales = ["a", "e", "i", "o", "u"];

    for(const letra of texto.toLowerCase()){
        for (const vocal of vocales){
            if(letra == vocal){
                contador += 1;
            }
        }
    }

    return contador;
}

console.log(contarVocales1("Hola soy Sebastian"));