// Definindo o número a ser verificado
const numero = 13;

// Inicializando a sequência de Fibonacci com os valores 0 e 1
let fib = [0, 1];

// Calculando a sequência de Fibonacci até que o último número seja maior ou igual ao número a ser verificado
while (fib[fib.length - 1] < numero) {
  const novoNumero = fib[fib.length - 1] + fib[fib.length - 2];
  fib.push(novoNumero);
}

// Verificando se o número informado pertence ou não à sequência
if (fib.includes(numero)) {
  console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${numero} não pertence à sequência de Fibonacci.`);
}
/*este exemplo, o número a ser verificado é definido como 13, mas poderia ser qualquer outro número. O programa inicializa a sequência de Fibonacci com os valores 0 e 1 e, em seguida, calcula a sequência adicionando os dois últimos números da sequência para obter o próximo número.

O programa continua calculando a sequência até que o último número seja maior ou igual ao número a ser verificado. Em seguida, o programa verifica se o número informado pertence ou não à sequência, usando o método includes() para verificar se o número está na sequência.

Finalmente, o programa exibe uma mensagem informando se o número informado pertence ou não à sequência de Fibonacci.*/