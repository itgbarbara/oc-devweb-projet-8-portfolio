import React from 'react'
import Layout from '../components/Layout'
import About from '../components/About'
import Skills from '../components/Skills'
import Portfolio from '../components/Porfolio'

const Home = () => {
  return (
    <Layout>
      <About />
      <Skills />
      <Portfolio />
    </Layout>
  )
}

export default Home
