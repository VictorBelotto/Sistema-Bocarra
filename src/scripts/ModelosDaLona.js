export class ModelosLona {

  static selectModelos = [
    { value: 'modelo_simples', label: 'Simples' },
    { value: 'modelo_cupula_redonda', label: 'Cúpula Redonda' },
    { value: 'modelo_tradicional', label: 'Tradicional' },
    { value: 'modelo_4_mastareus', label: '4 Mastareus' },
    { value: 'modelo_8_mastareus', label: '8 Mastareus' },
    { value: 'modelo_4_bicos', label: '4 Bicos' }
  ];

  static modelo_simples = {
    "multiplicador": 1,
    "3000": 45.19,
    "S1000": 47.4,
    "G760": 53.77,
    "8000": 60.64,
    "MP10722": 63.21,
    "MP1400": 71.9
  };
  static modelo_cupula_redonda = {
    "multiplicador": 1,
    "3000": 59.11,
    "S1000": 63.55,
    "G760": 76.36,
    "8000": 90.2,
    "MP10722": 95.36,
    "MP1400": 112.84
  };
  static modelo_tradicional = {
    "multiplicador": 1.2,
    "3000": 60.55,
    "S1000": 64.85,
    "G760": 77.8,
    "8000": 92.1,
    "MP10722": 97.25,
    "MP1400": 115.26
  };
  static modelo_4_mastareus = {
    "multiplicador": 1.3,
    "3000": 61.72,
    "S1000": 65.4,
    "G760": 79.8,
    "8000": 94.5,
    "MP10722": 99.35,
    "MP1400": 117.3
  };
  static modelo_8_mastareus = {
    "multiplicador": 1.5,
    "3000": 62.22,
    "S1000": 67.1,
    "G760": 81.2,
    "8000": 96.42,
    "MP10722": 102.1,
    "MP1400": 121.33
  };
  static modelo_4_bicos = {
    "multiplicador": 1.8,
    "3000": 69.54,
    "S1000": 74.47,
    "G760": 88.67,
    "8000": 104.01,
    "MP10722": 109.73,
    "MP1400": 129.11
  }
}
