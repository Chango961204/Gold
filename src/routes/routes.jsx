import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home.jsx'; 
import About from '../pages/About.jsx'; 
import Contact from '../pages/Contact.jsx'; 
import Funcionamiento from '../pages/Funcionamiento.jsx';
import Preguntas from '../pages/Preguntas.jsx';
import Venta from '../pages/Venta.jsx';
import Precios from '../pages/Precios.jsx';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Funcionamiento" element={<Funcionamiento />} />
      <Route path="/Preguntas" element={<Preguntas />} />
      <Route path="/Precios" element={<Precios />} />
      <Route path="/Venta" element={<Venta />} />
    </Routes>
  );
}

export default AppRoutes;
