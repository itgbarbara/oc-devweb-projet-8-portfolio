// Librairies externes
import { Link } from 'react-router-dom'

//

const ProjectCards = ({ data, layout }) => {
  return (
    <div className={layout}>
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
