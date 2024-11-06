import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Project from '../pages/Project'
import ErrorPage from '../pages/ErrorPage'
import DataProvider from '../utils/context/DataProvider'
import ModalProvider from '../utils/context/ModalProvider'
import ContactModal from './Contact/ContactModal'

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <DataProvider>
          <ModalProvider>
            <ContactModal />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project/:id" element={<Project />} />
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
