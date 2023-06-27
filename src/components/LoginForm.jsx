import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { authenticateUser } from './Autenticacao/authUtils';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const isAuthenticated = await authenticateUser(email, password);

      if (isAuthenticated) {
        history.push('/home'); // Redirecionar para a rota "/home" se as informações estiverem corretas e o usuário estiver autenticado
      } else {
        history.push('/'); // Redirecionar para a rota principal ("/") se as informações estiverem incorretas
      }
    } catch (error) {
      console.error('Erro ao autenticar o usuário:', error);
      // Adicione aqui o tratamento de erro, exibindo uma mensagem de erro ou redirecionando para uma página de erro
    }
  };

  return (
    <form className="container mt-4" onSubmit={handleSubmit}>
      <div className="mb-3">
        <h1>Login</h1>
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
      </div>
      <p>Não tem conta? <Link to="/registro">Registre-se aqui</Link></p>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default LoginForm;
