const str = 'exemplo'; // string a ser invertida
let newStr = ''; // variável para armazenar a nova string invertida

// iterando sobre os caracteres da string original, do último para o primeiro
for (let i = str.length - 1; i >= 0; i--) {
  newStr += str[i]; // adicionando cada caractere à nova string
}

console.log(newStr); // imprimindo a nova string invertida
/**
 * O código acima utiliza um laço for para iterar sobre os caracteres da string original, do último para o primeiro, e adicioná-los à nova string newStr. Ao final, a nova string é impressa no console.

Lembrando que existem outras maneiras de inverter uma string em JavaScript, inclusive utilizando a função reverse. No entanto, para fins didáticos, optamos por não utilizá-la neste exemplo.
 */