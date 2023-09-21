import React from 'react';
import './Inicio.css';
import imagemUm from '../../Images/InicioServicos.png';
import imagemDois from '../../Images/InicioAgende.png';

function Inicio() {
  return (
    <>
      <div className="banner">
        <div className="container-inicio-banner">
          <div className="text-banner-inicio">
            <h1>Mais do que apenas um corte de cabelo.</h1>
            <p>Entre, sente-se, relaxe e saia com um novo estilo!</p>
            <div className="button-banner-inicio">
              <button>SERVIÇOS</button>
              <button>AGENDE</button>
            </div>
          </div>
        </div>
      </div>
      <div className="servicos-inicio">
        <div className="container-inicio-servicos">
          <div className="text-inicio-servicos">
            <h3>Serviços</h3>
            <h1>Atualize o seu estilo.</h1>
            <p>Nossos serviços incluem cortes de cabelo personalizados que refletem sua personalidade e estilo único, barbas bem cuidadas que acentuam a sua masculinidade e tratamentos de cabelo que revitalizam e refrescam. Além disso, oferecemos uma experiência de barbear relaxante e revigorante que deixa a sua pele suave e renovada.</p>
            <div className="button-inicio-servicos">
              <button>VER SERVIÇOS</button>
              <button className='button-inicio-dois'>AGENDE</button>
            </div>
          </div>
          <div className="image-inicio-servicos">
            <img src={imagemUm} alt="" />
          </div>
        </div>
      </div>
      <div className="agende-inicio">
        <div className="container-inicio-agende">
          <div className="image-inicio-agende">
            <img src={imagemDois} alt="" />
          </div>
          <div className="text-inicio-agende">
            <h3>Agende um horário</h3>
            <h1>Programe a sua autoestima!</h1>
            <p>Agende o seu horário hoje mesmo e garanta o atendimento exclusivo que você merece. Basta preencher o formulário de agendamento online ou entrar em contato conosco e escolher o horário que melhor se adapta à sua agenda. Estamos ansiosos para recebê-lo em breve e cuidar do seu estilo como ninguém mais pode fazer. Reserve agora e prepare-se para uma experiência de beleza e bem-estar incomparável.</p>
            <div className="button-inicio-agende">
              <button>AGENDE AGORA</button>
              <button className='button-inicio-dois'>VER SERVIÇOS</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Inicio;
