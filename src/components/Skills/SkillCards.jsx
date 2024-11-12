// Components
import Tech from './Tech'

//

const SkillCards = ({ data, layout }) => {
  return (
    <div className={layout}>
      {data.map((skill) => (
        <article key={`skill-card-${skill.category}`} className="skillcard">
          <div className="skillcard__content">
            <h3 className="skillcard__title">{skill.category}</h3>
            <Tech skill={skill} />
          </div>
        </article>
      ))}
    </div>
  )
}

export default SkillCards
