import './Competencias.css';

interface CompetenciasProps {
    setLoading: (loading: boolean) => void;
    setLoadingText: (text: string) => void;
}

export default function Competencias ({ setLoading, setLoadingText }: CompetenciasProps) {
    return (
        <div className="content-container competencias-container">
            Olá! Eu sou a tela de competências.
            {/* Façam o JSX da tela aqui! */}
        </div>
    );
}