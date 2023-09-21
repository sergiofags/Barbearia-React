import React from 'react';
import './QuemSomos.css';
import imageUm from '../../Images/quemsomosUm.png';
import imageDois from '../../Images/quemsomosDois.png';
import imageTres from '../../Images/quemsomosTres.png';
import imageQuatro from '../../Images/quemsomosQuatro.png';
import imageCinco from '../../Images/quemsomosCinco.png';
import imageSeis from '../../Images/quemsomosSeis.png';
import AgendeHorarioDiv from '../AgendeHorarioDiv/AgendeHorarioDiv';

function QuemSomos() {
  return (
    <>
      <div className="bannerQuemSomos">
        <div className="container-quemsomos-banner">
          <div className="text-banner-quemsomos">
            <h1>Aumentando a sua autoestima com estilo!</h1>
            <div className="button-banner-quemsomos">
              <button>SERVIÇOS</button>
              <button>AGENDE</button>
            </div>
          </div>
        </div>
      </div>
      <div className="quemsomos">
        <div className="container-quemsomos">
          <div className="text-quemsomos">
            <h3>Quem somos?</h3>
            <h1>Mudando a vida dos nossos clientes! </h1>
            <p>Somos mais do que uma simples barbearia. Somos um espaço dedicado a elevar a autoestima dos nossos clientes, um lugar onde a arte da barbearia se encontra com a paixão pela excelência. Com anos de experiência e um compromisso inabalável com a qualidade, nossa equipe de barbeiros talentosos e apaixonados é o coração da nossa barbearia. <br /><br />
              Nosso objetivo é simples: proporcionar a você uma experiência única de cuidados pessoais. Desde o momento em que você entra em nossa porta até o momento em que sai com um visual impecável, estamos comprometidos em superar suas expectativas. <br /><br />
              Na nossa barbearia, valorizamos a individualidade. Entendemos que o estilo é uma expressão pessoal e única de quem você é. É por isso que trabalhamos com você para criar looks personalizados que acentuam o seu melhor. E, claro, tudo isso acontece em um ambiente descontraído e acolhedor, onde você pode relaxar e aproveitar o momento. <br /><br />
              Somos apaixonados por estilo, mas também somos apaixonados por pessoas. Estamos aqui para ouvir, aconselhar e garantir que você saia daqui não apenas com um visual incrível, mas também com um sorriso no rosto. <br />
              Então, quem somos nós? Somos a sua escolha número um para cuidados com o estilo. Somos a barbearia onde a tradição se encontra com a modernidade, onde a experiência se encontra com a paixão. Estamos aqui para elevar o seu estilo, e estamos ansiosos para recebê-lo.</p> 
          </div>
          <div className="images-quemsomos">
            <img src={imageUm} alt="" />
            <img src={imageDois} alt="" />
            <img src={imageTres} alt="" />
            <img src={imageQuatro} alt="" />
            <img src={imageCinco} alt="" />
            <img src={imageSeis} alt="" />
          </div>
        </div>
      </div>
      <AgendeHorarioDiv />
    </>
  );
}

export default QuemSomos;
