import React from 'react'
import ProjectCards from './ProjectCards'
import Filters from './Filters'
import { useState, useEffect } from 'react'

const Porfolio = () => {
  // Déclaration d'une variable d'état
  const [projects, setProjects] = useState([])
  const [categories, setCategories] = useState([])
  const [filteredProjects, setFilteredProjects] = useState([])

  // Simulation appels API
  useEffect(() => {
    fetch('/data/projects.json').then((response) =>
      response
        .json()
        .then((projects) => {
          setProjects(projects)
          setFilteredProjects(projects)
        })
        .catch((err) => {
          console.log('Error: ', err)
        })
    )

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
      <h2 className="homepage-section__title">Portfolio</h2>
      <Filters
        categories={categories}
        handleFilterChange={handleFilterChange}
        handleFilterReset={handleFilterReset}
      />
      <ProjectCards projects={filteredProjects} />
    </section>
  )
}

export default Porfolio
