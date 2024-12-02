import axios, { AxiosResponse } from "axios";

type Custo = {
    produtos: string;
    custoTotal: number;
};

type MesData = {
    mes: string;
    custos: Custo[];
};


export class Data {
    status!: number;
    data: Array<MesData> = [];
}

export async function getTendenciaCustoDepartamento(departmentId: number) {
    const data = new Data();

    try {
        await axios.get(
            `${process.env.REACT_APP_API_URL}/relatorios/tendenciaCustoDepartamento`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
            params: {
                id: departmentId
            }
        }
        ).then((result: AxiosResponse<MesData[]>) => {
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