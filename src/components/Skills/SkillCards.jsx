import React from 'react'

const SkillCards = ({ skills }) => {
  return (
    <div className="cards-grid">
      {skills.map((skill) => (
        <article key={skill.id} className="card">
          <h3 className="card__title">{skill.category}</h3>
          {skill.skills.map((skill) => (
            <div>
              <h4>{skill.subcategory}</h4>
              <ul>
                {skill.tech.map((tech) => (
                  <li>{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </article>
      ))}
    </div>
  )
}

export default SkillCards
