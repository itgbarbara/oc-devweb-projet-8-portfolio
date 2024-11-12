// Librairies externes
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Components
import HomePage from '../pages/HomePage'
import ProjectPage from '../pages/ProjectPage'
import ErrorPage from '../pages/ErrorPage'
// Context Provider
import DataProvider from '../utils/context/DataProvider'
import ModalProvider from '../utils/context/ModalProvider'

//

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <DataProvider>
          <ModalProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/project/:id" element={<ProjectPage />} />
              <Route path="/error" element={<ErrorPage />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </ModalProvider>
        </DataProvider>
      </BrowserRouter>
    </div>
  )
}

export default Router
