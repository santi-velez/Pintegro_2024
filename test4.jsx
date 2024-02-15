import React, { useState } from 'react'; // Importa React y el hook useState desde la librería 'react'
import axios from 'axios'; // Importa Axios para realizar solicitudes HTTP
import './Palindrome.css'; // Importa el archivo de estilos CSS

// Define y exporta el componente funcional Palindrome
export default function Palindrome() {
    // Define dos estados locales utilizando el hook useState
    const [inputText, setInputText] = useState(''); // Estado para almacenar el texto ingresado por el usuario
    const [isPalindrome, setIsPalindrome] = useState(null); // Estado para almacenar el resultado de la validación del palíndromo

    // Función para manejar el cambio en el campo de entrada de texto
    const handleInputChange = (event) => {
        setInputText(event.target.value); // Actualiza el estado inputText con el valor del campo de entrada de texto
    };

    // Función para verificar si el texto ingresado es un palíndromo
    const handleCheckPalindrome = () => {
        // Realiza una solicitud POST a la API REST para verificar el palíndromo
        axios.post('http://localhost:3000', { text: inputText }) 
            .then(response => {
                setIsPalindrome(response.data.isPalindrome); // Actualiza el estado isPalindrome con el resultado de la validación
            })
            .catch(error => {
                console.error('Error al realizar la solicitud:', error); // Maneja cualquier error que ocurra durante la solicitud
            });
    };

    // Renderiza el componente
    return (
        <div className="container"> {/* Contenedor principal con clase "container" */}
            <div className="input-container"> {/* Contenedor del campo de entrada de texto con clase "input-container" */}
                <input
                    type="text"
                    className="input-text" 
                    value={inputText}
                    onChange={handleInputChange}
                    placeholder="Ingresa un texto"
                />
            </div>
            <button className="button" onClick={handleCheckPalindrome}> {/* Botón de verificación con clase "button" */}
                Verificar Palíndromo
            </button>
            {/* Muestra el resultado del palíndromo si ya ha sido verificado */}
            {isPalindrome !== null && (
                <p className="result"> {/* Resultado del palíndromo con clase "result" */}
                    {isPalindrome ? 'Es un palíndromo' : 'No es un palíndromo'}
                </p>
            )}
        </div>
    );
}