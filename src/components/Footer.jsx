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
        </div>
      </div>
      <div className="icons">
        <Link to="https://github.com/itgbarbara" target="_blank">
          <FontAwesomeIcon icon={faSquareGithub} className="icons__logo" />
        </Link>
        <Link to="https://www.linkedin.com/in/itgbarbara/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} className="icons__logo" />
        </Link>
      </div>
    </footer>
  )
}

export default Footer
