// Hooks
import { useContext } from 'react'
// Librairies externes
import { useParams, Navigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
// Context
import { DataContext } from '../utils/context/DataProvider'
// Components
import Layout from '../components/Layout'
import Collapse from '../components/Collapse'
// Icônes Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
  faLink,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

//

const Project = () => {
  // Récupération de l'id qui se trouve dans l'url
  const { id } = useParams()

  // Récupération des projets et de l'état de chargement grâce au contexte
  const { projects, loading } = useContext(DataContext)

  const nbProjects = projects.length

  // Méthode pour trouver l'index de l'élément dont l'id est dans l'url de la fiche projet
  const index = projects.findIndex((project) => project.id === id)

  // Définition des variables
  // const [currentProjectIndex, setCurrentProjectIndex] = useState(index)
  // const [nextProjectIndex, setNextProjectIndex] = useState(
  //   projects[index === nbProjects - 1 ? 0 : index + 1].id
  // )
  // const [previousProject, setPreviousProject] = useState(
  //   projects[index === 0 ? nbProjects - 1 : index - 1].id
  // )

  // Si les données sont toujours en train de charger, afficher une animation de chargement :
  if (loading) {
    return (
      <Layout>
        <div>Chargement...</div>
      </Layout>
    )
  }

  // Si le projet n'existe pas, rediriger l'utilisateur vers la page d'erreur :
  if (!projects[index]) {
    return <Navigate to="/error" replace={true} />
  }

  // Si tout est OK, afficher le projet :
  return (
    <Layout>
      <div className="projectpage">
        <div className="layout">
          <div className="projectpage__topnav topnav">
            <Link
              className="topnav__link"
              to={`/project/${
                projects[index === 0 ? nbProjects - 1 : index - 1].id
              }`}
            >
              <FontAwesomeIcon className="topnav__icon" icon={faChevronLeft} />
              Projet précédent
            </Link>
            <h1 className="project__title">{projects[index].title}</h1>
            <Link
              className="topnav__link"
              to={`/project/${
                projects[index === nbProjects - 1 ? 0 : index + 1].id
              }`}
            >
              Projet suivant
              <FontAwesomeIcon className="topnav__icon" icon={faChevronRight} />
            </Link>
          </div>
          <div className="projectpage__project project">
            <div className="section-1">
              <div className="project__description">
                <p className="project__description--about">
                  {projects[index].about}
                </p>
                <p className="project__description--more">
                  {projects[index].description}
                </p>
              </div>
              <div className="project__gallery">
                <img
                  src={projects[index].pictures[0]}
                  alt={projects[index].title}
                />
              </div>
            </div>
            <div className="section-2">
              <Collapse label="Objectifs">
                <ul className="dropdown__content">
                  {projects[index].objectives.map((objectif) => (
                    <li key={`${objectif}-${projects[index].id}`}>
                      {objectif}
                    </li>
                  ))}
                </ul>
              </Collapse>
              <Collapse label="Compétences développées">
                <ul className="dropdown__content">
                  {projects[index].skills.map((skill) => (
                    <li key={`${skill}-${projects[index].id}`}>{skill}</li>
                  ))}
                </ul>
              </Collapse>
              <Collapse label="Technologies utilisées">
                <ul className="dropdown__content">
                  {projects[index].technos.map((techno) => (
                    <li key={`${techno}-${projects[index].id}`}>{techno}</li>
                  ))}
                </ul>
              </Collapse>
            </div>
          </div>
          <div className="projectpage__bottomlinks bottomlinks">
            {projects[index].url && (
              <a
                className="bottomlinks__link"
                href={projects[index].url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLink} />
                <span>Accéder au site</span>
              </a>
            )}
            <a
              className="bottomlinks__link"
              href={projects[index].repo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
              <span>Repo GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Project
