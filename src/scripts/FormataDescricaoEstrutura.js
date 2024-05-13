import { Item } from "./Item.class";

export const FormataDescricaoEstrutura = (orcamentos) =>{
  let objetosOrganizados = {
    orcamentosEstruturasOrganizados: [],
    orcamentosAcessoriosOrganizados: []
  }

  

  orcamentos.map((orcamento) =>{
    let item = new Item()
    if(orcamento.label === 'Espias'){
      item.descricao = 'Jogo de espias em cabo de Aço'
      item.total = (parseFloat(orcamento.value) * parseFloat(orcamento.quantidade)).toFixed(2)
      objetosOrganizados.orcamentosAcessoriosOrganizados.push(item)
    }else if(orcamento.label === 'Catracas'){
      item.descricao = 'Conjunto de Faixas e Catracas p/ 5 Toneladas'
      item.total = (parseFloat(orcamento.value) * parseFloat(orcamento.quantidade)).toFixed(2)
      objetosOrganizados.orcamentosAcessoriosOrganizados.push(item)
    }else if(orcamento.label ===  'Tifor 800' || orcamento.label === 'Tifor 1600' || orcamento.label === 'Tifor 3200'){
      item.descricao = `Conjunto de ${orcamento.label}`
      item.total = (parseFloat(orcamento.value) * parseFloat(orcamento.quantidade)).toFixed(2)
      objetosOrganizados.orcamentosAcessoriosOrganizados.push(item)
    }else{
      item.descricao = orcamento.label
      item.precoUnitario = orcamento.value
      item.quantidade = orcamento.quantidade
      item.total = (parseFloat(orcamento.value) * parseFloat(orcamento.quantidade)).toFixed(2)
      objetosOrganizados.orcamentosEstruturasOrganizados.push(item)
    }
  })

  return objetosOrganizados
}