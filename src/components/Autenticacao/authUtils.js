// authUtils.js

export const authenticateUser = async (email, password) => {
    try {
      const response = await fetch('http://localhost:3001/cliente');
      const data = await response.json();
  
      const user = data.find((user) => user.email === email && user.senha === password);
  
      return !!user;
    } catch (error) {
      console.error('Erro ao autenticar o usuário:', error);
      throw new Error('Erro ao autenticar o usuário');
    }
  };
  