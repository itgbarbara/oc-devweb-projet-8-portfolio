import React from 'react'
// import { NavLink, Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Header = () => {
  return (
    <header className="header">
      <nav className="header__navbar">
        <ul className="navlinks">
          <HashLink to="/#about">
            <li>Présentation</li>
          </HashLink>
          <HashLink to="/#skills">
            <li>Compétences</li>
          </HashLink>
          <HashLink to="/#portfolio">
            <li>Portfolio</li>
          </HashLink>
          <HashLink to="/#contact">
            <li>Contact</li>
          </HashLink>
        </ul>
      </nav>
    </header>
  )
}

export default Header
