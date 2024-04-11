export const calcularMetragem = (largura, comprimento, altura, alturaAranha) => {
  const metragem = parseFloat(largura) * parseFloat(comprimento);

  const perimetro = (parseFloat(largura) * Math.PI) + ((parseFloat(comprimento) - parseFloat(largura))* 2)

  const fechamento = perimetro * parseFloat(altura)

  const fechamentoDaAranha = perimetro * parseFloat(alturaAranha)

    

  return {
    'metragem': metragem.toFixed(0),
    'fechamento': fechamento.toFixed(0),
    'fechamentoDaAranha': fechamentoDaAranha.toFixed(0),
    'perimetro' : perimetro.toFixed(1)
  }
};