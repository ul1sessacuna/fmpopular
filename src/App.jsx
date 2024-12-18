import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componentes/NavBar/Navbar';  // Importa el Navbar
import Programas from './componentes/Programas/Programas';
import Noticias from './componentes/Noticias/Noticias';
import Inicio from './componentes/Inicio/Inicio';
import Contacto from './componentes/Contacto/Contacto';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/programas" element={<Programas />} />
        <Route path="/noticias" element={<Noticias />} />

        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
}

export default App;
