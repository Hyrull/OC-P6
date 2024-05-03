import { Link } from 'react-router-dom'
import './../styles/pages/errorpage.scss'

function ErrorPage() {
  return (
    <div className='errorpage'>
    <h1>404</h1>
    <p>Oups! La page que vous demandez n'existe pas.</p>
    <Link to="/">Retourner sur la page d’accueil</Link>
    </div>
  )
}

export default ErrorPage