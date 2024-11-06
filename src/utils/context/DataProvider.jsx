import { useState, useEffect, createContext } from 'react'

export const DataContext = createContext()

function DataProvider({ children }) {
  // Déclaration d'une variable d'état
  const [projects, setProjects] = useState([]) // Tableau qui contiendra les projets
  const [loading, setLoading] = useState(true) // Etat pour suivre le chargement
  const [filteredProjects, setFilteredProjects] = useState([])

  // Simulation appel API
  useEffect(() => {
    fetch('/data/projects.json').then((response) =>
      response
        .json()
        .then((projects) => {
          setProjects(projects)
          setLoading(false)
          setFilteredProjects(projects)
        })
        .catch((err) => {
          console.log('Error: ', err)
        })
    )
  }, [])

  return (
    <DataContext.Provider
      value={{
        projects,
        loading,
        filteredProjects,
        setFilteredProjects,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider

// Ne pas oublier de wrapper le router dans le DataProvider

// A importer dans le fichier du composant :

// import { useContext } from 'react'
// import { DataContext } from '../utils/context/DataProvider'

//   // Dans le composant fonctionnel :
//   // Récupération des données grâce au contexte
//   const { projects, loading } = useContext(DataContext)
