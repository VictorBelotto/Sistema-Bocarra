const valorPorMetroQuadrado = {
  '3000': 29.15,
  'S1000': 31.56,
  'G760': 40.8,
  '8000': 50.77,
  'MP10722': 54.5,
  'MP1400': 67.1
};

export const calculoFechamento = (metragem, material, diasTrabalho) => {
  const maoDeObra = 2727.27 * diasTrabalho
  const valor = valorPorMetroQuadrado[material]

  return (metragem * valor) + maoDeObra
}