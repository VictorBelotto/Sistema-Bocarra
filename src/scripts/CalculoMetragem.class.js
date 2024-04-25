export const calcularMetragem = ({larguraDaLona, comprimentoDaLona, alturaFechamentoMetragem, alturaAranhaMetragem}, marquiseIsChecked) => {
  const metragem = parseFloat(larguraDaLona) * parseFloat(comprimentoDaLona);
  let perimetro
  if(marquiseIsChecked){
     perimetro = (parseFloat(larguraDaLona) * 2) + (parseFloat(comprimentoDaLona)* 2)
  }else{
     perimetro = (parseFloat(larguraDaLona) * Math.PI) + ((parseFloat(comprimentoDaLona) - parseFloat(larguraDaLona))* 2)
  }




  const fechamento = perimetro * parseFloat(alturaFechamentoMetragem)

  const fechamentoDaAranha = perimetro * parseFloat(alturaAranhaMetragem)

    

  return {
    'metragem': metragem.toFixed(0),
    'fechamento': fechamento.toFixed(0),
    'fechamentoDaAranha': fechamentoDaAranha.toFixed(0),
    'perimetro' : perimetro.toFixed(1)
  }
};