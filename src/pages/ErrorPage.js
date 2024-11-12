// Librairies externes
import { Link } from 'react-router-dom'
// Components
import Layout from '../components/Layout'

//

const ErrorPage = () => {
  return (
    <Layout>
      <h1>Erreur 404</h1>
      <Link to="/">Retour à la page d'accueil</Link>
    </Layout>
  )
}

export default ErrorPage
