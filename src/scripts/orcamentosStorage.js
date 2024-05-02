export const getOrcamentosLonaStorage = () =>{
  const RecuperarDados = localStorage.getItem('orcamentoJSON')
  return RecuperarDados ? JSON.parse(RecuperarDados) : []
}

export const setOrcamentoSLonatorage = (orcamentos) =>{
  const orcamentoJson = JSON.stringify(orcamentos)
  localStorage.setItem('orcamentoJSON', orcamentoJson )
} 