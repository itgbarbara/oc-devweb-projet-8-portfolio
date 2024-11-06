import React from 'react'
import Layout from '../components/Layout'
import About from '../components/About'
import SkillsSection from '../components/Skills/SkillsSection'
import PortfolioSection from '../components/Portfolio/PortfolioSection'
import TrainingSection from '../components/TrainingSection'
import ContactSection from '../components/Contact/ContactSection'
import BackToTopBtn from '../components/BackToTopBtn'

const Home = () => {
  return (
    <Layout>
      <About />
      <SkillsSection />
      <PortfolioSection />
      <TrainingSection />
      <ContactSection />
      <BackToTopBtn />
    </Layout>
  )
}

export default Home
