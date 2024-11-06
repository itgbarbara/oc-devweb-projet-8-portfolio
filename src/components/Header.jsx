import React from 'react'
// import { NavLink, Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Header = () => {
  return (
    <header className="header">
      <nav className="header__navbar">
        <ul className="navlinks">
          <HashLink to="/#about" className="navlinks__link">
            <li>Profil</li>
          </HashLink>
          <HashLink to="/#skills" className="navlinks__link">
            <li>Compétences</li>
          </HashLink>
          <HashLink to="/#portfolio" className="navlinks__link">
            <li>Portfolio</li>
          </HashLink>
          {/* <HashLink to="/#training" className="navlinks__link">
            <li>Parcours</li>
          </HashLink> */}
          <HashLink to="/#contact" className="navlinks__link">
            <li>Contact</li>
          </HashLink>
        </ul>
      </nav>
    </header>
  )
}

export default Header
