import React from 'react'
import Modale from '../Modal'
import ContactForm from './ContactForm'
import { useContext } from 'react'
import { ModalContext } from '../../utils/context/ModalProvider'

const ContactModal = () => {
  // Récupération des données grâce au contexte
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
