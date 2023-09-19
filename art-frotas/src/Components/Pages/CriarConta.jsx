import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CriarConta.css';

function CriarConta() {
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState({ nomeUsuario: '', senha: '' });

    const handleCreateAccount = (e) => {
        e.preventDefault()
        localStorage.setItem('usuario', JSON.stringify(usuario));
        navigate('/login');
    };

    return (
        <div className='div-pai-criar'>
            <div className='element-pai'>
                <form onSubmit={handleCreateAccount}>
                    <div className='titulo-criar-conta'>
                        <h1>art frotas</h1>
                        <h2>Digite o seu nome de usuário e senha:</h2>
                    </div>


                    <div>
                        <label className="label-form-criar">
                            Nome de Usuário:
                            <input className="input-form-criar"
                                type="text"
                                value={usuario.nomeUsuario}
                                onChange={(e) => setUsuario({ ...usuario, nomeUsuario: e.target.value })}
                                required
                            />
                        </label>
                        <label className="label-form-criar">
                            Senha:
                            <input className="input-form-criar"
                                type="password"
                                value={usuario.senha}
                                onChange={(e) => setUsuario({ ...usuario, senha: e.target.value })}
                                required
                            />
                        </label>
                    </div>

                    <div className='botao-criar-conta'><button type="submit">Criar Conta</button></div>
                </form>
            </div>
        </div>
    );
}

export default CriarConta;