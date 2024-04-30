export const getOrcamentosStorage = () =>{
  const RecuperarDados = localStorage.getItem('orcamentoJSON')
  return RecuperarDados ? JSON.parse(RecuperarDados) : []
}

export const setOrcamentoStorage = (orcamentos) =>{
  const orcamentoJson = JSON.stringify(orcamentos)
  localStorage.setItem('orcamentoJSON', orcamentoJson )
} 