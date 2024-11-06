import React from 'react'
import Modal from 'react-modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const Modale = ({ isModalOpen, closeModal, modalTitle, children }) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel="Formulaire de contact"
      className={'modal__wrapper'}
      overlayClassName={'modal__background'}
    >
      <div className="modal__content">
        <div className="modal__close-btn">
          <button onClick={closeModal}>
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
