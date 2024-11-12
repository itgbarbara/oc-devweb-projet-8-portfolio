// Hooks
import { useState, useEffect } from 'react'

// Components
import SkillCards from './SkillCards'

//

const SkillsSection = () => {
  // Déclaration d'une variable d'état pour stocker les compétences
  const [skills, setSkills] = useState([])

  // Simulation appel API
  useEffect(() => {
    fetch('/data/skills.json').then((response) =>
      response
        .json()
        .then((skills) => {
          setSkills(skills)
        })
        .catch((err) => {
          console.log('Error: ', err)
        })
    )
  }, [])

  return (
    <section id="skills" className="homepage-section skills">
      <div className="layout">
        <h2 className="homepage-section__title">Compétences</h2>
        <SkillCards data={skills} layout="skillcards-layout" />
      </div>
    </section>
  )
}

export default SkillsSection
