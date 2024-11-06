import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div id="top" className="body-container">
      <Header />
      <main className="body-container__main">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
