import { NavLink } from 'react-router-dom'
import logo from './../assets/img/logo.svg'
import './../styles/components/header.scss'
 
function Header() {
    return (
    <header>
      <img src={logo} alt='Logo Kasa'></img>
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">A Propos</NavLink>
      </nav>
    </header>
    )
}

export default Header