import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import { UserProvider } from './context/UserContext';
import ProtectedRoute from './components/ProtectedRoute';
import CSidebar from './components/sidebar/CSidebar';
import './App.css';
import Header from './components/header/Header';
import Despesas from './pages/despesas/Despesas';
import Competencias from './pages/competencias/Competencias';
import Relatorios from './pages/relatorios/Relatorios';
import Usuarios from './pages/usuarios/Usuarios';

function AppContent() {
  const location = useLocation(); // Hook para pegar a rota atual

  return (
    <>
      {location.pathname !== '/login' && <Header />}
      <main>
        {location.pathname !== '/login' && <CSidebar />}
        <Routes>
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>}/>
          <Route path="/despesas" element={<ProtectedRoute><Despesas /></ProtectedRoute>}/>
          <Route path="/competencias" element={<ProtectedRoute><Competencias /></ProtectedRoute>}/>
          <Route path="/relatorios" element={<ProtectedRoute><Relatorios /></ProtectedRoute>}/>
          <Route path="/usuarios" element={<ProtectedRoute><Usuarios /></ProtectedRoute>}/>
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      
    </>
  );
}

export default function App() {
  return (
    <UserProvider>
      <Router>
        <AppContent /> {/* Componente que usa o useLocation dentro do Router */}
      </Router>
    </UserProvider>
  );
}
