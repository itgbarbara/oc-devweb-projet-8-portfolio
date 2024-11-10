import React from 'react'
// import { NavLink, Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { useContext } from 'react'
import { ModalContext } from '../utils/context/ModalProvider'

const Header = () => {
  // Récupération des données grâce au contexte
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
