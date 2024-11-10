import React from 'react'

const Skill = ({ skill }) => {
  return (
    <div className="tech-container">
      {skill.techs.map((tech) => (
        <figure key={`${tech.name}`} className="skillcard__tech tech">
          {' '}
          <img
            className="tech__logo"
            src={tech.logo}
            alt={`logo ${tech.name}`}
          />
          <figcaption className="tech__name">{tech.name}</figcaption>
        </figure>
      ))}
    </div>
  )
}

export default Skill
