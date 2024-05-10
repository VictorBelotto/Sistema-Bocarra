import React from 'react'
import InputMetragem from './components/InputMetragem'
import BotaoPadrao from '../Botoes/BotaoPadrao'
import CheckBoxTorre from './components/CheckBoxTorre'
import { TorreContext } from '../../context/TorreContext'



const CalculadoraTorre = () => {
  const {inputValues} = React.useContext(TorreContext)
  const [exibeResultado, setExibeResultado] = React.useState(false)
  const [resultados, setResultados] = React.useState({
      travessa: 0,
      passo: 0,
      diagonal: 0,
      total: 0
  })


  const calcularTorre = () =>{
    const {largura, altura, passo} = inputValues
    const alturaFloor = Math.floor(altura)
    const multiplicador = (alturaFloor / passo)

    const passoMetragem = (parseFloat(passo) * 4) * multiplicador
    const travessa = (parseFloat(largura) * 4 * (multiplicador + 1)) 
    const diagonalMetragem = (Math.sqrt(Math.pow(parseFloat(passo), 2) + Math.pow(parseFloat(largura), 2)) * 4) * multiplicador

    const total = travessa  + passoMetragem + diagonalMetragem

    setResultados(
      {
        travessa: travessa.toFixed(),
        passo: passoMetragem.toFixed(),
        diagonal: diagonalMetragem.toFixed(),
        total: total.toFixed()
      }
    )
    setExibeResultado(true)
  }



  return (
    <section className='flex flex-col w-[330px] py-4 px-6 gap-4 bg-card-escuro text-slate-100 rounded-lg'>
      <h1 className='ti-1 mb-3 text-fundo-verdeH'>Metragem da Cúpula</h1>
      <InputMetragem label={'Altura'} id={'altura'} context={'TorreContext'}/>
      <InputMetragem label={'Largura'} id={'largura'} context={'TorreContext'}/>

      <CheckBoxTorre
        context={'TorreContext'}
        id={'passo'}
        labelCheck={'Passo?'}
        labelInput={'Passo:'}
      />
      <CheckBoxTorre
        context={'TorreContext'}
        id={'comprimento'}
        labelCheck={'Comprimento?'}
        labelInput={'Comprimento:'}
      />

      <div className='flex self-center'>
        <BotaoPadrao label={'Calcular'} variant={'verde'} onClick={calcularTorre} />
      </div>

      {exibeResultado && (
        <div className='flex flex-col gap-3'>
          <h2 className='ti-2 text-purple-400' >Resultados</h2>
          <p className=' text-slate-100'><strong className='text-text-contraste' >Passos metragem :</strong> {resultados.passo} m</p>
          <p className=' text-slate-100'><strong className='text-text-contraste' >Travessas metragem :</strong> {resultados.travessa} m</p>
          <p className=' text-slate-100'><strong className='text-text-contraste' >Diagonais metragem :</strong> {resultados.diagonal} m</p>
          <hr />
          <p className=' text-slate-100'><strong className='text-fundo-verdeH text-lg' >Total :</strong> {resultados.total} m</p>
        </div>
      )}
    </section>
  )
}

export default CalculadoraTorre