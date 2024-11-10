import React from 'react'
import Modal from 'react-modal'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const Modale = ({ isOpen, closeModal, modalTitle, children }) => {
  const [isModalClosing, setIsModalClosing] = useState(false)

  const handleModalClosing = () => {
    setIsModalClosing(true) // Active l'état de fermeture pour jouer l'animation de sortie
    setTimeout(() => {
      setIsModalClosing(false)
      closeModal() // Ferme réellement la modale après l'animation
    }, 500) // La durée de l'animation de sortie (0.5s)
  }

  // Réinitialiser l'état isClosing à chaque ouverture
  useEffect(() => {
    if (isOpen) {
      setIsModalClosing(false)
    }
  }, [isOpen])

  return (
    <Modal
      isOpen={isOpen || isModalClosing}
      onRequestClose={handleModalClosing}
      contentLabel="Formulaire de contact"
      className={`modal__wrapper${
        isOpen && !isModalClosing
          ? ' modal__wrapper--show'
          : ' modal__wrapper--hide'
      }`}
      overlayClassName={`modal__background${
        isOpen && isModalClosing
          ? ' modal__background--show'
          : ' modal__background--hide'
      }`}
    >
      <div className="modal__content">
        <div className="modal__close-btn">
          <button onClick={handleModalClosing}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <h2 className="modal__title">{modalTitle}</h2>
        {children}
      </div>
    </Modal>
  )
}

export default Modale
