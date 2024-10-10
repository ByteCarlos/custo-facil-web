import { useEffect } from 'react';
import { useLogin } from '../../services/useLogin';
import './Login.css';

interface LoginProps {
    setLoading: (loading: boolean) => void;
    setLoadingText: (text: string) => void;
}

export default function Login ({ setLoading, setLoadingText }: LoginProps) {
    const { handleLoginSubmit, loading } = useLogin();

    useEffect(() => {
        setLoading(loading);
    }, [loading, setLoading])

    return (
        <div className="container-login">
            <div className='quadrado1'>.</div>{/* quadrado1 */}
            <div className="quadrado2">.</div>{/* quadrado2 */}
            <div className="quadrado4">.</div>{/* quadrado4 */}
            <div className="quadrado3">.</div>{/* quadrado3 */}

            <div className="container-logo">
                <h1>SEDUC</h1>
                <div className="container-logo-img">
                    <img src="src/pages/Login/img/educacaosergipe_logo.png" alt="" />
                </div>{/* container-logo-img */}
            </div>{/* container-logo */}
            <div className="container-form-login">
                <div className="header-title">
                    <h1>LOGIN</h1>
                </div>{/* header-tittle */}

                <form action="" onSubmit={handleLoginSubmit}>
                    <div className="content-input">
                        <label htmlFor="email-text">Email</label>
                        <input type="email" name="email" id="email-text" placeholder='Digite seu email' required />
                    </div>{/* content-input */}
                    <div className="content-input">
                        <label htmlFor="password-text">Senha</label>
                        <input type="password" name="password" id="password-text" placeholder='Digite sua senha' required />
                    </div>{/* content-input */}
                    <div className='form-button'>
                        <button type="submit">ENTRAR</button>
                    </div>{/* form-button */}
                </form>
            </div>{/* container-form-login */}
            <div className="container-logo-footer"></div>{/* container-logo-footer */}
        </div> /* container-login */
    )
}