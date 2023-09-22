import React, { useState } from 'react';
import './ContateNos.css';
import emailjs from '@emailjs/browser';
import AgendeHorarioDiv from '../AgendeHorarioDiv/AgendeHorarioDiv';
import { Link } from 'react-router-dom';

function ContateNos() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [assunto, setAssunto] = useState('')

  function sendEmail(e){
    e.preventDefault();

    if(name === '' || email === '' || message === '') {
      alert('PREENCHA TODOS OS CAMPOS');
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
      assunto: assunto
    }

    emailjs.send('service_071rsjl', 'template_5dyxu17', templateParams, 'YQJ_DiOPhKMQYfdfZ')
    .then((response) => {
      console.log('EMAIL ENVIADO', response.status, response.text);
      setName('')
      setEmail('')
      setMessage('')
    }, (err) => {
      console.log('ERRO: ', err);
    })
  }

  return (
    <>
      <div className="bannerContateNos">
        <div className="container-contatenos-banner">
          <div className="text-banner-contatenos">
            <h1>Contate-nos para saber mais!</h1>
            <div className="button-banner-contatenos">
              <Link className='light-button' to="/servicos"><button>SERVIÇOS</button></Link>
              <Link className='light-button' to="/agende"><button>AGENDE</button></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="contatenos">
      <div className="container-contatenos">
        <div className="text-contatenos">
          <h3>Contate-nos</h3>
          <h1>Fale Conosco: Estamos Aqui para Você!</h1>
        </div>
        <div className="formulario-contatenos">
          <form className="form" onSubmit={sendEmail}>
            <div className="forms-linha-um">
              <input 
                className="input-contatenos"
                type="text"
                placeholder="Digite seu nome"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            
              <input 
                className="input-contatenos"
                type="text"
                placeholder="Digite o assunto"
                onChange={(e) => setAssunto(e.target.value)}
                value={assunto}
              />
            </div>
            <div className="forms-linha-dois">
              <textarea 
                className="textarea"
                placeholder="Digite sua mensagem..."
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
            </div>
            <div className="forms-linha-tres">
              <input 
                className="input-contatenos"
                type="text"
                placeholder="Digite seu email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />

              <button className="button-forms-contatenos" type="submit">ENVIAR</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <AgendeHorarioDiv />
    </>
  );
}

export default ContateNos;
