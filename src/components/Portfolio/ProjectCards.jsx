// Librairies externes
import { Link } from 'react-router-dom'

//

const ProjectCards = ({ data }) => {
  return (
    <div className="project-cards-container">
      {data.map((project) => (
        <Link
          className="card-link"
          to={`/project/${project.id}`}
          key={`project-card-${project.id}`}
        >
          <article className="project-card">
            <div className="project-card__overlay">
              <p className="project-card__description">{project.about}</p>
              <ul className="project-card__tags">
                {project.tags.map((tag) => (
                  <li key={`${tag}-${project.id}`}>{tag}</li>
                ))}
              </ul>
            </div>
            <img
              className="project-card__img"
              src={project.pictures[0]}
              alt={`Projet ${project.title}`}
            />
            <h3 className="project-card__title">{project.title}</h3>
          </article>
        </Link>
      ))}
    </div>
  )
}

export default ProjectCards
