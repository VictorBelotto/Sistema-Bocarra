import React from 'react'
import InputMetragem from './InputMetragem'
const CalculadoraCupula = () => {
  const [largura, setLargura] = React.useState('')
  const [lencol, setLencol] = React.useState('')
  const [alturaArco, setAlturaArco] = React.useState('')
  const [alturaLateral, setAlturaLateral] = React.useState('')
  

  
  return (
    <section className='flex flex-col w-56 p-4 gap-4 bg-card-escuro text-slate-100 rounded-lg'>
      <InputMetragem
        label={'Largura'}
        id={'largura'}
        value={largura}
        onChage
      />
      <InputMetragem
        label={'Lençol'}
        id={'lencol'}
        value={lencol}
        onChage
      />
      <InputMetragem
        label={'Altura do arco'}
        id={'alturaArco'}
        value={alturaArco}
        onChage
      />
      <InputMetragem
        label={'Altura lateral'}
        id={'alturaLateral'}
        value={alturaLateral}
        onChage
      />
    </section>
  )
}

export default CalculadoraCupula