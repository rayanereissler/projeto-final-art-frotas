import { Link } from 'react-router-dom';
import '../Footer/Footer.css';

import LogoMenor from '../../assets/imagens/logo-af-menor.png';
import Facebook from '../../assets/imagens/facebook.png';
import Instagram from '../../assets/imagens/instagram.png';
import Linkedin from '../../assets/imagens/linkedin.png';
import Telegram from '../../assets/imagens/telegram.png';



function Footer() {
 return (
 <div className='div-pai'>
  <div className='footer'>
   <div className='logo-menor'><img src={LogoMenor} alt="" /></div>
   <div className='icones-footer'>
    <ul>
     <li><Link><img src={Facebook} alt="icone doffacebook " /></Link></li>
     <li><Link><img src={Instagram} alt="icone do instagram" /></Link></li>
     <li><Link><img src={Linkedin} alt="icone do linkedin" /></Link></li>
     <li><Link><img src={Telegram} alt="icone do telegram" /></Link></li>
    </ul>
   </div>
  </div>
  <div className='copy'>
   <p>© ALICERCE | FOCO - Projeto Educacional desenvolvido por Rayane Reissler.</p>
  </div>
 </div>
 )
}

export default Footer;