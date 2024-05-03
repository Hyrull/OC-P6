import { Link } from 'react-router-dom'
import logo from './../assets/img/logo.svg'
import './../styles/components/header.css'
 
function Header() {
    return (
    <header>
      <img src={logo} alt='Logo Kasa'></img>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">A Propos</Link>
      </nav>
    </header>
    )
}

export default Header