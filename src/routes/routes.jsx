import React from 'react';
import { Route,  } from 'wouter';
import Home from '../pages/Home.jsx'; 
import About from '../pages/About.jsx'; 
import Contact from '../pages/Contact.jsx'; 
import Funcionamiento from '../pages/Funcionamiento.jsx';
import Preguntas from '../pages/Preguntas.jsx';
import Venta from '../pages/Venta.jsx';
import Precios from '../pages/Precios.jsx';

function AppRoutes() {
  return (
    <>
     <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/funcionamiento" component={Funcionamiento} />
      <Route path="/preguntas" component={Preguntas} />
      <Route path="/precios" component={Precios} />
      <Route path="/venta" component={Venta} />
    </>
  );
}


export default AppRoutes;
