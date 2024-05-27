import React from 'react'
import {useValoresImpressaoStore} from '../../../../../context/ValoresImpressaoStore.js'

const EstruturaEFrete = () => {
  const [frete, setFrete] = React.useState(false)
  const [estrutura, setEstrutura] = React.useState(false)
  const [toggleFrete, setToggleFrete] = React.useState('Frete + Instalação')

  const [contador, setContador] = useValoresImpressaoStore(state => [state.contador, state.setContador]);

  React.useEffect(() => {
    if (contador === 1) {
      setToggleFrete('Frete + Instalação :');
    } else if (contador === 2) {
      setToggleFrete('Frete :');
    } else if (contador === 3) {
      setToggleFrete('Instalação :');
    }
  }, [contador]);

  const handleToggleFrete = () => {
    setContador();
  };


  return (
    <>
      <div className='flex gap-1 cursor-pointer'>
       <p className='cursor-pointer font-semibold' onClick={handleToggleFrete}>{toggleFrete}</p>
       <div onClick={() => setFrete(!frete)}>{frete ? <p> Incluso</p> : <p> Não incluso</p>}</div>
        
      </div>

      <div onClick={() => setEstrutura(!estrutura)} className='flex gap-1 cursor-pointer' >
        <p className='font-semibold'>Estrutura Metálica :</p>
        {estrutura ? <p> Incluso</p> : <p> Não incluso</p>}
      </div>
    </>
  )
}

export default EstruturaEFrete