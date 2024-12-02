import axios, { AxiosResponse } from "axios";

export type Custo = {
    produtos: string;
    total: number;
};

export type DepartamentoData = {
    departamento: string;
    custos: Custo[];
};

export class Data {
    status!: number;
    data: Array<any> = [];
}

export async function getCustosPorDepartamento() {
    const data = new Data();

    try {
        await axios.get(
            `${process.env.REACT_APP_API_URL}/relatorios/custosPorDepartamento`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        }
        ).then((result: AxiosResponse<DepartamentoData[]>) => {
            console.log(result.data);
            data.status = result.status;
            data.data = result.data;
        }).catch((err: Error & AxiosResponse) => {
            data.status = err.status;
        });
        return data;
    } catch (error) {
        console.error("Erro ao buscar dados de custos por departamento:", error);
        throw error;
    }

}