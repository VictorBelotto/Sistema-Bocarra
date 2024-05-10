import React from 'react'
import InputMetragem from './InputMetragem'
import BotaoPadrao from '../Botoes/BotaoPadrao'
import { CupulaContext } from '../../context/CupulaContext'
import { Tooltip, Typography } from '@material-tailwind/react'
import Info from '../Info/Info'

const CalculadoraCupula = () => {
  const {inputValues} = React.useContext(CupulaContext)
  const [tubo1, setTubo1] = React.useState(null)
  const [tubo2, setTubo2] = React.useState(null)
  const [tubo3, setTubo3] = React.useState(null)
  const [exibeResultado, setExibeResultado] = React.useState(false)

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
    const lencolReal = Math.floor(inputValues.lencol)

    const perimetroTuboDeFora = (inputValues.largura * Math.PI) + (inputValues.lencol* 2)

    const qtdTrelica = (inputValues.largura * Math.PI) + (lencolReal* 2)

    const trelicaDiagonalDeFora = Math.sqrt(Math.pow(inputValues.alturaLateral, 2) + Math.pow(((inputValues.lencol / lencolReal) / 2), 2))

    const trelicaDiagonalDaTravessa = Math.sqrt(Math.pow((inputValues.largura / 2), 2) + Math.pow((inputValues.alturaLateral), 2))

    const trelicasDiagonais = ((trelicaDiagonalDaTravessa * 2) * (lencolReal + 1)) + ((qtdTrelica * 2) * trelicaDiagonalDeFora)
    
    const ferragemGrossa = (((inputValues.largura * (lencolReal + 1)) * 2 )) + ((lencolReal + 1) * (inputValues.alturaLateral * 3)) + (perimetroTuboDeFora * 2) + (inputValues.alturaLateral * 2)

    const hipotenusaTravamento = Math.sqrt(Math.pow(inputValues.largura, 2) + Math.pow(1, 2)) 

    const travamentoDiagonal = (Math.sqrt(Math.pow(inputValues.alturaLateral, 2) + Math.pow(hipotenusaTravamento, 2))) * lencolReal

    const comprimentoArco = calcularArco(inputValues.alturaArco, inputValues.largura)

    const comprimentoArcos = comprimentoArco * (lencolReal + 4)

    const licacoes = inputValues.lencol * 3

    const trelicaReta = (qtdTrelica * inputValues.alturaLateral) + (inputValues.alturaArco * (lencolReal + 1))

    console.log(`trav: ${trelicaDiagonalDaTravessa}, fora ${trelicaDiagonalDeFora}`)

    setTubo1(parseFloat(ferragemGrossa).toFixed())
    setTubo2((parseFloat(travamentoDiagonal) + parseFloat(comprimentoArcos)  + parseFloat(trelicaReta)).toFixed() )
    setTubo3((parseFloat(licacoes) + parseFloat(trelicasDiagonais)).toFixed())
    
    setExibeResultado(true)
  }

  return (
  <section className='flex flex-col w-[330px] py-4 px-6 gap-4 bg-card-escuro text-slate-100 rounded-lg'>
    <h1 className='ti-1 mb-3 text-fundo-verdeH'>Metragem da Cúpula</h1>
    <InputMetragem context={'CupulaContext'} label={'Largura'} id={'largura'} />
    <InputMetragem context={'CupulaContext'} label={'Lençol'} id={'lencol'} />
    <InputMetragem context={'CupulaContext'} label={'Altura lateral'} id={'alturaLateral'} />
    <InputMetragem context={'CupulaContext'} label={'Altura do arco'} id={'alturaArco'} />

      <div className='flex self-center'>
        <BotaoPadrao label={'Calcular'} variant={'verde'} onClick={calcularCupula} />
      </div>

    
     {exibeResultado && (
      <>
       <h2 className='ti-2 text-purple-400'>Resultado:</h2> 
       <table className='w-full'>
         <thead className='bg-slate-900'>
           <tr>
             <th className='py-2 px-4 text-base'>Tubo</th>
             <th className='py-2 px-4 text-base'>Metragem</th>
             <th className='py-2 px-4 text-base'>Qtd Tubos</th>
           </tr>
         </thead>
         <tbody className=''>
           <tr className='text-center'>
             <td className='py-2 px-4 text-base'>
               <Info titulo={'Tubo 1 composto por:'} descricao={'Tubo de fora + Travessas'}>
                 <h3 className='font-bold'>1°</h3>
               </Info>
             </td>
             <td className='py-2 px-4 text-base'>{tubo1}</td>
             <td className='py-2 px-4 text-base'>{Math.floor(tubo1 / 6) + 1}</td>
           </tr>
           <tr className='text-center'>
             <td className='py-2 px-4 text-base bg-card-escuro'>
               <Info titulo={'Tubo 2 composto por:'} descricao={'Treliça Reta + Travamento + Arcos'}>
                 <h3 className='font-bold'>2°</h3>
               </Info>
             </td>
             <td className='py-2 px-4 text-base bg-card-escuro'>{tubo2}</td>
             <td className='py-2 px-4 text-base bg-card-escuro'>{Math.floor(tubo2 / 6) + 1}</td>
           </tr>
           <tr className='text-center'>
             <td className='py-2 px-4 text-base'>
               <Info titulo={'Tubo 3 composto por:'} descricao={'Treliça Diagonal + Ligações'}>
                 <h3 className='font-bold'>3°</h3>
               </Info>
             </td>
             <td className='py-2 px-4 text-base'>{tubo3}</td>
             <td className='py-2 px-4 text-base'>{Math.floor(tubo3 / 6) + 1}</td>
           </tr>
          </tbody>
        </table>
       </>
     )}

    </section>
  )
}

export default CalculadoraCupula