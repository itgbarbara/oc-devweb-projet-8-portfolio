// Hooks
import { useState } from 'react'
// Icônes Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

//

function Collapse({ label, children }) {
  // Déclaration d'une variable d'état pour gérer l'ouverture du composant
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className={`collapse`}>
      <button
        className="collapse__label label"
        onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
      >
        <h2 className="label__name">{label}</h2>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`label__btn${isOpen ? ' label__btn--rotate' : ''}`}
        />
      </button>
      <div
        className={`collapse__dropdown${
          isOpen ? ' collapse__dropdown--open' : ''
        }`}
      >
        {children}
      </div>
    </div>
  )
}

export default Collapse
