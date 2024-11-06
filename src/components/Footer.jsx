import React from 'react'
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
