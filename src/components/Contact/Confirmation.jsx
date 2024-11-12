// Librairies externes
import Modal from 'react-modal'

//

const Confirmation = ({ isOpen, isClosing, closeModal, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Confirmation"
      className={`confirmation__wrapper${
        isOpen && !isClosing
          ? ' confirmation__wrapper--show'
          : ' confirmation__wrapper--hide'
      }`}
      overlayClassName={`confirmation__background${
        isOpen && isClosing
          ? ' confirmation__background--show'
          : ' confirmation__background--hide'
      }`}
    >
      <div className="modal__content">{children}</div>
    </Modal>
  )
}

export default Confirmation
