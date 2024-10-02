import React from 'react';
import ReactDOM from 'react-dom/client'; // Cambia el import a 'react-dom/client'
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 

// Usa createRoot en lugar de render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
