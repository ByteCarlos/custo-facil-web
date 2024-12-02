import CustosPorDepartamento from './components/CustosPorDepartamento';
import TendenciaDeCusto from './components/TendenciaDeCusto';
import ExportPdf from './components/ExportPdf';
import { PDFDownloadLink } from '@react-pdf/renderer';
import './Relatorios.scss';

interface RelatoriosProps {
    setLoading: (loading: boolean) => void;
    setLoadingText: (text: string) => void;
}

export default function Relatorios({ setLoading, setLoadingText }: RelatoriosProps) {
    return (
        <div className="content-container">
            <div className="relatorio-download">
                <PDFDownloadLink
                    document={<ExportPdf setLoading={setLoading} setLoadingText={setLoadingText} />}
                    fileName="relatorio_despesas.pdf"
                >
                    <button>Exportar PDF</button>
                </PDFDownloadLink>
            </div>

            <div className='relatorios-container'>
                <div className="report-view-small">
                    <div className="report-title">Custos por departamento</div>
                    <CustosPorDepartamento setLoading={setLoading} setLoadingText={setLoadingText} />
                </div>
                <div className="report-view-large">
                    <div className="report-title">Tendência de Custo</div>
                    <TendenciaDeCusto departmentId={1} setLoading={setLoading} setLoadingText={setLoadingText} />
                </div>
            </div>
        </div>
    );
}
