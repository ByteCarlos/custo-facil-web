import './Home.css'

export default function Home () {
    return (
        <div className="content-container home-container">
            <div className='home-title'>
                <h1>BEM-VINDO AO SEDUC</h1>
            </div>
            <div className='home-table'>
                <table>
                    <div className='table-title'>
                        <tr>
                            <div className='th-left'>
                                <th>Nome da ação</th>
                            </div>
                            <div className='th-right'>
                                <th>Nome</th>
                                <th>Data</th>
                            </div>
                        </tr>
                    </div>
                    <tr>
                        <td>ola</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}