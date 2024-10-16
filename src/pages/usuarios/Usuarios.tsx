import './Usuarios.css';

interface UsuariosProps {
    setLoading: (loading: boolean) => void;
    setLoadingText: (text: string) => void;
}

export default function Usuarios ({ setLoading, setLoadingText }: UsuariosProps) {
    return (
        <div className="content-container usuarios-container">
            Olá! Eu sou a tela de usuários.
            {/* Façam o JSX da tela aqui! */}
        </div>
    );
}