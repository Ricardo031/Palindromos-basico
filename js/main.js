let btn = document.getElementById('check-btn');
let result = document.getElementById('result');

btn.addEventListener('click', (e) => {
    let text = document.getElementById('text-input').value;
    
    if (text === '') {
        alert("Please input a value");
        return;
    }
    
    let copia = text.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Invertir el texto procesado
    let reversedText = copia.split('').reverse().join('');

    // Verificar si es un palíndromo
    if (copia === reversedText) {
        result.textContent = `"${text}" es un palindrome.`;
    } else {
        result.textContent = `"${text}" no es un palindrome.`;
    }
});