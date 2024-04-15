const getOrderNumber = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear().toString().slice(-2); // Últimos dois dígitos do ano
  const month = ('0' + (currentDate.getMonth() + 1)).slice(-2); // Mês com dois dígitos
  const day = ('0' + currentDate.getDate()).slice(-2); // Dia com dois dígitos
  const hours = ('0' + currentDate.getHours()).slice(-2); // Horas com dois dígitos
  const minutes = ('0' + currentDate.getMinutes()).slice(-2); // Minutos com dois dígitos

  // Concatena os valores para formar o número de ordem
  const orderNumber = `#${year}${month}${day}${hours}${minutes}`;
  const data = `${day}/${month}/${year}`

  return orderNumber;
};

export default getOrderNumber;
