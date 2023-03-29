const fs = require('fs');

// Lendo o arquivo JSON com os dados de faturamento
const faturamento = JSON.parse(fs.readFileSync('faturamento.json', 'utf-8'));

// Calculando o menor valor de faturamento diário
const menorFaturamento = Math.min(...faturamento.faturamento.map(dia => dia.valor));

// Calculando o maior valor de faturamento diário
const maiorFaturamento = Math.max(...faturamento.faturamento.map(dia => dia.valor));

// Calculando a média mensal de faturamento, ignorando os dias em que não houve faturamento
const diasFaturamento = faturamento.faturamento.filter(dia => dia.valor > 0);
const mediaMensal = diasFaturamento.reduce((total, dia) => total + dia.valor, 0) / diasFaturamento.length;

// Calculando o número de dias em que o valor de faturamento diário foi superior à média mensal
const diasAcimaMedia = diasFaturamento.filter(dia => dia.valor > mediaMensal).length;

// Imprimindo os resultados
console.log(`Menor valor de faturamento diário: R$ ${menorFaturamento.toFixed(2)}`);
console.log(`Maior valor de faturamento diário: R$ ${maiorFaturamento.toFixed(2)}`);
console.log(`Número de dias com faturamento acima da média mensal: ${diasAcimaMedia}`);
