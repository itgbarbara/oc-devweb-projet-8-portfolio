import React from 'react'
import { useState, useEffect } from 'react'
import SkillCards from './SkillCards'

const SkillsSection = () => {
  const [skills, setSkills] = useState([])

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
