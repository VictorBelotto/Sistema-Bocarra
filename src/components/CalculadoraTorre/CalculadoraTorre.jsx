import React from 'react'
import InputMetragem from './components/InputMetragem'
import BotaoPadrao from '../Botoes/BotaoPadrao'
import CheckBoxTorre from './components/CheckBoxTorre'
import Info from '../Info/Info'
import { useTorreStore } from '../../context/TorreStorage'
const resultadosValuesInitial = {
  travessa: 0,
  passo: 0,
  diagonal: 0,
  total: 0
}

const CalculadoraTorre = () => {
  const [inputValues, checks] = useTorreStore(store => [store.inputValues, store.checks])
  const [exibeResultado, setExibeResultado] = React.useState(false)
  const [resultados, setResultados] = React.useState(resultadosValuesInitial)


  const calcularTorre = () => {
    const largura = checks.parrudaCheck ? 0.50 : 0.35
    const { comprimento, passo } = inputValues
    const comprimentoFloor = Math.floor(comprimento)
    const multiplicador = (comprimentoFloor / passo)

    const passoMetragem = (parseFloat(passo) * 4) * multiplicador
    const travessa = (parseFloat(largura) * 4 * (multiplicador + 1))
    const diagonalMetragem = (Math.sqrt(Math.pow(parseFloat(passo), 2) + Math.pow(parseFloat(largura), 2)) * 4) * multiplicador

    const total = travessa + passoMetragem + diagonalMetragem

    const tubo1Normal = (Math.floor(passoMetragem / 6)) + 1
    const tubo2Normal = (Math.floor(travessa + diagonalMetragem) / 6) + 1

    setResultados(
      {
        travessa: travessa.toFixed(),
        passo: passoMetragem.toFixed(),
        diagonal: diagonalMetragem.toFixed(),
        total: total.toFixed(),
        tubo2Normal: tubo2Normal.toFixed(),
        tubo1Normal: tubo1Normal.toFixed()
      }
    )
    setExibeResultado(true)
  }



  return (
    <section className='flex flex-col w-[300px] py-4 px-6 gap-4 bg-card-escuro text-slate-100 rounded-lg'>
      <h1 className='ti-1 mb-3 text-fundo-verdeH'>Metragem da Torre</h1>

      <CheckBoxTorre
        context={'TorreContext'}
        id={'travessao'}
        labelCheck={'Travessão?'}
        labelInput={null}
      />

      <InputMetragem label={'Comprimento'} id={'comprimento'} context={'TorreContext'} />
      <CheckBoxTorre
        context={'TorreContext'}
        id={'parruda'}
        labelCheck={'Parruda?'}
        labelInput={null}
      />

      <CheckBoxTorre
        context={'TorreContext'}
        id={'passo'}
        labelCheck={'Editar Passo?'}
        labelInput={'Passo:'}
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
          <p className=' text-slate-100'><strong className='text-fundo-verdeH text-lg' >Total :</strong> {resultados.total} m</p>
          <hr />
          <h2 className='ti-2 text-purple-400'>Tubos</h2>
          {!checks['parrudaCheck'] && (
            <>
              <Info titulo={'Tubo 1 composto por:'} descricao={'Passo'}>
                <p className=' text-slate-100'><strong className='text-text-contraste' >Tubo 1 :</strong> {`${resultados.tubo1Normal} x 1.1/2`}</p>
              </Info>
              <Info titulo={'Tubo 2 composto por:'} descricao={'Travessa + Diagonais'}>
                <p className=' text-slate-100'><strong className='text-text-contraste' >Tubo 2 :</strong> {`${resultados.tubo2Normal} x 5/8`}</p>
              </Info>
            </>
          )}
          {checks['parrudaCheck'] && (
            <>
              <Info titulo={'Tubo 1:'} descricao={'Passo'}>
                <p className=' text-slate-100'><strong className='text-text-contraste' >Tubo 1 :</strong> {`${resultados.tubo1Normal} x 2"`}</p>
              </Info>
              <Info titulo={'Tubo 2:'} descricao={'Travessa + Diagonais'}>
                <p className=' text-slate-100'><strong className='text-text-contraste' >Tubo 2 :</strong> {`${resultados.tubo2Normal} x 1.1/4 `}</p>
              </Info>
            </>
          )}
        </div>
      )}
    </section>
  )
}

export default CalculadoraTorre