import React from 'react'
import ProjectCards from './ProjectCards'
import FilterBar from './FilterBar'
import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { DataContext } from '../../utils/context/DataProvider'

const PortfolioSection = () => {
  // Déclaration d'une variable d'état
  const [categories, setCategories] = useState([])

  // Récupération des données grâce au contexte
  const { projects, filteredProjects, setFilteredProjects } =
    useContext(DataContext)

  // Simulation appels API
  useEffect(() => {
    // Récupérer les catégories dynamiquement depuis la base "Projects" en supprimant les doublons
    fetch('/data/categories.json').then((response) =>
      response
        .json()
        .then((categories) => {
          setCategories(categories)
        })
        .catch((err) => {
          console.log('Error: ', err)
        })
    )
  }, [])

  const handleFilterChange = (e) => {
    const selectedCategoryId = e.target.dataset.id

    const filterProjects = projects.filter((project) =>
      project.category.some((cat) => cat.id === selectedCategoryId)
    )
    setFilteredProjects(filterProjects)
  }

  const handleFilterReset = () => {
    setFilteredProjects(projects)
  }

  return (
    <section id="portfolio" className="homepage-section">
      <h2 className="homepage-section__title">Réalisations</h2>
      <FilterBar
        categories={categories}
        handleFilterChange={handleFilterChange}
        handleFilterReset={handleFilterReset}
      />
      <ProjectCards projects={filteredProjects} />
    </section>
  )
}

export default PortfolioSection
