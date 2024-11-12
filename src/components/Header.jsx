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
      <nav className="header__navbar">
        <ul className="navlinks">
          <li>
            <HashLink to="/#top" className="navlinks__link">
              Barbara ALVAREZ
            </HashLink>
          </li>
          <li>
            <HashLink to="/#skills" className="navlinks__link">
              Compétences
            </HashLink>
          </li>
          <li>
            <HashLink to="/#portfolio" className="navlinks__link">
              Réalisations
            </HashLink>
          </li>
          <li>
            <HashLink to="/#training" className="navlinks__link">
              Parcours
            </HashLink>
          </li>
          <li>
            <button onClick={openContactModal} className="navlinks__link">
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
