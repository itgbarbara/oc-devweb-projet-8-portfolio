import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCards = ({ projects }) => {
  return (
    <div className="cards-grid">
      {projects.map((project) => (
        <Link
          className="card-link"
          to={`/project/${project.id}`}
          key={project.id}
        >
          <article className="card">
            <div className="card__overlay">
              <p className="card__description">{project.description}</p>
              <ul className="card__tags">
                {project.tags.map((tag) => (
                  <li key={`${tag}-${project.id}`}>{tag}</li>
                ))}
              </ul>
            </div>
            <img
              className="card__img"
              src={project.cover}
              alt={project.title}
            />
            <h2 className="card__title">{project.title}</h2>
          </article>
        </Link>
      ))}
    </div>
  )
}

export default ProjectCards
