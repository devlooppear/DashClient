import imgHome from "../assets/img/undraw_coffee_with_friends_3cbj (1).svg"
import { Link } from "react-router-dom/cjs/react-router-dom.min"

function Home(){
    return(
        <div className="home-page">
            <h1>DashClient</h1>
            <h3>Este é um exemplo de Dashboard em uma Aplicação React com Vite</h3>
            <img src={imgHome} alt="Café com amigos" /><br></br>
            <Link to="/dashboard"><button type="button" className="btn btn-dark">Conferir Dados</button></Link>
        </div>
    )
}

export default Home