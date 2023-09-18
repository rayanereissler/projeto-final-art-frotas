import './Home.css';

import Carrousel from '../Carrousel/Carrousel';
import ChevroletOnix from '../../assets/imagens/Chevrolet-Onix.jpg';
import HyundaiHb20 from '../../assets/imagens/hyundai-hb20.jpg';
import JeepRenegade from '../../assets/imagens/Jeep-Renegade.jpg';
import PicapeToro from '../../assets/imagens/picape-toro.jpg';
import RenaultLogan from '../../assets/imagens/renault-logan.jpg';
import VwGol from '../../assets/imagens/vw-gol.jpg';
import iconPorta from '../../assets/imagens/porta.png';
import iconVolante from '../../assets/imagens/volante.png';
import iconPassageiro from '../../assets/imagens/passageiro.png';
import iconModelo from '../../assets/imagens/modelo.png';
import iconCambio from '../../assets/imagens/cambio.png';
import iconAr from '../../assets/imagens/ar.png';


export const Home = () => {
 return (
  <div>
   < Carrousel />

   <div className='cards-pai'>

    <div className='card-unit'>
     <div className='imagem'><img src={ChevroletOnix} />
      <div className='modelo-nome'><h2>Chevrolet Onix</h2></div>
     </div>
     <div className='list-container'>
      <ul className='list'>
       <li> <img src={iconPorta} /> <p>4 Portas</p></li>
       <li> <img src={iconPassageiro} /> <p>5 Passageiros</p></li>
       <li> <img src={iconAr} /> <p>Ar Condicionado</p></li>
       <li> <img src={iconCambio} /> <p>Manual</p></li>
       <li> <img src={iconVolante} /> <p>Hidráulica</p></li>
       <li> <img src={iconModelo} /> <p>Hatch</p></li>
      </ul>
     </div>
    </div>

    <div className='card-unit'>
     <div className='imagem'><img src={HyundaiHb20} />
      <div className='modelo-nome'><h2>Hyundai Hb20</h2></div>
     </div>
     <div className='list-container'>
      <ul className='list'>
       <li> <img src={iconPorta} /> <p>4 Portas</p></li>
       <li> <img src={iconPassageiro} /> <p>5 Passageiros</p></li>
       <li> <img src={iconAr} /> <p>Ar Condicionado</p></li>
       <li> <img src={iconCambio} /> <p>Manual</p></li>
       <li> <img src={iconVolante} /> <p>Hidráulica</p></li>
       <li> <img src={iconModelo} /> <p>Hatch</p></li>
      </ul>
     </div>
    </div>

    <div className='card-unit'>
     <div className='imagem'><img src={JeepRenegade} />
      <div className='modelo-nome'><h2>Jeep Renegade</h2></div>
     </div>
     <div className='list-container'>
      <ul className='list'>
       <li> <img src={iconPorta} /> <p>4 Portas</p></li>
       <li> <img src={iconPassageiro} /> <p>5 Passageiros</p></li>
       <li> <img src={iconAr} /> <p>Ar Condicionado</p></li>
       <li> <img src={iconCambio} /> <p>Automático</p></li>
       <li> <img src={iconVolante} /> <p>Elétrica</p></li>
       <li> <img src={iconModelo} /> <p>SUV</p></li>
      </ul>
     </div>
    </div>
    
    <div className='card-unit'>
     <div className='imagem'><img src={PicapeToro} />
      <div className='modelo-nome'><h2>Fiat Toro</h2></div>
     </div>
     <div className='list-container'>
      <ul className='list'>
       <li> <img src={iconPorta} /> <p>4 Portas</p></li>
       <li> <img src={iconPassageiro} /> <p>5 Passageiros</p></li>
       <li> <img src={iconAr} /> <p>Ar Condicionado</p></li>
       <li> <img src={iconCambio} /> <p>Automático</p></li>
       <li> <img src={iconVolante} /> <p>Elétrica</p></li>
       <li> <img src={iconModelo} /> <p>Picape</p></li>
      </ul>
     </div>
    </div>

    <div className='card-unit'>
     <div className='imagem'><img src={RenaultLogan} />
      <div className='modelo-nome'><h2>Renault Logan</h2></div>
     </div>
     <div className='list-container'>
      <ul className='list'>
       <li> <img src={iconPorta} /> <p>4 Portas</p></li>
       <li> <img src={iconPassageiro} /> <p>5 Passageiros</p></li>
       <li> <img src={iconAr} /> <p>Ar Condicionado</p></li>
       <li> <img src={iconCambio} /> <p>Automático</p></li>
       <li> <img src={iconVolante} /> <p>Hidráulica</p></li>
       <li> <img src={iconModelo} /> <p>Sedan</p></li>
      </ul>
     </div>
    </div>

    <div className='card-unit'>
     <div className='imagem'><img src={VwGol} />
      <div className='modelo-nome'><h2>volkswagen Gol</h2></div>
     </div>
     <div className='list-container'>
      <ul className='list'>
       <li> <img src={iconPorta} /> <p>4 Portas</p></li>
       <li> <img src={iconPassageiro} /> <p>5 Passageiros</p></li>
       <li> <img src={iconAr} /> <p>Ar Condicionado</p></li>
       <li> <img src={iconCambio} /> <p>Automático</p></li>
       <li> <img src={iconVolante} /> <p>Hidráulica</p></li>
       <li> <img src={iconModelo} /> <p>Hatch</p></li>
      </ul>
     </div>
    </div>



   </div>
  </div>

 )
}

