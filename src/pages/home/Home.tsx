import { useEffect, useState } from 'react';
import './Home.scss'
import { getApplicationLogs, LogData } from '../../services/logs/getLogs';
import converterData from '../../utils/converterData';

interface HomeProps {
    setLoading: (loading: boolean) => void;
    setLoadingText: (text: string) => void;
}

export default function Home({ setLoading, setLoadingText }: HomeProps) {
    const [loadingData, setLoadingData] = useState(false);
    const [logs, setLogs] = useState<LogData[]>([]);

    const fetchData = async () => {
        if (loadingData)
            return;
        try {
            setLoadingData(true);
            setLoading(true);
            const result = await getApplicationLogs();
            setLogs(result.data);
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
        <div className="content-container home-container">
            <div className='home-title'>
                <h1>BEM-VINDO AO SEDUC CUSTOS</h1>
            </div>
            <div className="home-subtitle">Históricos de atividades</div>
            <div className='home-table'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Ação</th>
                            <th>Usuário</th>
                            <th>Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        {logs.map((log) => (
                            <tr>
                                <td>{log.action.name}</td>
                                <td>{log.user !== null ? log.user.name : null}</td>
                                <td>{converterData(log.log_timestamp)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}