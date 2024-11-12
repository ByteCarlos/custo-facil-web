export default function converterData(timestamp: string): string {
    const date = new Date(timestamp);

    // Formata a data no estilo DD/MM/YYYY
    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // getUTCMonth retorna 0 para janeiro
    const year = date.getUTCFullYear();

    // Formata a hora no estilo HH:MM
    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');

    // Retorna a string formatada
    return `${day}/${month}/${year} às ${hours}h${minutes}`;
}