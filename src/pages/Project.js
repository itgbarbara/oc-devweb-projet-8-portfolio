import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { DataContext } from '../utils/context/DataProvider'

const Project = () => {
  // Récupération de l'id qui se trouve dans l'url
  const { id } = useParams()

  // Récupération des données grâce au contexte
  const { projects, loading } = useContext(DataContext)

  const nbProjects = projects.length

  // Méthode pour trouver l'index de l'élément dont l'id est dans l'url de la fiche projet
  const index = projects.findIndex((project) => project.id === id)

  // Si les données sont toujours en train de charger, afficher une animation de chargement :
  if (loading) {
    return (
      <Layout>
        <div>Chargement...</div>
      </Layout>
    )
  }

  // Si le projet n'existe pas, rediriger vers la page d'erreur :
  if (!projects[index]) {
    return <Navigate to="/error" replace={true} />
  }

  // Si tout est OK, afficher le projet :
  return (
    <Layout>
      <div className="projectpage">
        <div className="nav">
          <Link
            className="nav__btn"
            to={`/project/${
              projects[index === 0 ? nbProjects - 1 : index - 1].id
            }`}
          >
            <FontAwesomeIcon className="nav__icon" icon={faChevronLeft} />
            Projet précédent
          </Link>
          <Link
            className="nav__btn"
            to={`/project/${
              projects[index === nbProjects - 1 ? 0 : index + 1].id
            }`}
          >
            Projet suivant
            <FontAwesomeIcon className="nav__icon" icon={faChevronRight} />
          </Link>
        </div>
        <div className="project">
          <h1 className="project__title">{projects[index].title}</h1>
          <p className="project__description">{projects[index].description}</p>
          <img
            className="project__cover"
            src={projects[index].cover}
            alt={projects[index].title}
          />
          <h2>Compétences développées</h2>
          <ul className="project__skills">
            {projects[index].skills.map((skill) => (
              <li key={`${skill}-${projects[index].id}`}>{skill}</li>
            ))}
          </ul>
          <div className="links">
            <a
              href={projects[index].url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Accéder au site
            </a>
            <a
              className="project__repo"
              href={projects[index].repo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Repo GitHub
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Project
