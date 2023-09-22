import React from 'react';
import './AgendeHorarioDiv.css';
import { Link } from 'react-router-dom';

function AgendeHorarioDiv() {
  return (
    <>
      <div className="agendehorario">
        <h1>Agende um horário conosco.</h1>
        <Link className='dark-button' to="/agende"><button>AGENDE</button></Link>
      </div>
    </>
  );
}

export default AgendeHorarioDiv;
