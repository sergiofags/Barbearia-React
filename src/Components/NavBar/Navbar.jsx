import './NavBar.css'
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/logo.png';

function Navbar() {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <div className='logo'>
              <img src={logo} alt="" />
            </div>
            <div className='links'>
              <ul>
                <li className='link-left'><Link to="/"><div>INICÍO</div></Link></li>
                <li className='link-middle'><Link to="/quemsomos"><div>QUEM SOMOS NÓS?</div></Link></li>
                <li className='link-middle'><Link to="/servicos"><div>SERVIÇOS</div></Link></li>
                <li className='link-middle'><Link to="/agende"><div>AGENDE UM HORÁRIO</div></Link></li>
                <li className='link-right'><Link to="/contato"><div>CONTATE-NOS</div></Link></li>
              </ul>
            </div>
            <div className='social-medias'>
              <ul>
                <li className='social-left'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></li>
                <li className='social-middle'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></li>
                <li className='social-right'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg></li>
              </ul>
            </div>
          </nav>
          
        </div>
      </header>
    </>
  );
}

export default Navbar;

