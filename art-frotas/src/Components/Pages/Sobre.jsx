import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Sobre.css';

import FotoPessoal from '../../assets/imagens/autoretrato.jpg'
import Bolas from '../../assets/imagens/bola.png';
import Chapeu from '../../assets/imagens/formatura.png';

function Sobre() {
 return (
  <div>
   <div className='retangulo-pai-sobre'>
    <div className='div-um'>
     <div>
      <div className='foto-pessoal'><img src={FotoPessoal} /></div>
      <h2> CONTATOS</h2>
      <hr />
      <h3>Localização</h3>
      <p>Recife, PE.</p>
      <h3>Contato</h3>
      <p>(81) 9 8590-9098</p>
      <h3>GitHub</h3>
      <a href='https://github.com/rayanereissler' target='_blank'>
       <p>https://github.com/rayanereissler</p>
      </a>
      <h3>Linkedin</h3>
      <a href="https://www.linkedin.com/in/rayanereissler/" target='_blank'>
       <p>https://www.linkedin.com/in/rayanereissler/</p>
      </a>
      <h2>HARD SKILLS</h2>
      <hr />
      <h3>FIGMA</h3>
      <div className='circunferencias'>
       <img src={Bolas} />
       <img src={Bolas} />
       <img src={Bolas} />
       <img src={Bolas} />
      </div>
      <h3>HTML</h3>
      <div className='circunferencias'>
       <img src={Bolas} />
       <img src={Bolas} />
       <img src={Bolas} />
       <img src={Bolas} />
       <img src={Bolas} />
      </div>
      <h3>CSS</h3>
      <div className='circunferencias'>
       <img src={Bolas} />
       <img src={Bolas} />
       <img src={Bolas} />
       <img src={Bolas} />
       <img src={Bolas} />
      </div>
      <h3>JAVASCRIPT</h3>
      <div className='circunferencias'>
       <img src={Bolas} />
       <img src={Bolas} />
       <img src={Bolas} />
       <img src={Bolas} />
      </div>
      <h3>REACT</h3>
      <div className='circunferencias'>
       <img src={Bolas} />
       <img src={Bolas} />
       <img src={Bolas} />
       <img src={Bolas} />
      </div>
      <h3>PYTHON</h3>
      <div className='circunferencias'>
       <img src={Bolas} />
       <img src={Bolas} />
       <img src={Bolas} />
       <img src={Bolas} />
      </div>
      <h3>LÓGICA DE PROGRAMAÇÃO</h3>
      <div className='circunferencias'>
       <img src={Bolas} />
       <img src={Bolas} />
       <img src={Bolas} />
       <img src={Bolas} />
       <img src={Bolas} />
      </div>
      
     </div>
    </div>
    <div className='div-dois'>
     <h1>Rayane Reissler</h1>
     <p>Arquiteta e Urbanista em transição de carreira para a área de TI. Cursando Análise e Desenvolvimento de Sistemas, possui Pós Graduação em Gestão de Projetos e certificados em cursos na área de Front End e Back End.</p>

     <div className='div-img-dois'>
      <img src={Chapeu} />
      <h2>Educação</h2>
     </div>
     <h3>Universidade Mauricio de Nassau</h3>
     <p>Arquitetura e Urbanismo</p>

     <h3>Faculdade Descomplica</h3>
     <p>Gestão de Projetos</p>

     <h3>FBV Wyden</h3>
     <p>Análise e Desenvolvimento de Sistemas</p>

     <h3>CDD 4.0 - Condomínio Digital em Parceira com a Lenovo</h3>
     <p>Lógica de Programação I Python I Banco de Dados I Java | Soft Skills</p>

     <h3>Alicerce Educação em parceira com FOCO Aluguel de Carros</h3>
     <p>Lógica de Programação  I Processos de Negócios BPMN I Metodologias Ágeis I HTML I CSS I JavaScrip | React | Português | Matemática | Redação</p>

     <h3>Faculdade Descomplica</h3>
     <p>Fudamentos de Front End Development</p>


    </div>
   </div>
  </div>
 );
}

export default Sobre;