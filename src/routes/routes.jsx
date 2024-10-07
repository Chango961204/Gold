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
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/funcionamiento" element={<Funcionamiento />} />
      <Route path="/preguntas" element={<Preguntas />} />
      <Route path="/precios" element={<Precios />} />
      <Route path="/venta" element={<Venta />} />
    </Routes>
  );
}


export default AppRoutes;
