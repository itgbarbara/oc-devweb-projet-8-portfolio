// Components
import Collapse from '../Collapse'
// Icônes Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

//

const TrainingCards = ({ data }) => {
  return (
    <div className="training-cards-container">
      {data.map((training) => (
        <article key={`training-card-${training.id}`} className="training-card">
          <h3 className="training-card__title">{training.position}</h3>
          <div className="training-card__subtitle">
            <p className="training-card__category">{training.category}</p>
            <p className="training-card__period">{training.period}</p>
            {training.organization && (
              <div className="training-card__organization organization">
                <a
                  className="organization__url"
                  href={training.organization.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={training.organization.logo}
                    alt={`logo ${training.organization.name}`}
                    className="organization__logo"
                  />
                  <span className="organization__name">
                    {training.organization.name}
                  </span>
                  <FontAwesomeIcon icon={faLink} />
                </a>
              </div>
            )}
          </div>
          <div className="training-card__description">
            {training.description.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
          {/* {training.more && (
            <Collapse label="plus">
              {training.more.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </Collapse>
          )} */}
        </article>
      ))}
    </div>
  )
}

export default TrainingCards
