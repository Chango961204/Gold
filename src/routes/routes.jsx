import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home'; // Verifica esta ruta
import About from '../pages/About'; // Verifica esta ruta
import Contact from '../pages/Contact'; // Verifica esta ruta
import Funcionamiento from '../pages/Funcionamiento';
import Preguntas from '../pages/Preguntas';
import Venta from '../pages/Venta';
import Precios from '../pages/Precios';

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
