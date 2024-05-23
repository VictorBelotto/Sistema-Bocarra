import { Item } from "./Item.class";

export const FormataDescricaoEstrutura = (orcamentos) => {
  let orcamentosEstruturasOrganizados = []

  const calculaTotal = (valor, metragem, quantidade) => {
    return ((parseFloat(valor) * parseFloat(metragem)) * parseFloat(quantidade)).toFixed(2)
  }

  orcamentos.map((orcamento) => {
    let item = new Item()

    item.descricao = `${orcamento.label} de ${orcamento.metragem} m`
    item.quantidade = orcamento.quantidade
    item.total = calculaTotal(orcamento.valor, orcamento.metragem, orcamento.quantidade)
    orcamentosEstruturasOrganizados.push(item)
  })

  return orcamentosEstruturasOrganizados
}