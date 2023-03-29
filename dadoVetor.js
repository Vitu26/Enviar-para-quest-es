// Objeto JSON com os valores de faturamento diário
const faturamentoDiario = {
    "01": 1500,
    "02": 2000,
    "03": 1200,
    "04": 0,
    "05": 1800,
    "06": 2200,
    "07": 2500,
    "08": 3000,
    "09": 1900,
    "10": 2200,
    "11": 2600,
    "12": 1500,
    "13": 0,
    "14": 1800,
    "15": 2200,
    "16": 2500,
    "17": 2800,
    "18": 2100,
    "19": 2300,
    "20": 2400,
    "21": 2800,
    "22": 2700,
    "23": 2900,
    "24": 1700,
    "25": 0,
    "26": 1900,
    "27": 2400,
    "28": 2800,
    "29": 2600,
    "30": 3000,
    "31": 2200
  };
  
  // Variáveis para armazenar os valores de faturamento máximo e mínimo
  let faturamentoMinimo = Infinity;
  let faturamentoMaximo = -Infinity;
  
  // Variáveis para armazenar a soma dos valores de faturamento e o número de dias com faturamento superior à média
  let somaFaturamento = 0;
  let diasAcimaDaMedia = 0;
  
  // Obtendo a média mensal de faturamento
  const valoresFaturamento = Object.values(faturamentoDiario).filter(valor => valor > 0);
  const mediaMensal = valoresFaturamento.reduce((total, valor) => total + valor, 0) / valoresFaturamento.length;
  
  // Iterando sobre os valores de faturamento diário para encontrar o mínimo, o máximo e o número de dias acima da média
  for (let dia in faturamentoDiario) {
    const valorFaturamento = faturamentoDiario[dia];
    if (valorFaturamento > 0) {
      if (valorFaturamento < faturamentoMinimo) {
        faturamentoMinimo = valorFaturamento;
      }
      if (valorFaturamento > faturamentoMaximo) {
        faturamentoMaximo = valorFaturamento;
      }
      somaFaturamento += valorFaturamento;
      if (valorFaturamento > mediaMensal) {
        diasAcimaDaMedia++;
      }
    }
  }
  
  // Exibindo os resultados
  console.log(`Faturamento mínimo: ${faturamentoMinimo}`);
  console.log(`Faturamento máximo: ${faturamentoMaximo}`);
  console.log(`Número de dias com faturamento acima da média mensal: ${diasAcimaDaMedia}`);

  /*
   */