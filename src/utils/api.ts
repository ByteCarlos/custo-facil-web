import axios from "axios";

async function getDespesas(token: string) {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/despesas`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar despesas:", error);
        throw error;
    }
}

async function getDespesa(token: string, despesaId: number) {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}//despesas/despesa?id=${despesaId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar despesa:", error);
        throw error;
    }
}

export { getDespesas };