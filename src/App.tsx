import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import { OrbitProgress } from 'react-loading-indicators';
import { UserProvider } from './context/UserContext';
import ProtectedRoute from './components/ProtectedRoute';
import CSidebar from './components/sidebar/CSidebar';
import './App.css';
import Header from './components/header/Header';
import Despesas from './pages/despesas/Despesas';
import Competencias from './pages/competencias/Competencias';
import Relatorios from './pages/relatorios/Relatorios';
// import Usuarios from './pages/usuarios/Usuarios';
import { useState } from 'react';

function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(false); // se true o loading aparece
  const [loadingText, setLoadingText] = useState(""); // define qual texto aparece no loading

  return (
    <>
      {/* Componente global de loading */}
      {loading && (
        <div className="loading-overlay">
          <OrbitProgress variant="track-disc" dense color="#4753D9" size="large" text={loadingText} textColor="#4753D9" />
        </div>
      )}

      {/* Cabeçalho do sistema */}
      {location.pathname !== '/login' && <Header />}
      <main>
        {/* Dashboard ou sidebar do sistema */}
        {location.pathname !== '/login' && <CSidebar />}

        {/* Rotas de cada tela */}
        <Routes>
          <Route path="/" element={<ProtectedRoute><Home setLoading={setLoading} setLoadingText={setLoadingText} /></ProtectedRoute>}/>
          <Route path="/despesas" element={<ProtectedRoute><Despesas setLoading={setLoading} setLoadingText={setLoadingText} /></ProtectedRoute>}/>
          <Route path="/monthly-period" element={<ProtectedRoute><Competencias setLoading={setLoading} setLoadingText={setLoadingText} /></ProtectedRoute>}/>
          <Route path="/relatorios" element={<ProtectedRoute><Relatorios setLoading={setLoading} setLoadingText={setLoadingText} /></ProtectedRoute>}/>
          {/* TELA INDISPONÍVEL <Route path="/usuarios" element={<ProtectedRoute><Usuarios setLoading={setLoading} setLoadingText={setLoadingText} /></ProtectedRoute>}/> */}
          <Route path="/login" element={<Login setLoading={setLoading} setLoadingText={setLoadingText} />} />
        </Routes>
      </main>
    </>
  );
}

export default function App() {
  return (
    <UserProvider>
      <Router>
        <AppContent />
      </Router>
    </UserProvider>
  );
}
