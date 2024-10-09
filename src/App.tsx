import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import { UserProvider } from './context/UserContext';
import ProtectedRoute from './pages/components/ProtectedRoute';
import CSidebar from './components/sidebar/CSidebar';
import './App.css';
import Header from './components/header/Header';

function AppContent() {
  const location = useLocation(); // Hook para pegar a rota atual

  return (
    <>
      {location.pathname !== '/login' && <Header />}
      <main>
        {location.pathname !== '/login' && <CSidebar />}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
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
