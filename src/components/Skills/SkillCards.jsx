import React from 'react'
import Skill from './Skill'

const SkillCards = ({ data, layout }) => {
  return (
    <div className={layout}>
      {data.map((skill) => (
        <article key={`skill-card-${skill.category}`} className="skillcard">
          <div className="skillcard__content">
            <h3 className="skillcard__title">{skill.category}</h3>
            <Skill skill={skill} />
          </div>
        </article>
      ))}
    </div>
  )
}

export default SkillCards
