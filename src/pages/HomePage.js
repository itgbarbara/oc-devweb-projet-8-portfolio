// Composants
import Layout from '../components/Layout'
import Introduction from '../components/Introduction'
import SkillsSection from '../components/Skills/SkillsSection'
import PortfolioSection from '../components/Portfolio/PortfolioSection'
import TrainingSection from '../components/Training/TrainingSection'
import ContactSection from '../components/Contact/ContactSection'

//

const Home = () => {
  return (
    <Layout>
      <Introduction />
      <SkillsSection />
      <PortfolioSection />
      <TrainingSection />
      <ContactSection />
    </Layout>
  )
}

export default Home
