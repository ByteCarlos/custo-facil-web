import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import { UserProvider } from './context/UserContext'; // Importando o UserProvider
import ProtectedRoute from './pages/components/ProtectedRoute';

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="App">
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
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
