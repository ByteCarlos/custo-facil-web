import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './home';   // Supondo que o componente Home está em ./Home.tsx
import Login from './login/Login'; // Supondo que o componente Login está em ./Login.tsx

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Definindo a rota para a página de login */}
          <Route path="/login" element={<Login />} />

          {/* Definindo a rota para a página inicial (home) */}
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
