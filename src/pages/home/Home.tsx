import './Home.css'

interface HomeProps {
    setLoading: (loading: boolean) => void;
    setLoadingText: (text: string) => void;
}

export default function Home ({ setLoading, setLoadingText }: HomeProps) {
    return (
        <div className="content-container home-container">
            Olá! Eu sou a tela inicial.
            {/* Façam o JSX da tela aqui! */}
        </div>
    )
}