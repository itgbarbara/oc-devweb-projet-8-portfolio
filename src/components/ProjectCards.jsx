import React from 'react'
import projects from '../data/projects.json'

const ProjectCards = () => {
  return (
    <div>
      {projects.map((project) => (
        <article>
          <img src={project.cover} alt={project.title} />
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </article>
      ))}
    </div>
  )
}

export default ProjectCards
