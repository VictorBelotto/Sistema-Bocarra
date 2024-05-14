import React from 'react';
import styles from '../Tabela/Tabela.module.css'; 
import formataValor from '../../../../scripts/formataValor';
import { OrcamentoContext } from '../../../../scripts/OrcamentoContext';
OrcamentoContext

const TabelaParte = ({ dados, nomeParte, linhasMinimas, id }) => {
  const [quantidades, setQuantidades] = React.useState(dados.map(item => item.quantidade || ''));
  const [descricoes, setDescricoes] = React.useState(dados.map(item => item.descricao || ''));
  const [precosUnitarios, setPrecosUnitarios] = React.useState(dados.map(item => item.precoUnitario || ''));
  const [totais, setTotais] = React.useState(dados.map(item => item.total || ''));
  const {adicionaValorTotal} = React.useContext(OrcamentoContext)

  React.useEffect(()=>{
    const valores = dados.reduce((a, item) => Number(item.total) + a , 0)
    adicionaValorTotal(id, valores)
  }, [totais, dados])

  React.useEffect(() => {
    setQuantidades(dados.map(item => item.quantidade || ''));
    setDescricoes(dados.map(item => item.descricao || ''));
    setPrecosUnitarios(dados.map(item => item.precoUnitario || ''));
    setTotais(dados.map(item => formataValor(Number(item.total))|| ''));
  }, [dados]);



  const handleChange = (index, campo, valor) => {
    switch (campo) {
      case 'quantidade':
        const newQuantidades = [...quantidades];
        newQuantidades[index] = valor;
        setQuantidades(newQuantidades);
        break;
      case 'descricao':
        const newDescricoes = [...descricoes];
        newDescricoes[index] = valor;
        setDescricoes(newDescricoes);
        break;
      case 'precoUnitario':
        const newPrecosUnitarios = [...precosUnitarios];
        newPrecosUnitarios[index] = valor;
        setPrecosUnitarios(newPrecosUnitarios);
        break;
      case 'total':
        const newTotais = [...totais];
        newTotais[index] = valor;
        setTotais(newTotais);
        break;
      default:
        break;
    }
  };

  const linhasVazias = Math.max(linhasMinimas - dados.length, 0);
  const linhas = [...dados, ...Array(linhasVazias).fill({})]; 

  return (
    <tbody>
      <tr>
        <td rowSpan={linhasMinimas + 1} className={styles.celulaVertical}>{nomeParte}</td>
      </tr>
      {linhas.map((item, index) => (
        <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#d9d9d9' : '#f2f2f2' }}>
          <td className={styles.quantidade}>
            <input
              type="text"
              value={quantidades[index] || ''}
              onChange={e => handleChange(index, 'quantidade', e.target.value)}
              className={`${styles.input} ${styles.inputQtd}`}
            />
          </td>
          <td className={styles.descricao}>
            <input
              type="text"
              value={descricoes[index] || ''}
              onChange={e => handleChange(index, 'descricao', e.target.value)}
              className={styles.input}
            />
          </td>
          <td className={styles.precoUnitario}>
            <input
              type="text"
              value={precosUnitarios[index] || ''}
              onChange={e => handleChange(index, 'precoUnitario', e.target.value)}
              className={styles.input}
            />
          </td>
          <td className={styles.total}>
            <input
              type="text"
              value={totais[index] || ''}
              onChange={e => handleChange(index, 'total', e.target.value)}
              className={styles.input}
            />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TabelaParte;
