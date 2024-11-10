import React from 'react'
import { useContext } from 'react'
import { ModalContext } from '../../utils/context/ModalProvider'
import CallToActionBtn from '../CallToActionBtn'

const ContactSection = () => {
  // Récupération des données grâce au contexte
  const { openContactModal } = useContext(ModalContext)

  return (
    <section id="contact" className="homepage-section contact">
      <div className="layout">
        <p>Vous souhaitez me confier un projet ?</p>
        <CallToActionBtn
          onClick={openContactModal}
          label="Ecrivez-moi !"
          mod="contact"
        />
      </div>
    </section>
  )
}

export default ContactSection
