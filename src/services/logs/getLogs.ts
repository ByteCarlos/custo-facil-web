import axios, { AxiosResponse } from "axios";

export type User = {
    id: number;
    name: string;
}

export type Action = {
    id: number;
    name: string;
}

export type LogData = {
    id: number;
    user_fk: number;
    log_timestamp: string;
    action_fk: number;
    user: User;
    action: Action;
};

export class Data {
    status!: number;
    data: Array<any> = [];
}

export async function getApplicationLogs() {
    const data = new Data();

    try {
        await axios.get(
            `${process.env.REACT_APP_API_URL}/logs`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        }
        ).then((result: AxiosResponse<LogData[]>) => {
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