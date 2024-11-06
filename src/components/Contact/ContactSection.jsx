import React from 'react'
import ContactForm from './ContactForm'
import Modale from '../Modal'
import { useState } from 'react'

const ContactSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <section id="contact" className="homepage-section">
      <span>Vous avez un projet ?</span>
      <button onClick={openModal}>Ecrivez-moi !</button>
      <Modale
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        modalTitle={'Contact'}
      >
        {' '}
        <ContactForm />
      </Modale>
    </section>
  )
}

export default ContactSection
