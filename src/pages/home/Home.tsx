import './Home.scss'

interface HomeProps {
    setLoading: (loading: boolean) => void;
    setLoadingText: (text: string) => void;
}

export default function Home({ setLoading, setLoadingText }: HomeProps) {
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
                        <tr>
                            <td>Adição de Despesa - Valor: R$ 1.200,00</td>
                            <td>Ana Silva</td>
                            <td>10/10/2024 14:32</td>
                        </tr>
                        <tr>
                            <td>Remoção de Despesa - Valor: R$ 850,00</td>
                            <td>João Souza</td>
                            <td>11/10/2024 09:45</td>
                        </tr>
                        <tr>
                            <td>Adição de Despesa - Valor: R$ 3.500,00</td>
                            <td>Maria Oliveira</td>
                            <td>12/10/2024 16:20</td>
                        </tr>
                        <tr>
                            <td>Remoção de Despesa - Valor: R$ 2.000,00</td>
                            <td>Roberto Lima</td>
                            <td>13/10/2024 11:10</td>
                        </tr>
                        <tr>
                            <td>Adição de Despesa - Valor: R$ 4.200,00</td>
                            <td>Fernanda Costa</td>
                            <td>14/10/2024 13:55</td>
                        </tr>
                        <tr>
                            <td>Remoção de Despesa - Valor: R$ 1.750,00</td>
                            <td>Carlos Pereira</td>
                            <td>15/10/2024 10:30</td>
                        </tr>
                        <tr>
                            <td>Adição de Despesa - Valor: R$ 5.000,00</td>
                            <td>Paula Mendes</td>
                            <td>16/10/2024 17:15</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}