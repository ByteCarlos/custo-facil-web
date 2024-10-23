import { FormEvent, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import para redirecionamento
import { UserContext } from '../context/UserContext'; // Certifique-se de que o caminho está correto
import Swal from 'sweetalert2';

interface LoginFormValues {
  email: string;
  pass: string;
}

export const useLogin = () => {
  const { login } = useContext(UserContext); // Pega a função login do contexto
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Hook para redirecionamento

  const handleLoginSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    // Pega os valores do formulário
    const formData = new FormData(event.currentTarget);
    const values: LoginFormValues = {
      email: formData.get('email') as string,
      pass: formData.get('password') as string
    };

    try {
      // Chama a função de login do contexto
      await login(values);

      // Se o login for bem-sucedido, mostrar o alerta de sucesso
      Swal.fire({
        icon: 'success',
        title: 'Login realizado!',
        text: 'Você foi autenticado com sucesso.',
        showConfirmButton: false,
        showCancelButton: false,
        timer: 2000
      }).then(() => {
        // Redireciona para a página inicial após fechar o alerta
        navigate('/');
      });
    } catch (error) {
      // Em caso de erro, exibe um alerta de erro
      Swal.fire({
        icon: 'error',
        title: 'Ocorreu um erro',
        text: 'Falha ao tentar realizar o login. Verifique suas credenciais.',
        showConfirmButton: false,
        showCancelButton: false,
        timer: 3000
      });
    } finally {
      setLoading(false);
    }
  };

  return { handleLoginSubmit, loading };
};
