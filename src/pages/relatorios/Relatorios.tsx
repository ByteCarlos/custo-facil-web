import './Relatorios.css';

interface RelatoriosProps {
    setLoading: (loading: boolean) => void;
    setLoadingText: (text: string) => void;
}

export default function Relatorios ({ setLoading, setLoadingText }: RelatoriosProps) {
    return (
        <div className="content-container relatorios-container">
            Olá! Eu sou a tela de relatórios.
            {/* Façam o JSX da tela aqui! */}
        </div>
    );
}