// Hooks
import { useState, useEffect } from 'react'
// Icônes Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons'

//

const BackToTopBtn = () => {
  // Déclaration d'une variable d'état pour gérer la visibilité du bouton
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`back-to-top ${isVisible && 'back-to-top--visible'}`}
        >
          <p className="hidden">Haut de page</p>
          <FontAwesomeIcon icon={faArrowUpLong} />
        </button>
      )}
    </div>
  )
}

export default BackToTopBtn
