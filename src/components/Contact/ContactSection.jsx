// Hooks
import { useContext } from 'react'
// Context
import { ModalContext } from '../../utils/context/ModalProvider'

//

const ContactSection = () => {
  // Récupération de la fonction d'ouverture de la modale de contact grâce au contexte
  const { openContactModal } = useContext(ModalContext)

  return (
    <section id="contact" className="homepage-section contact">
      <h2 className=" homepage-section__title homepage-section__title--contact">
        Contact
      </h2>
      <p>Vous avez un projet ? Discutons-en !</p>
      <button onClick={openContactModal} className={`cta-btn cta-btn--contact`}>
        Ecrivez-moi !
      </button>
    </section>
  )
}

export default ContactSection
