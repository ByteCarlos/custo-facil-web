import { createContext, useState, ReactNode } from 'react';

// Definindo o formato das informações do usuário
interface User {
  name: string;
  email: string;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

// Criando o contexto com um valor inicial (user: null, setUser: vazio)
export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});

// Criando o provider que irá envolver o aplicativo e fornecer os dados do usuário
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
