import { useQuery } from 'react-query';
import axios from 'axios';
import userImg from './assets/img/user-img.png';
import { useHistory } from 'react-router-dom';

const API_URL = 'http://localhost:6900'; // Altere para a URL correta da sua API

function Dashboard() {
  const history = useHistory();

  const { data, error, isLoading } = useQuery('client-data', async () => {
    try {
      const response = await axios.get(`${API_URL}/tickets`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to load client data.');
    }
  });

  function openSidebar() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.add('sidebar-responsive');
  }

  function closeSidebar() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.remove('sidebar-responsive');
  }

  function handleLogout() {
    history.push('/login');
  }

  return (
    <div className="grid-container">
      {/* -- Header --> */}
      <header className="header">
        <div className="menu-icon" onClick={openSidebar}>
          <span className="material-icons-outlined">menu</span>
        </div>
        <div className="header-left">
          <span className="material-icons-outlined">search</span>
        </div>
        <div className="header-right">
          <span className="material-icons-outlined">notifications</span>
          <span className="material-icons-outlined">email</span>
          <span className="material-icons-outlined">account_circle</span>
        </div>
      </header>
      {/*-- End Header -->*/}

      {/*-- Sidebar -->*/}
      <aside id="sidebar">
        <div className="sidebar-title">
          <div className="sidebar-brand">
            <span className="material-icons-outlined">fact_check</span> CLIENTES
          </div>
          <span className="material-icons-outlined" onClick={closeSidebar}>close</span>
        </div>
        <img src={userImg} alt="imagem-usuario" />
        <ul className="sidebar-list">
          <li className="sidebar-list-item">
            <a href="#" target="_blank">
              <span className="material-icons-outlined">dashboard</span> Dashboard
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="#" target="_blank">
              <span className="material-icons-outlined">inventory_2</span> Cliente
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="#" target="_blank">
              <span className="material-icons-outlined">category</span> Categorias
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="#" target="_blank">
              <span className="material-icons-outlined">groups</span> Social
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="#" target="_blank">
              <span className="material-icons-outlined">fact_check</span> Atualizações
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="#" target="_blank">
              <span className="material-icons-outlined">list_alt</span> Chamados
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="#" onClick={handleLogout}>
              <span className="material-icons-outlined">logout</span>
              Logout
            </a>
          </li>
        </ul>
      </aside>
      {/*-- End Sidebar -->*/}

      {/*-- Main -->*/}
      <main className="main-container">
        <div className="main-title">
          <h2>DASHBOARD</h2>
        </div>

        <div className="main-cards">
          {isLoading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error.message}</p>
          ) : (
            <>
              {data && data.length > 0 ? (
                data.map((ticket) => (
                  <div className="card" key={ticket.id}>
                    <div className="card-inner">
                      <h2>INFO TICKET</h2>
                      <span className="material-icons-outlined">groups</span>
                    </div>
                    <section>
                      <p>
                        <strong>ID: </strong>
                        {ticket.id}
                      </p>
                      <p>
                        <strong>Nome: </strong>
                        {ticket.contact.name}
                      </p>
                      <p>
                        <strong>Id Wpp: </strong>
                        {ticket.whatsappId}
                      </p>
                      <p>
                        <strong>Criação: </strong>
                        {ticket.createdAt}
                      </p>
                      <p>
                        <strong>Última Atualização: </strong>
                        {ticket.updatedAt}
                      </p>
                      <p>
                        <strong>Status: </strong>
                        {ticket.status}
                      </p>
                      <p>
                        <strong>Grupo: </strong>
                        {ticket.isGroup ? 'Sim' : 'Não'}
                      </p>
                      <p>
                        <strong>Telefone: </strong>
                        {ticket.contact.number}
                      </p>
                      <p>
                        <strong>Status Chat: </strong>
                        {ticket.statusChatEnd}
                      </p>
                    </section>
                  </div>
                ))
              ) : (
                <p>Nenhum dado encontrado.</p>
              )}
            </>
          )}
        </div>
      </main>
      {/*-- End Main -->*/}
    </div>
  );
}

export default Dashboard;
