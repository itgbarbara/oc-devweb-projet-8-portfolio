import React from 'react'
import avatar from '../assets/images/avatar.jpg'

const About = () => {
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
          développement frontend
        </p>
      </div>
    </section>
  )
}

export default About
