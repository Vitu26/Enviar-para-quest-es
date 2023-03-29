const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
  };
  
  // Somando o valor de faturamento de todos os estados
  const total = Object.values(faturamento).reduce((acc, cur) => acc + cur, 0);
  
  // Calculando o percentual de representação de cada estado
  const percentuais = {};
  for (const estado in faturamento) {
    percentuais[estado] = (faturamento[estado] / total) * 100;
  }
  
  console.log(percentuais);

  //Esse código irá imprimir um objeto com os percentuais de representação de cada estado:
  /**
   * {
  SP: 43.87,
  RJ: 23.77,
  MG: 18.94,
  ES: 17.62,
  Outros: 12.8
}

   */
  /**
   * Portanto, o estado de São Paulo teve a maior representação, com 43,87% do valor total mensal da distribuidora, seguido pelo Rio de Janeiro com 23,77%, Minas Gerais com 18,94%, Espírito Santo com 17,62% e outros estados com 12,8%.
   */