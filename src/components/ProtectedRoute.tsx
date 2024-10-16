import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext'; // Importando o contexto

// O componente ProtectedRoute recebe o componente que deve ser protegido
const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { user } = useContext(UserContext); // Acessando o usuário do contexto

  // Se o usuário estiver autenticado, renderiza o componente
  // Se não estiver, redireciona para a página de login
  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
