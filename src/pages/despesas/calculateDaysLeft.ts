export const calculateDaysLeft = (endDate: string) => {
    const today = new Date(); // Data atual
    const [day, month, year] = endDate.split('/').map(Number); // Quebra a data no formato DD/MM/YYYY
    const end = new Date(year, month - 1, day); // Cria o objeto Date com a data de competência

    const differenceInTime = end.getTime() - today.getTime(); // Diferença em milissegundos
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24)); // Converte para dias
    return differenceInDays;
  };