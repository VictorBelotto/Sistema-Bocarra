import { Item } from "./Item.class";
import { OrcamentoContext } from "./OrcamentoContext";
import { getOrcamentosLonaStorage } from "./orcamentosStorage";

const orcamentosAtivos = getOrcamentosLonaStorage()
  
  export const FormataDescricaoLona = () =>{
    let orcamentosLonaOrganizados = []

    orcamentosAtivos.map((orcamento) => {
      let lona = new Item()
      lona.total = orcamento.valor
      let fechamento = new Item()
      fechamento.total = orcamento.valorFechamento
      let aranha = new Item()
      aranha.total = orcamento.valorFechamentoAranha

      if(orcamento.modelo.value === 'marquise'){
        lona.descricao =`Marquise ${orcamento.larguraDaLona}m x ${orcamento.comprimentoDaLona}m`
        orcamentosLonaOrganizados.push(lona)
      }else if(orcamento.larguraDaLona !== orcamento.comprimentoDaLona){
          lona.descricao =`Lona tensionada ${orcamento.larguraDaLona}m x ${orcamento.comprimentoDaLona}m, ${orcamento.modelo.label}`
          orcamentosLonaOrganizados.push(lona)
        }else{
          lona.descricao = `Lona tensionada ${orcamento.larguraDaLona}m Ø, ${orcamento.modelo.label}` 
          orcamentosLonaOrganizados.push(lona)
        }
    
        if(orcamento.possuiFechamento){
          fechamento.descricao = `Fechamento lateral p/ lona - ${orcamento.perimetroLona}m x ${orcamento.alturaFechamento}m - ${orcamento.metragemQuadrada.fechamento}m²` 
          orcamentosLonaOrganizados.push(fechamento)
        }
        
        if(orcamento.possuiAranha){
          aranha.descricao = `Asa acoplada p/ lona - ${orcamento.perimetroLona} x ${orcamento.alturaAranha} - ${orcamento.metragemQuadrada.aranha}m²` 
          orcamentosLonaOrganizados.push(aranha)
        }
      
    })

    return orcamentosLonaOrganizados

  }