import React from 'react'
import './styles/global.scss'
import ReactDOM from 'react-dom/client'
import Router from './components/Router'
import Modal from 'react-modal'

Modal.setAppElement('#root')

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
)
