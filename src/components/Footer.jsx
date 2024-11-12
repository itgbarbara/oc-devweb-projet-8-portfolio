// Icônes Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

//

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        &#169; 2024 | Barbara ALVAREZ | Tous droits réservés
      </p>
      <div className="footer__icons">
        <a
          href="https://github.com/itgbarbara"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="hidden">Profil GitHub</p>
          <FontAwesomeIcon icon={faSquareGithub} className="footer__logo" />
        </a>
        <a
          href="https://www.linkedin.com/in/itgbarbara/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="hidden">Profil Linkedin</p>
          <FontAwesomeIcon icon={faLinkedin} className="footer__logo" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
