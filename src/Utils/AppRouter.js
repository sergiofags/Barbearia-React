// src/components/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../Components/NavBar/Navbar.jsx';
import Footer from '../Components/Footer/Footer.jsx';
import Inicio from '../Components/Inicio/Inicio.jsx';
import QuemSomos from '../Components/QuemSomos/QuemSomos.jsx';
import Servicos from '../Components/Servicos/Servicos.jsx';
import AgendeHorario from '../Components/AgendeHorario/AgendeHorario.jsx';
import ContateNos from '../Components/ContateNos/ContateNos.jsx';

function AppRouter() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/quemsomos" element={<QuemSomos />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/agende" element={<AgendeHorario />} />
          <Route path="/contato" element={<ContateNos />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default AppRouter;
