import React from 'react'
import './styles/global.scss'
import ReactDOM from 'react-dom/client'
import Router from './components/Router'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
)
