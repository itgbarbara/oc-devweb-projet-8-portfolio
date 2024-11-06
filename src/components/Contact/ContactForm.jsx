import React from 'react'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com'

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: 'onTouched' })

  // register : fonction de react-hook-form qui va permettre d'enregistrer les valeurs que va prendre un champ. S'utilise avec l'attribut "name"
  // Evite de passer par l'utilisation du State et gère les attributs "value" et "onChange" de chaque élément du formulaire en une fois
  // handleSubmit : fonction utilisée pour générer une autre fonction (ici, onSubmit)

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
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi de l'email", error)
      })

    reset()
  }

  return (
    <form className="contact-form" ref={form} onSubmit={handleSubmit(onSubmit)}>
      <div className="contact-form__id">
        <div className="contact-form__field contact-form__field--username">
          <input
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
        <div className="contact-form__field contact-form__field--email">
          <input
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
      </div>
      <div className="contact-form__field contact-form__field--subject">
        <input
          type="text"
          name="subject"
          id="subject"
          {...register('subject', {
            required: false,
          })}
          placeholder="Objet de votre message"
        />
      </div>
      <textarea
        className="contact-form__message"
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
  )
}

export default ContactForm
