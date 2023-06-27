import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verificar se as senhas correspondem
    if (password !== confirmPassword) {
      console.error('As senhas não correspondem');
      // Adicione aqui o tratamento de erro, exibindo uma mensagem de erro ou redirecionando para uma página de erro
      return;
    }

    // Realizar o registro do usuário usando a API
    try {
      const newUser = {
        nome: name,
        email: email,
        senha: password,
      };

      const response = await fetch('http://localhost:3001/cliente', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        history.push('/login'); // Redirecionar para a rota de login após o registro bem-sucedido
      } else {
        console.error('Erro ao registrar o usuário:', response.status);
        // Adicione aqui o tratamento de erro, exibindo uma mensagem de erro ou redirecionando para uma página de erro
      }
    } catch (error) {
      console.error('Erro ao registrar o usuário:', error);
      // Adicione aqui o tratamento de erro, exibindo uma mensagem de erro ou redirecionando para uma página de erro
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <h1>Criar Conta</h1>
        <label htmlFor="name" className="form-label">Nome:</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email:</label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Senha:</label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="confirmPassword" className="form-label">Confirmar Senha:</label>
        <input
          type="password"
          className="form-control"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
      </div>
        <p>
          <Link to="/login">
            Voltar
          </Link>
        </p>
      <button type="submit" className="btn btn-primary">Registrar</button>
    </form>
  );
};

export default RegisterForm;
