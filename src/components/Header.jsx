// Hooks
import { useContext } from 'react'
// Librairies externes
import { HashLink } from 'react-router-hash-link'
// Context
import { ModalContext } from '../utils/context/ModalProvider'

//

const Header = () => {
  // Récupération de la fonction d'ouverture de la modale de contact grâce au contexte
  const { openContactModal } = useContext(ModalContext)

  return (
    <header className="header">
      <div className="layout">
        <nav className="header__navbar">
          <ul className="navlinks">
            <HashLink to="/#top" className="navlinks__link">
              <li>Barbara ALVAREZ</li>
            </HashLink>
            <HashLink to="/#skills" className="navlinks__link">
              <li>Compétences</li>
            </HashLink>
            <HashLink to="/#portfolio" className="navlinks__link">
              <li>Réalisations</li>
            </HashLink>
            <HashLink to="/#training" className="navlinks__link">
              <li>Parcours</li>
            </HashLink>
            <button onClick={openContactModal} className="navlinks__link">
              <li>Contact</li>
            </button>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
