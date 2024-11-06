import React from 'react'
import avatar from '../assets/images/avatar.jpg'
import { useContext } from 'react'
import { ModalContext } from '../utils/context/ModalProvider'

const About = () => {
  // Récupération des données grâce au contexte
  const { openContactModal } = useContext(ModalContext)

  return (
    <section id="about" className="homepage-section about">
      <img className="about__avatar" src={avatar} alt="avatar" />
      <div>
        <h1 className="homepage-section__title">
          Barbara ALVAREZ | Développeuse Web Junior
        </h1>
        <p>Bienvenue sur mon portfolio en ligne !</p>
        <p>
          Je recherche actuellement un stage ou une alternance de 2 ans en
          développement frontend, axé sur la librairie React.
        </p>
        <p>
          Vous souhaitez que l'on travaille ensemble ?{' '}
          <button onClick={openContactModal}>Contactez-moi !</button>
        </p>
      </div>
    </section>
  )
}

export default About
