import './Competencias.css';

interface CompetenciasProps {
    setLoading: (loading: boolean) => void;
    setLoadingText: (text: string) => void;
}

export default function Competencias ({ setLoading, setLoadingText }: CompetenciasProps) {
    return (
        <div className="content-container competencias-container">
            <div className="title-comp">
                <h1>Abrir nova competência</h1>
            </div>
            <div className="title-input">
                <div className="input-date">
                    <label htmlFor="open-date">Data de abertura</label>
                    <input type="date" name="open-date" id="open-date"/>
                </div>
                <div className="input-date">
                    <label htmlFor="close-date">Data de fechamento</label>
                    <input type="date" name="close-date" id="close-date"/>
                </div>
            </div>
        </div>
    );
}