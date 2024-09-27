// src/App.jsx
import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Navbar from './components/NavBar.jsx';
import AppRoutes from './routes/routes';
import Footer from './components/Footer'; // Importa el componente Footer
import './App.css';
import './styles/styles.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';



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
