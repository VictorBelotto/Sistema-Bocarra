export class orcamentoLona {
  modelo
  material
  diasDeTrabalho
  metragem
  valor
  possuiFechamento
  fechamento
  possuiAranha
  aranha

  constructor(modelo, material, diasDeTrabalho, metragem, valor, possuiFechamento, fechamento, diasDeTrabalhoFechamento,possuiAranha, aranha, diasDeTrabalhoAranha){
    this.modelo = modelo
    this.material = material
    this.diasDeTrabalho = diasDeTrabalho
    this.metragem = metragem
    this.valor = valor
    this.fechamento = fechamento
    this.possuiFechamento  = possuiFechamento
    this.diasDeTrabalhoFechamento = diasDeTrabalhoFechamento
    this.possuiAranha  = possuiAranha
    this.aranha = aranha 
    this.diasDeTrabalhoAranha = diasDeTrabalhoAranha
  }
}