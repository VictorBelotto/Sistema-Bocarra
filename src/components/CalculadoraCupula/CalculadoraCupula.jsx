import React from 'react'
import InputMetragem from './InputMetragem'
import BotaoPadrao from '../Botoes/BotaoPadrao'
import { CupulaContext } from '../../context/CupulaContext'

const CalculadoraCupula = () => {
  const {inputValues} = React.useContext(CupulaContext)
  const [tubo1, setTubo1] = React.useState(null)
  const [tubo2, setTubo2] = React.useState(null)
  const [tubo3, setTubo3] = React.useState(null)

  const calcularArco = () =>{
    let h = 0;
    let c = 0;
    let R = 0;
    let alphaGraus = 0;
    let L = 0;

    h = 0.4
    c = 1.3

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

    const ferragemFinaDiagonal = ((trelicaDiagonalDaTravessa * 2) * (inputValues.lencol + 1)) + ((qtdTrelicaFinaOuGrossa * 2) * trelicaDiagonalDeFora)
    
    const ferragemGrossa = (((inputValues.largura * (inputValues.lencol + 1)) * 2 )) + ((inputValues.lencol + 1) * (inputValues.alturaLateral * 3)) + (perimetroTuboDeFora * 2) 

    const ferragemFinaTotal = ((perimetroTuboDeFora * inputValues.alturaLateral) + (inputValues.alturaArco * (inputValues.lencol * 2))) + ferragemFinaDiagonal

    const hipotenusaTravamento = Math.sqrt(Math.pow(inputValues.largura, 2) + Math.pow(1, 2)) 

    const travamentoDiagonal = (Math.sqrt(Math.pow(inputValues.alturaLateral, 2) + Math.pow(hipotenusaTravamento, 2))) * inputValues.lencol

    const comprimentoArco = calcularArco()

    const comprimentoArcos = comprimentoArco * (inputValues.lencol + 4)

    const licacoes = lencol * 3

    const trelicaReta = (qtdTrelica * alturaLateral) + (alturaArco * (lencol + 1))

    console.log(`Arcos: ${comprimentoArcos}`)

    return {
      tubo1: ferragemGrossa,
      tubo2: travamentoDiagonal + comprimentoArcos + trelicaReta,
      tubo3: licacoes + travamentoDiagonal,
    }

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
        <p>Tubo 1 (Tubo de fora + Travessas) : </p>
        <p>Tubo 2 (Treliça Reta + Travamento + Arcos) : </p>
        <p>Tubo 3 (Treliça Diagonal e Ligações) : </p>

      </div>
    </section>
  )
}

export default CalculadoraCupula