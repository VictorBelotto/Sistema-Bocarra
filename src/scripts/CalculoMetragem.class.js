export const calcularMetragem = ({larguraDaLona, comprimentoDaLona, alturaFechamento, alturaAranha}, marquiseIsChecked) => {
  const metragem = parseFloat(larguraDaLona) * parseFloat(comprimentoDaLona);

  let perimetro
  if(marquiseIsChecked){
     perimetro = (parseFloat(larguraDaLona) * 2) + (parseFloat(comprimentoDaLona)* 2)
  }else{
     perimetro = (parseFloat(larguraDaLona) * Math.PI) + ((parseFloat(comprimentoDaLona) - parseFloat(larguraDaLona))* 2)
  }




  const fechamento = perimetro * parseFloat(alturaFechamento)

  const fechamentoDaAranha = perimetro * parseFloat(alturaAranha)

    

  return {
    'metragem': metragem.toFixed(0),
    'fechamento': fechamento.toFixed(0),
    'fechamentoDaAranha': fechamentoDaAranha.toFixed(0),
    'perimetro' : perimetro.toFixed(1)
  }
};