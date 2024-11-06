export default function converterMes(mes: string): string {
    const date = new Date(mes + '-01');
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' };

    // Formata a data
    const formattedDate = new Intl.DateTimeFormat('pt-BR', options).format(date);

    const [month, year] = formattedDate.split(' de ');
    const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);

    return `${capitalizedMonth}/${year}`;
}