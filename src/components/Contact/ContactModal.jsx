// Hooks
import { useContext } from 'react'
// Components
import Modale from '../Modal'
import ContactForm from './ContactForm'
// Context
import { ModalContext } from '../../utils/context/ModalProvider'

//

const ContactModal = () => {
  const { isContactModalOpen, closeContactModal } = useContext(ModalContext)

  return (
    <Modale
      isOpen={isContactModalOpen}
      closeModal={closeContactModal}
      modalTitle={'Contact'}
    >
      {' '}
      <ContactForm />
    </Modale>
  )
}

export default ContactModal
