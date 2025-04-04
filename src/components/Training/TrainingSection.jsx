// Hooks
import { useState, useEffect } from 'react'
// Components
import TrainingCards from './TrainingCards'

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
      <h2 className=" homepage-section__title homepage-section__title--training">
        Parcours
      </h2>
      <TrainingCards data={training} />
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
    </section>
  )
}

export default TrainingSection
