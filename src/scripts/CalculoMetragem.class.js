export const calcularMetragem = (largura, comprimento, altura, alturaAranha) => {
  const metragem = parseFloat(largura) * parseFloat(comprimento);
  let fechamento;
  let fechamentoAranha

    fechamento = ((parseFloat(largura) * Math.PI) + ((parseFloat(comprimento) - parseFloat(largura))* 2)) * parseFloat(altura);
 
    fechamentoAranha = ((parseFloat(largura) * Math.PI) + ((parseFloat(comprimento) - parseFloat(largura))* 2)) * parseFloat(alturaAranha);

  return [metragem, fechamento, fechamentoAranha ]
};