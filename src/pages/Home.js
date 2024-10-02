import React from 'react'
import Layout from '../components/Layout'
import About from '../components/About'
import Skills from '../components/Skills'
import Training from '../components/Training'
import Portfolio from '../components/Porfolio'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <Layout>
      <About />
      <Skills />
      <Training />
      <Portfolio />
      <Contact />
    </Layout>
  )
}

export default Home
