import React from 'react'
import avatar from '../assets/images/avatar.jpg'
import { useContext } from 'react'
import { ModalContext } from '../utils/context/ModalProvider'
import CallToActionBtn from './CallToActionBtn'

const About = () => {
  // Récupération des données grâce au contexte
  const { openContactModal } = useContext(ModalContext)

  return (
    <section id="about" className="homepage-section about">
      <div className="layout">
        <img className="about__avatar" src={avatar} alt="avatar" />
        <div className="about__container">
          <h1 className="homepage-section__title">
            Barbara ALVAREZ | Développeuse Web Junior
          </h1>
          <div className="about__introduction">
            <p>
              Dotée de 7 ans d'expérience en contrôle de gestion, j'ai développé
              un goût prononcé pour <em>l'optimisation et l'automatisation</em>{' '}
              de processus en concevant des tableaux de bord sur Excel.
            </p>
            <p>
              Aujourd'hui en <em>reconversion vers le développement web</em>, je
              suis déterminée à mettre mes compétences au service de
              l'expérience utilisateur en créant des{' '}
              <em>interfaces modernes et intuitives</em> avec React.
            </p>
            <p>
              Mon objectif : consolider ma formation en <em>alternance</em>,
              pour devenir développeuse web confirmée.
            </p>
          </div>
          <div>
            <p>Vous souhaitez que l'on travaille ensemble ? </p>
            <CallToActionBtn
              onClick={openContactModal}
              label="Contactez-moi"
              mod="contact"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
