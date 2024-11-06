import React from 'react'
import { useContext } from 'react'
import { ModalContext } from '../../utils/context/ModalProvider'

const ContactSection = () => {
  // Récupération des données grâce au contexte
  const { openContactModal } = useContext(ModalContext)

  return (
    <section id="contact" className="homepage-section">
      <span>Vous souhaitez me confier un projet ?</span>
      <button onClick={openContactModal}>Ecrivez-moi !</button>
    </section>
  )
}

export default ContactSection
