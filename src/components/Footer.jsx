import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="legal">
        <p className="legal__copyright">
          &#169; 2024 | Barbara ALVAREZ | Tous droits réservés
        </p>
        <div className="legal__notices">
          <Link to="">
            <p>Mentions légales</p>
          </Link>
          <Link to="">
            <p>Plan du site</p>
          </Link>
          <a
            href="https://github.com/itgbarbara/oc-devweb-projet-8-portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            Code du site
          </a>
        </div>
      </div>
      <div className="icons">
        <a
          href="https://github.com/itgbarbara"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faSquareGithub} className="icons__logo" />
        </a>
        <a
          href="https://www.linkedin.com/in/itgbarbara/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className="icons__logo" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
