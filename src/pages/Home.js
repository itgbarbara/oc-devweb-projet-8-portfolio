import React from 'react'
import Layout from '../components/Layout'
import About from '../components/About'
import Skills from '../components/Skills'
import Portfolio from '../components/Porfolio'
import Training from '../components/Training'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <Layout>
      <About />
      <Skills />
      <Portfolio />
      <Training />
      <Contact />
    </Layout>
  )
}

export default Home
