import { BarChart } from '@mui/x-charts';
import { Box } from '@mui/material';
import { getCustosPorDepartamento, DepartamentoData } from '../../../services/reports/getCustosPorDepartamento';
import { useEffect, useState } from 'react';
import { prepareCustosPorDepartamento } from '../utils/prepareDataset';

interface CustosPorDepartamentoProps {
    setLoading: (loading: boolean) => void;
    setLoadingText: (text: string) => void;
}

export default function CustosPorDepartamento({ setLoading, setLoadingText }: CustosPorDepartamentoProps) {
    const [data, setData] = useState<DepartamentoData[]>([]);
    const [loadingData, setLoadingData] = useState(false);
    const dataset = prepareCustosPorDepartamento(data);

    const fetchData = async () => {
        if (loadingData)
            return;
        try {
            setLoadingData(true);
            setLoading(true);
            const result = await getCustosPorDepartamento();
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
    }, [loadingData]);

    return (
        <Box width="100%" height="300px">
            <BarChart
                dataset={dataset}
                xAxis={[{ scaleType: 'band', dataKey: 'departamento', label: 'Departamento' }]}
                series={[
                    // { dataKey: 'Material', label: 'Material' },
                    // { dataKey: 'Operacionais', label: 'Operacionais' },
                    // { dataKey: 'Tecnologia', label: 'Tecnologia' },
                    // { dataKey: 'Pessoal', label: 'Pessoal' },
                    { dataKey: 'Energia', label: 'Energia' },
                    { dataKey: 'Agua', label: 'Água' },
                    { dataKey: 'Manutencao', label: 'Manutenção' },
                ]}
                height={300}
            />
        </Box>
    );
}