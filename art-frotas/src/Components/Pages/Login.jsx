import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){
    const navigate = useNavigate();
    const [credenciais, setCredenciais] = useState({ email: '', nomeUsuario: '', senha: ''});

    const handleLogin = (e) => {
        e.preventDefault();

        console.log("evento", e);

        const storedUser = JSON.parse(localStorage.getItem('usuario'));
        if( 
            storedUser.email === credenciais.email && 
            storedUser.nomeUsuario === credenciais.nomeUsuario &&
            storedUser.senha === credenciais.senha
        ){
            localStorage.setItem('isLogged', true);
            alert("Login bem sucedido");
            navigate('/')
        }else {
            alert("Credenciais inválidas. Tente novamente.");
        }
    }

    return(
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <label>
                    E-mail:
                    <input
                        type="email"
                        value={credenciais.email}
                        onChange={(e) => setCredenciais({ ...credenciais, email: e.target.value })}
                        required
                    >
                    </input>
                </label>
                <label>
                    Nome de usuário:
                    <input
                        type="text"
                        value={credenciais.nomeUsuario}
                        onChange={(e) => setCredenciais({ ...credenciais, nomeUsuario: e.target.value })}
                        required
                    >
                    </input>
                </label>
                <label>
                    Senha:
                    <input
                        type="password"
                        value={credenciais.senha}
                        onChange={(e) => setCredenciais({ ...credenciais, senha: e.target.value })}
                        required
                    >
                    </input>
                </label>
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;