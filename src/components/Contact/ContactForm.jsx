// Hooks
import { useState, useEffect, useRef, useContext } from 'react'
import { useForm } from 'react-hook-form'
// Librairies externes
import emailjs from 'emailjs-com'
// Context
import { ModalContext } from '../../utils/context/ModalProvider'
// Components
import Confirmation from './Confirmation'

//

const ContactForm = () => {
  // Récupération de la fonction de fermeture de la modale de contact grâce au contexte
  const { closeContactModal } = useContext(ModalContext)

  // Gestion de l'apparition et de la disparition du message de confirmation
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false)
  const [isConfirmationClosing, setIsConfirmationClosing] = useState(false)

  const openConfirmationModal = () => {
    setIsConfirmationOpen(true)
  }
  const closeConfirmationModal = () => {
    setIsConfirmationOpen(false)
  }

  const handleConfirmationClosing = () => {
    setIsConfirmationClosing(true) // Active l'état de fermeture pour jouer l'animation de sortie
    setTimeout(() => {
      setIsConfirmationClosing(false)
      closeConfirmationModal() // Ferme réellement la modale après l'animation
    }, 500) // La durée de l'animation de sortie (0.5s)
  }

  // Réinitialisation de l'état de la popup de confirmation à chaque ouverture de la modal de contact
  useEffect(() => {
    if (isConfirmationOpen) {
      setIsConfirmationClosing(false)
    }
  }, [isConfirmationOpen])

  // Gestion des champs du formulaire
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: 'onTouched' })

  // Traitement des données du formulaires et envoi de l'email
  const form = useRef()
  const onSubmit = () => {
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then((response) => {
        console.log(
          'Merci pour votre message ! Je vous recontacterai dans les plus brefs délais',
          response.status,
          response.text
        )
        openConfirmationModal()
        setTimeout(() => handleConfirmationClosing(), 2000)
        setTimeout(() => closeContactModal(), 2000)
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi de l'email", error)
      })

    reset()
  }

  return (
    <div className="contact">
      <form
        className="contact-form"
        ref={form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <fieldset className="flex-row">
          <div className="w-50">
            <input
              className="contact-form__field contact-form__field--username"
              type="text"
              name="username"
              id="username"
              {...register('username', {
                required: 'Veuillez renseigner votre nom',
                minLength: {
                  value: 2,
                  message: 'Veuillez saisir au moins 2 caractères',
                },
                maxLength: {
                  value: 50,
                  message: 'Votre nom est trop long',
                },
              })}
              placeholder="Votre nom *"
            />
            {errors.username && <span>{errors.username.message}</span>}
          </div>
          <div className="w-50">
            <input
              className="contact-form__field contact-form__field--email"
              type="email"
              name="useremail"
              id="useremail"
              {...register('useremail', {
                required: true,
              })}
              placeholder="Votre adresse e-mail *"
            />
            {errors.useremail && errors.useremail.type === 'required' && (
              <span>Veuillez renseigner votre e-mail</span>
            )}
          </div>
        </fieldset>
        <input
          className="contact-form__field contact-form__field--subject"
          type="text"
          name="subject"
          id="subject"
          {...register('subject', {
            required: false,
          })}
          placeholder="Objet de votre message"
        />
        <textarea
          className="contact-form__field contact-form__field--message"
          name="message"
          id="message"
          {...register('message', {
            required: true,
            minLength: 5,
          })}
          rows="10"
          placeholder="Votre message *"
        ></textarea>
        {errors.message && (
          <span>Votre message doit comporter au minimum 5 caractères</span>
        )}
        <p>* Champ obligatoire</p>
        <input
          className="contact-form__submit-btn"
          disabled={!isValid}
          type="submit"
          value="Envoyer"
        />
      </form>
      <Confirmation
        isOpen={isConfirmationOpen || isConfirmationClosing}
        isClosing={isConfirmationClosing}
        closeModal={handleConfirmationClosing}
      >
        <p>Merci pour votre message !</p>
        <p>Je vous recontacterai dans les plus brefs délais</p>
      </Confirmation>
    </div>
  )
}

export default ContactForm
