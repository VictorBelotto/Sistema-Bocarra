import React from 'react'
import InputMetragem from './InputMetragem'
import BotaoPadrao from '../Botoes/BotaoPadrao'
import { CupulaContext } from '../../context/CupulaContext'

const CalculadoraCupula = () => {
  const {inputValues} = React.useContext(CupulaContext)
  const [tubo1, setTubo1] = React.useState(null)
  const [tubo2, setTubo2] = React.useState(null)
  const [tubo3, setTubo3] = React.useState(null)

  const calcularArco = (alturaArco, largura) =>{
    let h = 0;
    let c = 0;
    let R = 0;
    let alphaGraus = 0;
    let L = 0;

    h = alturaArco
    c = largura

    R = (Math.pow(h, 2) + Math.pow(c/2, 2)) / (2 * h);

    alphaGraus = 2 * Math.asin(c / (2 * R)) * (180 / Math.PI);

    L = (2 * R * Math.PI * alphaGraus) / 360;

    return L.toFixed(2)
  }

  const calcularCupula = () =>{
    const perimetroTuboDeFora = (inputValues.largura * Math.PI) + (inputValues.lencol * 2)

    const qtdTrelica = perimetroTuboDeFora

    const trelicaDiagonalDeFora = Math.sqrt(Math.pow(inputValues.alturaLateral, 2) + Math.pow(0.50, 2))

    const trelicaDiagonalDaTravessa = Math.sqrt(Math.pow(inputValues.largura / 2, 2) + Math.pow(inputValues.alturaLateral, 2))

    const trelicasDiagonais = ((trelicaDiagonalDaTravessa * 2) * (inputValues.lencol + 1)) + ((qtdTrelica * 2) * trelicaDiagonalDeFora)
    
    const ferragemGrossa = (((inputValues.largura * (inputValues.lencol + 1)) * 2 )) + ((inputValues.lencol + 1) * (inputValues.alturaLateral * 3)) + (perimetroTuboDeFora * 2) 

    const hipotenusaTravamento = Math.sqrt(Math.pow(inputValues.largura, 2) + Math.pow(1, 2)) 

    const travamentoDiagonal = (Math.sqrt(Math.pow(inputValues.alturaLateral, 2) + Math.pow(hipotenusaTravamento, 2))) * inputValues.lencol

    const comprimentoArco = calcularArco(inputValues.alturaArco, inputValues.largura)

    const comprimentoArcos = comprimentoArco * (inputValues.lencol + 4)

    const licacoes = inputValues.lencol * 3

    const trelicaReta = (qtdTrelica * inputValues.alturaLateral) + (inputValues.alturaArco * (inputValues.lencol + 1))

    console.log(`Arco: ${trelicaDiagonalDeFora}`)

    setTubo1(parseFloat(ferragemGrossa))
    setTubo2(parseFloat(travamentoDiagonal) + parseFloat(comprimentoArcos)  + parseFloat(trelicaReta) )
    setTubo3(parseFloat(licacoes) + parseFloat(trelicasDiagonais))

  }

  return (
    <section className='flex flex-col w-fit p-4 gap-4 bg-card-escuro text-slate-100 rounded-lg'>
      <InputMetragem
        label={'Largura'}
        id={'largura'}
      />
      <InputMetragem
        label={'Lençol'}
        id={'lencol'}
      />
      <InputMetragem
        label={'Altura do arco'}
        id={'alturaArco'}
      />
      <InputMetragem
        label={'Altura lateral'}
        id={'alturaLateral'}
       
      />
      <BotaoPadrao
        label={'Calcular'}
        variant={'roxo'}
        onClick={calcularCupula}
        key={'calcular'}
      />

      <div>
        Resultados 
        <p>Tubo 1 (Tubo de fora + Travessas) : {tubo1}</p>
        <p>Tubo 2 (Treliça Reta + Travamento + Arcos) : {tubo2}</p>
        <p>Tubo 3 (Treliça Diagonal e Ligações) : {tubo3}</p>

      </div>
    </section>
  )
}

export default CalculadoraCupula