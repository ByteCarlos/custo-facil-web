import './style.css'
const Login = () => {
    return (
        <div className="container-login">
            <div className='quadrado1'>.</div>
            <div className="quadrado2">.</div>
            <div className="quadrado4">.</div>
            <div className="quadrado3">.</div>
            
            <div className="container-logo">
                <h1>SEDUC</h1>
                <img src="src/pages/Login/img/educacaosergipe_logo.png" alt="" />
            </div>
            <div className="container-form-login">
                <div className="header-tittle">
                    <h1>Login</h1>
                </div>

                <form action="">
                    <div className="content-input">
                        <label htmlFor="email-text">Email</label>
                        <input type="email" name="email-text" id="email-text" required />
                    </div>
                    <div className="content-input">
                        <label htmlFor="password-text">Senha</label>
                        <input type="password" name="password-text" id="password-text" required />
                    </div>
                    <div className='form-button'>
                        <button type="submit">Entrar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login