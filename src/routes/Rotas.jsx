import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import Home from '../components/Home';
import Dashboard from '../Dashboard';
import RegisterForm from '../components/RegisterForm';
import NoPage from '../components/NoPage';

const queryClient = new QueryClient(); // Crie uma instância do QueryClient

function Rotas() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <LoginForm />
          </Route>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/registro">
            <RegisterForm />
          </Route>
          <Route path="*">
            <NoPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default Rotas;
