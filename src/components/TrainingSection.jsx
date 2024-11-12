// Hooks
import { useState, useEffect } from 'react'
// Components
import TrainingCard from './TrainingCard'

//

const TrainingSection = () => {
  const [training, setTraining] = useState([]) // Tableau qui contiendra les projets

  // Simulation appel API
  useEffect(() => {
    fetch('/data/training.json').then((response) =>
      response
        .json()
        .then((training) => {
          setTraining(training)
        })
        .catch((err) => {
          console.log('Error: ', err)
        })
    )
  }, [])

  return (
    <section id="training" className="homepage-section training">
      <div className="layout">
        <h2 className="homepage-section__title">Parcours</h2>
        <TrainingCard data={training} layout="training-layout" />
        <p>
          Si vous souhaitez en savoir plus sur mon parcours, consultez ma page{' '}
          <a
            href="https://www.linkedin.com/in/itgbarbara/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </p>
      </div>
    </section>
  )
}

export default TrainingSection
