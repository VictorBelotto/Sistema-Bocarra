export const calcularMetragem = (largura, comprimento, altura, alturaAranha) => {
  const metragem = parseFloat(largura) * parseFloat(comprimento);
  let fechamento;
  let fechamentoDaAranha

    fechamento = ((parseFloat(largura) * Math.PI) + ((parseFloat(comprimento) - parseFloat(largura))* 2)) * parseFloat(altura);
 
    fechamentoDaAranha = ((parseFloat(largura) * Math.PI) + ((parseFloat(comprimento) - parseFloat(largura))* 2)) * parseFloat(alturaAranha);

  return {
    'metragem': metragem.toFixed(0),
    'fechamento': fechamento.toFixed(0),
     'fechamentoDaAranha': fechamentoDaAranha.toFixed(0) }
};