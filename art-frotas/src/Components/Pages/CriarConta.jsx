import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CriarConta() {
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState({ nomeUsuario: '', senha: '' });

    const handleCreateAccount = (e) => {
        e.preventDefault()
        localStorage.setItem('usuario', JSON.stringify(usuario));
        navigate('/login');
    };

    return (
        <div>
            <h2>Criar Conta</h2>
            <form onSubmit={handleCreateAccount}>
                <label>
                    Nome de Usuário:
                    <input
                        type="text"
                        value={usuario.nomeUsuario}
                        onChange={(e) => setUsuario({ ...usuario, nomeUsuario: e.target.value })}
                        required
                    />
                </label>
                <br />
                <label>
                    Senha:
                    <input
                        type="password"
                        value={usuario.senha}
                        onChange={(e) => setUsuario({ ...usuario, senha: e.target.value })}
                        required
                    />
                </label>
                <br />
                <button type="submit">Criar Conta</button>
            </form>
        </div>
    );
}

export default CriarConta;