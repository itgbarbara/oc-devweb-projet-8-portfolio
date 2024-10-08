import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const ProjectCards = () => {
  // Déclaration d'une variable d'état
  const [projects, setProjects] = useState([])

  // Simulation appel API
  useEffect(() => {
    fetch('/data/projects.json').then((response) =>
      response
        .json()
        .then((projects) => {
          setProjects(projects)
        })
        .catch((err) => {
          console.log('Error: ', err)
        })
    )
  }, [])

  return (
    <div className="cards-grid">
      {projects.map((project) => (
        <Link
          className="card-link"
          to={`/project/${project.id}`}
          key={project.id}
        >
          <article className="card">
            <div className="card__overlay"></div>
            <img
              className="card__img"
              src={project.cover}
              alt={project.title}
            />
            <h2 className="card__title">{project.title}</h2>
            <p className="card__description">{project.description}</p>
          </article>
        </Link>
      ))}
    </div>
  )
}

export default ProjectCards
