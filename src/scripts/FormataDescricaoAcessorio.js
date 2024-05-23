import { Item } from "./Item.class";

export const FormataDescricaoAcessorio = (orcamentos) => {
  let orcamentosAcessoriosOrganizados = []

  const calculaTotal = (valor, quantidade) => {
    return (parseFloat(valor) * parseFloat(quantidade)).toFixed(2)
  } 

  orcamentos.map((orcamento) => {
    let item = new Item()

    if (orcamento.id === 'espias') {
      item.descricao = 'Jogo de espias em cabo de Aço'
      item.total = calculaTotal(orcamento.valor, orcamento.quantidade) 
      orcamentosAcessoriosOrganizados.push(item)
    }
    else if (orcamento.id === 'catracas') {
      item.descricao = 'Conjuntos de Faixas e Catracas p/ 5 Toneladas'
      item.total = calculaTotal(orcamento.valor, orcamento.quantidade) 
      item.quantidade = orcamento.quantidade
      orcamentosAcessoriosOrganizados.push(item)
    }
    else if (orcamento.id === 'tifor800' || orcamento.id === 'tifor1600' || orcamento.id === 'tifor3200') {
      item.descricao = `${orcamento.label} kg`
      item.total = calculaTotal(orcamento.valor, orcamento.quantidade) 
      item.quantidade = orcamento.quantidade
      orcamentosAcessoriosOrganizados.push(item)
    }
    else if (orcamento.id === 'estacas' || orcamento.id === 'estacasTorre') {
      item.descricao = `${orcamento.label}`
      item.quantidade = orcamento.quantidade
      item.total = calculaTotal(orcamento.valor, orcamento.quantidade) 
      orcamentosAcessoriosOrganizados.push(item)
    }
  })

  return orcamentosAcessoriosOrganizados

}