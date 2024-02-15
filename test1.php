<?php

/**
 * Verifica si una cadena es un palíndromo.
 *
 * @param string $input para La cadena que se va a verificar.
 * @return bool True si la cadena es un palíndromo, false si no es un palíndromo.
 */
function is_palindrome($input)
{
    // Paso 1: se va a manipular la cadena
    // se convertira a minúsculas, se eliminaran tildes y caracteres no alfabéticos
    $input = preg_replace("/[^A-Za-z]/", '', strtolower(iconv('UTF-8', 'ASCII//TRANSLIT', $input)));

    // Paso 2: Comparar la cadena con su inversa
    $reverse = strrev($input); // con esto lograremos obtener la inversa de la cadena

    // Paso 3: Devolver el resultado
    return $input === $reverse; // Si la cadena original es igual a su inversa, es un palíndromo
}

// Ejemplo de uso
$input = "Allí por la tropa portado, traído a ese paraje de maniobras, una tipa como capitán usar boina me dejara, pese a odiar toda tropa por tal ropilla";
$resultado = is_palindrome($input);

// Mostrar el resultado
if ($resultado) {
    echo "<p>La frase \"$input\" es un palíndromo.</p>";
} else {
    echo "<p>La frase \"$input\" no es un palíndromo.</p>";
}
// Ejemplo para false
$input = "Esta es la prueba técnica de Integ.ro";
$resultado = is_palindrome($input);

// Resultado
if ($resultado) {
    echo "<p>La frase \"$input\" es un palíndromo.</p>";
} else {
    echo "<p>La frase \"$input\" no es un palíndromo.</p>";
}
