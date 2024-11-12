// Icônes Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

//

const TrainingCard = ({ data, layout }) => {
  return (
    <div className={layout}>
      {data.map((training) => (
        <article key={`training-card-${training.id}`} className="training-card">
          <h3 className="training-card__title">{training.position}</h3>
          <div className="training-card__en-tete">
            <p className="training-card__en-tete--category">
              {training.category}
            </p>
            &#903;
            <p className="training-card__en-tete--period">{training.period}</p>
            &#903;
            {training.organization && (
              <div className="training-card__organization">
                <img
                  src={training.organization.logo}
                  alt={`logo ${training.organization.name}`}
                  className="training-card__organization--logo"
                />
                <a
                  className="training-card__organization--url"
                  href={training.organization.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="training-card__organization--name">
                    {training.organization.name}
                  </span>
                  <FontAwesomeIcon icon={faLink} />
                </a>
              </div>
            )}
          </div>
          <div className="training-card__description">
            {training.description.map((item) => (
              <p>{item}</p>
            ))}
          </div>
        </article>
      ))}
    </div>
  )
}

export default TrainingCard
