import { Box } from '@mui/material';
import { LineChart } from '@mui/x-charts';
import { prepareTendenciaDeCusto } from '../utils/prepareDataset';
import { getTendenciaCustoDepartamento } from '../../../services/reports/tendenciaCustoDepartamento';
import { useEffect, useState } from 'react';

// Definindo os tipos de dados
type Custo = {
    produtos: string;
    custoTotal: number;
};

type MesData = {
    mes: string;
    custos: Custo[];
};


interface TendenciaDeCustoProps {
    departmentId: number;
    setLoading: (loading: boolean) => void;
    setLoadingText: (text: string) => void;
}

export default function TendenciaDeCusto({ departmentId, setLoading, setLoadingText }: TendenciaDeCustoProps) {
    const [data, setData] = useState<MesData[]>([]);
    const [loadingData, setLoadingData] = useState(false);
    const { dataset, produtos } = prepareTendenciaDeCusto(data);

    const fetchData = async () => {
        if (loadingData)
            return;
        try {
            setLoadingData(true);
            setLoading(true);
            const result = await getTendenciaCustoDepartamento(2);
            setData(result.data);
            setLoading(false);
        } catch (error) {
            console.error("Erro ao carregar dados:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loadingData])

    return (
        <Box width="100%" height="500px">
            <LineChart
                dataset={dataset}
                xAxis={[{ dataKey: 'mes', label: 'Mês', scaleType: 'band' }]}
                series={produtos.map(produto => ({
                    dataKey: produto,
                    label: produto,
                    strokeWidth: 2
                }))}
                height={300}
            />
        </Box>
    );
}