import { ModelosLona} from "./ModelosDaLona"

export  const calculaValorDaLona = ({selectedModelo,selectedMaterial, diasDeTrabalho, metragemQuadrada}) =>{
    const custoDoDia = 2727.27
    const maoDeObraAjustada = (custoDoDia * ModelosLona[selectedModelo.value].multiplicador).toFixed(2)
    const valorDoMaterial = ModelosLona[selectedModelo.value][selectedMaterial]
    const valorDaLona = ((maoDeObraAjustada * diasDeTrabalho.lona) + (metragemQuadrada.lona * valorDoMaterial)).toFixed(2)
    const valorDaMaoDeObra = (maoDeObraAjustada * diasDeTrabalho.lona).toFixed(2)

    return {
        valorDaLona: valorDaLona,
        valorDaMaoDeObra: valorDaMaoDeObra
    }
}