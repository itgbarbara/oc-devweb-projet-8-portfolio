// Librairies externes
import { Link } from 'react-router-dom'
// Components
import Layout from '../components/Layout'

//

const ErrorPage = () => {
  return (
    <Layout>
      <div className="error">
        <div>
          <h1 className="error__title">Erreur 404</h1>
          <p>La page que vous recherchez n'existe pas !</p>
          <Link to="/">Retour à la page d'accueil</Link>
        </div>
      </div>
    </Layout>
  )
}

export default ErrorPage
