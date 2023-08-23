import { Link } from 'react-router-dom';
import ImagemLogoMaior from '../assets/imagens/logo-af-maior.png';
import './Navbar.css';

function Navbar() {
 return (
  <nav className='main-nav'>
   <ul className='nav-links'>
    <li>
     <Link to='#'>Home</Link>
    </li>
    <li>
     <Link><img src={ImagemLogoMaior} alt="logo do site" /></Link>
    </li>
    <li>
     <Link to='#'>Login</Link>
    </li>

   </ul>
   
 </nav>
 )
}

export default Navbar;
