import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FaixaCarros from '../../assets/imagens/faixa-decor.png';
import './Login.css';

function CriarConta() {
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState({ email: '', nomeUsuario: '', senha: '' });

    const handleCreateAccount = (e) => {
        e.preventDefault()
        localStorage.setItem('usuario', JSON.stringify(usuario));
        navigate('/login');
    };

    return (
        <div className="retangulo-pai">
            <div className="faixa-carro">
                    <img src={FaixaCarros} />
                </div>
            <div className="retangulo-filho">
                <h2>ART Frotas</h2>
                <h3>Faça seu cadastro abaixo</h3>
                <form onSubmit={handleCreateAccount}>
                    <div>
                        <label>
                            E-mail:
                            <input
                                type="email"
                                value={usuario.email}
                                onChange={(e) => setUsuario({ ...usuario, email: e.target.value })}
                                required
                            />
                        </label>

                        <label>
                            Nome de Usuário:
                            <input
                                type="text"
                                value={usuario.nomeUsuario}
                                onChange={(e) => setUsuario({ ...usuario, nomeUsuario: e.target.value })}
                                required
                            />
                        </label>
                        
                        <label>
                            Senha:
                            <input
                                type="password"
                                value={usuario.senha}
                                onChange={(e) => setUsuario({ ...usuario, senha: e.target.value })}
                                required
                            />
                        </label>
                    </div>
                    
                    <div className="botao-fazer-login"><button type="submit">Criar Conta</button></div>
                </form>
            </div>
        </div>
    );
}

export default CriarConta;