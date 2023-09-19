import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FaixaCarros from '../../assets/imagens/faixa-decor.png';
import './Login.css';

function Login() {
    const navigate = useNavigate();
    const [credenciais, setCredenciais] = useState({ email: '', nomeUsuario: '', senha: '' });

    const handleLogin = (e) => {
        e.preventDefault();

        console.log("evento", e);

        const storedUser = JSON.parse(localStorage.getItem('usuario'));
        if (
            storedUser.email === credenciais.email &&
            storedUser.nomeUsuario === credenciais.nomeUsuario &&
            storedUser.senha === credenciais.senha
        ) {
            localStorage.setItem('isLogged', true);
            alert("Login bem sucedido");
            navigate('/')
        } else {
            alert("Credenciais inválidas. Tente novamente.");
        }
    }

    return (         
            <div className="retangulo-pai">
            <div className="faixa-carro">
                    <img src={FaixaCarros} />
                </div>
                
                <div className="retangulo-filho">
                    <h2>ART Frotas</h2>
                    <h3>Faça seu login abaixo</h3>
                    <form onSubmit={handleLogin}>
                        <div>
                            <label className="label-form-login">
                                E-mail:
                                <input className="input-form-login"
                                    type="email"
                                    value={credenciais.email}
                                    onChange={(e) => setCredenciais({ ...credenciais, email: e.target.value })}
                                    required
                                >
                                </input>
                            </label>
                            <label className="label-form-login">
                                Nome de usuário:
                                <input className="input-form-login"
                                    type="text"
                                    value={credenciais.nomeUsuario}
                                    onChange={(e) => setCredenciais({ ...credenciais, nomeUsuario: e.target.value })}
                                    required
                                >
                                </input>
                            </label>
                            <label className="label-form-login">
                                Senha:
                                <input className="input-form-login"
                                    type="password"
                                    value={credenciais.senha}
                                    onChange={(e) => setCredenciais({ ...credenciais, senha: e.target.value })}
                                    required
                                >
                                </input>
                            </label>
                        </div>
                        <div className="botao-fazer-login"><button type="submit">Login</button></div>
            </form>
                </div >
            </div >
        
    );
}

export default Login;