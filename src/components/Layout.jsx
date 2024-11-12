// Components
import Header from './Header'
import Footer from './Footer'
import ContactModal from './Contact/ContactModal'
import BackToTopBtn from '../components/BackToTopBtn'

//

const Layout = ({ children }) => {
  return (
    <div id="top" className="body-container">
      <Header />
      <main className="body-container__main">{children}</main>
      <ContactModal />
      <BackToTopBtn />
      <Footer />
    </div>
  )
}

export default Layout
