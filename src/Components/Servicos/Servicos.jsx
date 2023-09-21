// src/components/Inicio.js
import React from 'react';
import './Servicos.css';
import AgendeHorarioDiv from '../AgendeHorarioDiv/AgendeHorarioDiv';

function Servicos() {
  return (
    <>
      <div className="bannerServicos">
        <div className="container-servicos-banner">
          <div className="text-banner-servicos">
            <h1>Na busca pelo estilo perfeito, a nossa barbearia é o seu melhor aliado.</h1>
            <div className="button-banner-servicos">
              <button>AGENDE</button>
            </div>
          </div>
        </div>
      </div>
      <div className="servicos">
        <div className="container-servicos">
          <div className="text-servicos">
            <h3>Serviços</h3>
            <h1>Nossos Serviços Exclusivos de Cuidados com o Estilo.</h1>
          </div>
          <div className="tipos-servicos">
            <div>
              <h3>Corte de cabelo</h3>
              <p>Corte Masculino com Shampoo e Secagem <br />
                Corte Feminino com Shampoo e Estilo<br />
                Cabeça Raspar: Um Visual Ousado<br />
                Cabelo Artístico: Estilo Personalizado<br />
                Kiddie Cut: Cortes Infantis com Diversão<br />
                Kiddie Cut com Shampoo: Cuidados Especiais para Crianças
              </p>
            </div>
            <div>
              <h3>Estilo de Cabelo</h3>
              <p>Transforme seu Visual com o Poder do Shampoo <br />
                Blow Dry: Estilo que Fica Impresso<br />
                Cabelo Liso e Sedoso com Ferro<br />
                Brasileiro Blow Out: Experiência de Salão Exclusiva
              </p>
            </div>
            <div>
              <h3>Cor de Cabelo</h3>
              <p>Mude Sua Aparência com Cores de Cabelo Vibrantes<br />
                Cores Orgânicas para um Visual Natural<br />
                Destaque-se com Mechas Personalizadas<br />
                Cuide da sua Barba e Bigode com Estilo
              </p>
            </div>
            <div>
              <h3>Cuidado Capilar</h3>
              <p>Revitalize Seu Cabelo com Tratamento Especial<br />
                Máscara de Cura Intensa: Cabelo Nutrido e Hidratado<br />
                Reparação Total do Cabelo: Recupere a Vitalidade<br />
                Terapia de Controle de Caspa: Um Couro Cabeludo Saudável<br />
                Esfoliação e Crescimento Capilar para um Visual Espetacular
              </p>
            </div>
            <div>
              <h3>Depilação</h3>
              <p>Raspe com Precisão para um Visual Impecável<br />
                Barba e Bigode Aparados com Arte<br />
                Depilação Profissional: Sobrancelhas, Bigode e Mais<br />
                Sobrancelhas Modeladas para Destacar Seu Rosto<br />
                Disfarce Cabelos Grisalhos com Técnica Profissional<br />
              </p>
            </div>
            <div>
              <h3>Serviços de Estilista</h3>
              <p>Corte Masculino com Estilo e Conforto<br />
                Corte Feminino com Toque de Elegância<br />
                Secagem e Estilo Personalizado para Elas e Eles<br />
                Maquiagem para Realçar sua Beleza Natural
              </p>
            </div>
          </div>
        </div>
      </div>
      <AgendeHorarioDiv />
    </>
  );
}

export default Servicos;
