import { Link } from 'react-router-dom'
import './../styles/pages/errorpage.scss'
import Footer from '../components/footer'

function ErrorPage() {
  return (
    <>
    <div className='errorpage'>
    <h1>404</h1>
    <p>Oups! La page que vous demandez n'existe pas.</p>
    <Link to="/">Retourner sur la page d’accueil</Link>
    </div>
    <Footer />
    </>
  )
}

export default ErrorPage