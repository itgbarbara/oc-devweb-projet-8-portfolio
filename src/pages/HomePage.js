// Composants
import Layout from '../components/Layout'
import Introduction from '../components/Introduction'
import SkillSection from '../components/Skills/SkillSection'
import PortfolioSection from '../components/Portfolio/PortfolioSection'
import TrainingSection from '../components/Training/TrainingSection'
import ContactSection from '../components/Contact/ContactSection'

//

const Home = () => {
  return (
    <Layout>
      <Introduction />
      <SkillSection />
      <PortfolioSection />
      <TrainingSection />
      <ContactSection />
    </Layout>
  )
}

export default Home
