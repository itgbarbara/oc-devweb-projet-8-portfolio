import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import Layout from '../components/Layout'

const Project = () => {
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

  // Récupération de l'id qui se trouve dans l'url
  const { id } = useParams()

  // Méthode pour trouver l'index de l'élément dont l'id est dans l'url de la fiche projet
  const index = projects.findIndex((project) => project.id === id)

  return (
    <Layout>
      {!projects[index] ? (
        <Navigate to="/error" replace={true} />
      ) : (
        <h1>{projects[index].title}</h1>
      )}
    </Layout>
  )
}

export default Project
