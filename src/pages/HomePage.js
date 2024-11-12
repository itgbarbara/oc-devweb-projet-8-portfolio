// Composants
import Layout from '../components/Layout'
import About from '../components/About'
import SkillsSection from '../components/Skills/SkillsSection'
import PortfolioSection from '../components/Portfolio/PortfolioSection'
import TrainingSection from '../components/TrainingSection'
import ContactSection from '../components/Contact/ContactSection'

//

const Home = () => {
  return (
    <Layout>
      <About />
      <SkillsSection />
      <PortfolioSection />
      <TrainingSection />
      <ContactSection />
    </Layout>
  )
}

export default Home
