import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import ReactGA from "react-ga4";
import Navbar from "./componentes/NavBar/Navbar"; // Importa el Navbar
import Programas from "./componentes/Programas/Programas";
import Noticias from "./componentes/Noticias/Noticias";
import Candidatos from "./componentes/Candidatos/Candidatos";
import Inicio from "./componentes/Inicio/Inicio";
import Contacto from "./componentes/Contacto/Contacto";

// Componente para rastrear vistas de página
const PageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return null; // No renderiza nada
};

function App() {
  useEffect(() => {
    // Inicializa Google Analytics con tu ID de medición
    ReactGA.initialize("G-2JKJ4SZ87H"); // Reemplaza con tu ID de medición
  }, []);

  return (
    <Router>
      {/* Rastreador de páginas dentro del Router */}
      <PageTracker />
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} /> {/* Ruta predeterminada */}
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/programas" element={<Programas />} />
        <Route path="/candidatos" element={<Candidatos />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/contacto" element={<Contacto />} />

      </Routes>
    </Router>
  );
}

export default App;
