import './Despesas.css';

interface DespesasProps {
    setLoading: (loading: boolean) => void;
    setLoadingText: (text: string) => void;
}

export default function Despesas ({ setLoading, setLoadingText }: DespesasProps) {
    return (
        <div className="content-container despesas-container">
            Olá! Eu sou a tela de despesas.
            {/* Façam o JSX da tela aqui! */}
        </div>
    );
}