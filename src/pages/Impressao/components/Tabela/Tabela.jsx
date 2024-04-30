import React from 'react';
import styles from './Tabela.module.css'; 
import TabelaParte from '../TabelaParte/TabelaParte';
import { OrcamentoContext } from '../../../../scripts/OrcamentoContext';
import { getOrcamentosStorage } from '../../../../scripts/orcamentosStorage';
import { Item } from '../../../../scripts/Item.class';


const Tabela = () => {
  const rows = 10

  const orcamentosAtivos = getOrcamentosStorage()

  let orcamentosLonaOrganizados = []

  orcamentosAtivos.map((orcamento) => {
    console.log(orcamento.valor)
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
   

  const dados = [
    { quantidade: '', descricao: '', precoUnitario: '', total:'' },
  ];

  return (
    <table className={styles.table}>
       <thead>
        <tr>
          <th className={styles.celulaVerticalHeader}></th>
          <th className={styles.quantidadeHeader}>QUANT.</th>
          <th className={styles.descricaoHeader}>DESCRIÇÃO</th>
          <th className={styles.precoUnitarioHeader}>PREÇ UNI</th>
          <th className={styles.totalHeader}>TOTAL</th>
        </tr>
      </thead>
      <TabelaParte dados={orcamentosLonaOrganizados} linhasMinimas={rows} nomeParte={'Lona'} />
      <TabelaParte dados={dados} linhasMinimas={rows} nomeParte={'Estrutura Metálica'} />
      <TabelaParte dados={dados} linhasMinimas={rows} nomeParte={'Acessórios'} />
    </table>
  );
};

export default Tabela;
