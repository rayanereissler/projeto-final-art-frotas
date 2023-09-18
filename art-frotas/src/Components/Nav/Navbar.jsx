import { Link } from 'react-router-dom';
import ImagemLogoMaior from '../../assets/imagens/logo-af-maior.png';
import './Navbar.css';

function Navbar() {
  return (
    <nav className='main-nav'>
      <ul className='nav-links'>
      <li>
          <Link><img src={ImagemLogoMaior} alt="logo do site" /></Link>
        </li>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='#'>Sobre</Link>
        </li>
        
        <li>
          <Link to='/listar'>Listar Veículo</Link>
        </li>
        <li>
          <Link to='/add'>Adicionar Veículo</Link>
        </li>
        <li>
          <button className='botao-login'><Link to='/login'>Login</Link></button>
              </li>

      </ul>

    </nav>
  )
}

export default Navbar;
