import React from 'react';
import { Router } from 'wouter';
import Navbar from './components/NavBar.jsx';
import AppRoutes from './routes/routes.jsx';
import Footer from './components/Footer.jsx'; 
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
