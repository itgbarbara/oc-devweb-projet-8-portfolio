// Librairies externes
import { Link } from 'react-router-dom'

//

const ProjectCards = ({ data }) => {
  return (
    <div className="cards-layout">
      {data.map((project) => (
        <Link
          className="card-link"
          to={`/project/${project.id}`}
          key={`project-card-${project.id}`}
        >
          <article className="card">
            <div className="card__overlay">
              <p className="card__description">{project.about}</p>
              <ul className="card__tags">
                {project.tags.map((tag) => (
                  <li key={`${tag}-${project.id}`}>{tag}</li>
                ))}
              </ul>
            </div>
            <img
              className="card__img"
              src={project.pictures[0]}
              alt={`Couverture ${project.title}`}
            />
            <h3 className="card__title">{project.title}</h3>
          </article>
        </Link>
      ))}
    </div>
  )
}

export default ProjectCards
