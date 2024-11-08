import React from 'react'
import Header from './Header'
import Footer from './Footer'
import BackToTopBtn from './BackToTopBtn'

const Layout = ({ children }) => {
  return (
    <div id="top" className="body-container">
      <Header />
      <main className="body-container__main">{children}</main>
      <BackToTopBtn />
      <Footer />
    </div>
  )
}

export default Layout
