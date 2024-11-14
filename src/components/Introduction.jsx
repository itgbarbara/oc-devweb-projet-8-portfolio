// Assets
import avatar from '../assets/images/avatar.jpg'
// Hooks
import { useContext } from 'react'
// Context
import { ModalContext } from '../utils/context/ModalProvider'

//

const Introduction = () => {
  // Récupération de la fonction d'ouverture de la modale de contact grâce au contexte
  const { openContactModal } = useContext(ModalContext)

  return (
    <section id="introduction" className="homepage-section introduction">
      <img className="avatar" src={avatar} alt="avatar" />
      <div className="about">
        <h1 className="homepage-section__title homepage-section__title--about">
          Barbara ALVAREZ | Développeuse Web Junior
        </h1>
        <div className="about__introduction">
          <p>
            Dotée de 7 ans d'expérience en contrôle de gestion, j'ai développé
            un goût prononcé pour <em>l'optimisation et l'automatisation</em> de
            processus en concevant des tableaux de bord sur Excel.
          </p>
          <p>
            Aujourd'hui en reconversion dans le domaine du{' '}
            <em>développement web</em>, je suis déterminée à mettre mes
            compétences au service de l'expérience utilisateur en créant des{' '}
            <em>interfaces modernes et intuitives</em> avec React.
          </p>
          <p>
            Mon objectif : <em>consolider ma formation en alternance</em>, pour
            devenir développeuse web confirmée.
          </p>
        </div>
        <div className="about__call-to-action">
          <p>Vous souhaitez que l'on travaille ensemble ? </p>
          <button
            onClick={openContactModal}
            className={`cta-btn cta-btn--about`}
          >
            Contactez-moi
          </button>
        </div>
      </div>
    </section>
  )
}

export default Introduction
