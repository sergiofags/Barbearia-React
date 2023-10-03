import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AgendeHorario.css';

function AgendeHorario() {

  const [name, setName] = useState("");
  const [pagamento, setPagamento] = useState("");
  const [telefone, setTelefone] = useState("");
  const [servico, setServico] = useState("");
  const [observacao, setObservacao] = useState("");
  const [profissional, setProfissional] = useState("");
  const [dia, setDia] = useState("");
  const [horario, setHorario] = useState("");

  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Adiciona um zero à esquerda se for menor que 10
    const day = String(date.getDate()).padStart(2, '0'); // Adiciona um zero à esquerda se for menor que 10
    return `${year}-${month}-${day}`;
  }
  

  function sendForm(e) {
    e.preventDefault();

    fetch('https://api.sheetmonkey.io/form/xyPvoLjEhhNXgyTjYKAGwd', {

      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nome: name,
        pagamento: pagamento,
        telefone: telefone,
        servico: servico,
        observacao: observacao,
        profissional: profissional,
        dia: formatDate(new Date(dia)),
        horario: horario,
      })

    });

    alert("Agendamento realizado com sucesso!");
  }

  return (
    <>
      <div className="bannerAgendeHorario">
        <div className="container-agende-banner">
          <div className="text-banner-agende">
            <h1>Reserve Seu Horário Agora e Viva a Experiência de Estilo!</h1>
            <div className="button-banner-agende">
              <Link className='light-button' to="/servicos"><button>SERVIÇOS</button></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="agende">
      <div className="container-agende">
        <div className="text-agende">
          <h3>Agendamento</h3>
          <h1>Garanta Seu Espaço: Agende Seu Horário e Atualize Seu Estilo!</h1>
        </div>
        <div className="formulario-agende">
          <form name='Barbearia' onSubmit={sendForm}>
            <div className="forms-linha-um-agende">
              <input 
                className="input-agende"
                type="text"
                name='nome'
                onChange={(event) => setName(event.target.value)}
                placeholder="Digite seu nome completo"
              />
              <select className='select-agende' id="pagamento" name="pagamento" onChange={(event) => setPagamento(event.target.value)}>
                <option value="">Forma de pagamento</option>
                <option value="Dinheiro">Dinheiro</option>
                <option value="Cartão">Cartão</option>
                <option value="Pix">Pix</option>
              </select>
            </div>
            <div className="forms-linha-dois-agende">
              <input 
                  className="input-agende"
                  type="text"
                  name='telefone'
                  onChange={(event) => setTelefone(event.target.value)}
                  placeholder="Digite o seu número de telefone"
              />
              <select name='servico' className='select-agende' id="servico" onChange={(event) => setServico(event.target.value)}>
                <option value="servico">Serviço</option>
                <option value="Corte Masculino com Shampoo e Secagem">Corte Masculino com Shampoo e Secagem</option>
                <option value="Corte Feminino com Shampoo e Estilo">Corte Feminino com Shampoo e Estilo</option>
                <option value="Cabeça Raspar: Um Visual Ousado">Cabeça Raspar: Um Visual Ousado</option>
              </select>
            </div>
            <div className="forms-linha-tres-agende">
              <textarea 
                  className="textarea"
                  name='observacao'
                  placeholder="Digite sua observação..."
                  onChange={(event) => setObservacao(event.target.value)}/>
              />
            </div>
            <div className="esolha-o-profissional">
              <p >Escolha o Profissional</p>
              <div className="profissionais">
                <div className="div-p-1">
                  <input className='p-1 input-com-background' type="radio" id="profissional" name="profissional" value="Pedro Martins" onChange={(event) => setProfissional(event.target.value)}/>
                  <p>Pedro Martins</p>
                </div>
                <div className="div-p-2">
                  <input className='p-2 input-com-background' type="radio" id="profissional" name="profissional" value="Diego de Andrade" onChange={(event) => setProfissional(event.target.value)}/>
                  <p>Diego de Andrade</p>
                </div>
                <div className="div-p-3">
                  <input className='p-3 input-com-background' type="radio" id="profissional" name="profissional" value="Gustavo da Silva" onChange={(event) => setProfissional(event.target.value)}/>
                  <p>Gustavo da Silva</p>
                </div>
                <div className="div-p-4">
                  <input className='p-4 input-com-background' type="radio" id="profissional" name="profissional" value="Alex Silva" onChange={(event) => setProfissional(event.target.value)}/>
                  <p>Alex Silva</p>
                </div>
                <div className="div-p-5">
                  <input className='p-5 input-com-background' type="radio" id="profissional" name="profissional" value="Vitor Barbosa" onChange={(event) => setProfissional(event.target.value)}/>
                  <p>Vitor Barbosa</p>
                </div>
              </div>
            </div>
            <div className="forms-linha-quatro-agende">
	            <input type='date' id='dt' name='data' onChange={(event) => setDia(event.target.value)}/>
              <select className='select-agende' id="servico" name="horario" onChange={(event) => setHorario(event.target.value)}>
                <option value="">Horário do serviço</option>
                <option value="08;00">08:00</option>
                <option value="08;30">08:30</option>
                <option value="09;00">09:00</option>
                <option value="09;30">09:30</option>
                <option value="10;00">10:00</option>
                <option value="10;30">10:30</option>
                <option value="11;00">11:00</option>
                <option value="11;30">11:30</option>
                <option value="12;00">13:30</option>
                <option value="14;00">14:00</option>
                <option value="14;30">14:30</option>
                <option value="15;00">15:00</option>
                <option value="15;30">15:30</option>
                <option value="16;00">16:00</option>
                <option value="16;30">16:30</option>
                <option value="17;00">17:00</option>
                <option value="17;30">17:30</option>
              </select>
            </div>
            <div className="forms-linha-cinco-agende">
              <button className="button-forms-agende" type="submit">CONFIRMAR AGENDAMENTO</button>
              <Link to="https://docs.google.com/spreadsheets/d/1Awqr8dYhkrFrAycMIvG9I_d8wpsadUlL0lEyQczfXlo/edit?usp=sharing" target='_blank'><div className="button-forms-agende">ACESSE A PLANILHA</div></Link>
            </div>
            </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default AgendeHorario;
