import { useState, createContext } from 'react'

export const ModalContext = createContext()

function ModalProvider({ children }) {
  // Déclaration de la variable d'état de la modale
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  // Déclaration des fonctions de gestion de la modale
  const openContactModal = () => setIsContactModalOpen(true)
  const closeContactModal = () => setIsContactModalOpen(false)

  return (
    <ModalContext.Provider
      value={{
        isContactModalOpen,
        openContactModal,
        closeContactModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export default ModalProvider

// import { useContext } from 'react'
// import { ModalContext } from '../utils/context/ModalProvider'

//   // Récupération des données grâce au contexte
//   const { isContactModalOpen, openContactModal, closeContactModal } = useContext(ModalContext)
