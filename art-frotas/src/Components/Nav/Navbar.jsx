import { Link } from 'react-router-dom';
import ImagemLogoMaior from '../../assets/imagens/logo-af-maior.png';
import './Navbar.css';

function Navbar() {
  return (
    <nav className='main-nav'>
      <ul className='nav-links'>
      <li>
      <Link to='/'><img src={ImagemLogoMaior} alt="logo do site" /></Link>
        </li>
        
        <li>
          <Link to='/sobre'>Sobre</Link>
        </li>
        
        <li>
          <Link to='/listar'>Lista</Link>
        </li>
        <li>
          <Link to='/add'>Adicionar Veículo</Link>
        </li>
        <li>
        <Link to='/criar-conta'>Cadastro</Link>
        </li>
        <div className='botao-login'><button><Link to='/login'>Login</Link></button></div>
      </ul>
      </nav>
  )
}

export default Navbar;
