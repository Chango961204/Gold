// src/App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import AppRoutes from './routes/routes';
import Footer from './components/Footer'; // Importa el componente Footer
import './App.css';
import './styles/styles.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <AppRoutes />
        </main>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
