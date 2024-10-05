import { createContext, useState, ReactNode } from 'react';
import axios from 'axios';

// Definindo o formato das informações do usuário
interface User {
  name: string;
  email: string;
}

interface LoginCredentials {
  email: string;
  password: string;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  login: (credentials: LoginCredentials) => Promise<void>; // Função de login
  logout: () => void;
}

// Criando o contexto com um valor inicial
export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
  login: async () => {},
  logout: () => {}
});

// Criando o provider que irá envolver o aplicativo e fornecer os dados do usuário
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    let userData = localStorage.getItem('user');
    return userData ? JSON.parse(userData) : null;
  });

  // Função de login que usa Axios para autenticação
  const login = async (credentials: LoginCredentials) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/login`, credentials);
      const userData = response.data;

      // Atualiza o contexto com os dados do usuário retornados pela API
      setUser({
        name: userData.name,
        email: userData.email,
      });
      
      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('token', userData.token);
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      throw new Error("Login failed");
    }
  };

  const logout = () => {
    setUser(null); // Limpa as informações do usuário

    // Remover ele do localStorage
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  return (
    <UserContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
