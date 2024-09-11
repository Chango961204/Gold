import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home'; // Verifica esta ruta
import About from '../pages/About'; // Verifica esta ruta
import Contact from '../pages/Contact'; // Verifica esta ruta

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default AppRoutes;
