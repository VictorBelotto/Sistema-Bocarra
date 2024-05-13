import { Item } from "./Item.class";

export const FormataDescricaoEstrutura = (orcamentos) =>{
  let orcamentosEstruturasOrganizados =[]

  

  orcamentos.map((orcamento) =>{
    let item = new Item()
    if(orcamento.label === 'Espias'){
      item.descricao = 'Jogo de espias em cabo de Aço'
      item.total = (parseFloat(orcamento.value) * parseFloat(orcamento.quantidade)).toFixed(2)
      orcamentosEstruturasOrganizados.push(item)
    }else if(orcamento.label === 'Catracas'){
      item.descricao = 'Conjunto de Faixas e Catracas p/ 5 Toneladas'
      item.total = (parseFloat(orcamento.value) * parseFloat(orcamento.quantidade)).toFixed(2)
      orcamentosEstruturasOrganizados.push(item)
    }else{
      item.descricao = orcamento.label
      item.precoUnitario = orcamento.value
      item.quantidade = orcamento.quantidade
      item.total = (parseFloat(orcamento.value) * parseFloat(orcamento.quantidade)).toFixed(2)
      orcamentosEstruturasOrganizados.push(item)
    }
  })

  return orcamentosEstruturasOrganizados
}