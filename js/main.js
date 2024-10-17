let btn = document.getElementById('check-btn');
let result = document.getElementById('result');

btn.addEventListener('click', (e) => {
    let text = document.getElementById('text-input').value;
    
    if (text === '') {
        alert("Please input a value");
        return;
    }
    
    let copia = text.toLowerCase().replace(/[^a-z0-9]/g, '');//*eliminar todo los caracteres que no sean de a-z o numeros de 0-9
    //g:global, búsqueda se hace en toda la cadena y no se detiene en la primera coincidencia.

    //* Invertir el texto procesado
    let reversedText = copia.split('').reverse().join(''); //copia.split es para separar las letras en una cadena string y se divide por las '', el reverse es para voltearlos y ya luego con el join vuelve a unir los caracteres del array en una cadena de texto. El argumento '' indica que los caracteres se deben juntar sin ningún separador entre ellos.

    //* Verificar si es un palíndromo
    if (copia === reversedText) {
        result.textContent = `"${text}" Es un palindromo.`;
    } else {
        result.textContent = `"${text}" NO es un palindromo.`;
    }
});