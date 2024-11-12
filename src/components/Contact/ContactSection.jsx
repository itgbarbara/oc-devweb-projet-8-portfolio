// Hooks
import { useContext } from 'react'

// Context
import { ModalContext } from '../../utils/context/ModalProvider'

// Components
import CallToActionBtn from '../CallToActionBtn'

//

const ContactSection = () => {
  // Récupération de la fonction d'ouverture de la modale de contact grâce au contexte
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
