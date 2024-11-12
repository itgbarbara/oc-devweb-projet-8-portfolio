// Hooks
import { useState, useEffect, useContext } from 'react'
// Components
import FilterBar from './FilterBar'
import ProjectCards from './ProjectCards'
// Context
import { DataContext } from '../../utils/context/DataProvider'

//

const PortfolioSection = () => {
  // Déclaration de variables d'état
  const [categories, setCategories] = useState([]) // Pour stocker les catégories
  const [activeFilterId, setActiveFilterId] = useState(null) // Pour suivre le filtre actif

  // Récupération des projets grâce au contexte
  const { projects, filteredProjects, setFilteredProjects } =
    useContext(DataContext)

  // Simulation appels API
  useEffect(() => {
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

  // Réinitialisation des filtres à l'ouverture de la homepage
  useEffect(() => {
    setFilteredProjects(projects)
  }, [])

  // Gestion de la sélection d'une categorie
  const handleFilterChange = (e) => {
    const selectedCategoryId = e.target.dataset.id
    setActiveFilterId(selectedCategoryId)

    const filterProjects = projects.filter((project) =>
      project.category.some((cat) => cat.id === selectedCategoryId)
    )
    setFilteredProjects(filterProjects)
  }

  // Gestion de la sélection de toutes les catégories
  const handleFilterReset = () => {
    setActiveFilterId(null)
    setFilteredProjects(projects)
  }

  return (
    <section id="portfolio" className="homepage-section portfolio">
      <h2 className="homepage-section__title homepage-section__title--portfolio">
        Réalisations
      </h2>
      <FilterBar
        categories={categories}
        handleFilterChange={handleFilterChange}
        handleFilterReset={handleFilterReset}
        activeFilterId={activeFilterId}
      />
      <ProjectCards data={filteredProjects} layout="cards-layout" />
    </section>
  )
}

export default PortfolioSection
