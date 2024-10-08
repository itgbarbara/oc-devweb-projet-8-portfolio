import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'onTouched' })

  // register : fonction de react-hook-form qui va permettre d'enregistrer les valeurs que va prendre un champ. S'utilise avec l'attribut "name"
  // Evite de passer par l'utilisation du State et gère les attributs "value" et "onChange" de chaque élément du formulaire en une fois
  // handleSubmit : fonction utilisée pour générer une autre fonction (ici, onSubmit)

  const [data, setData] = useState('')

  const onSubmit = (dataForm) => {
    setData(JSON.stringify(dataForm))
    console.log(dataForm)
  }

  console.log('Re-render')

  return (
    <section id="contact" className="homepage-section">
      <h2>Contact</h2>
      <p>
        Si vous souhaitez que l'on travaille ensemble, n'hésitez pas à m'envoyer
        un message !
      </p>
      <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
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
              placeholder="Nom"
            />
            {errors.username && <span>{errors.username.message}</span>}
          </div>
          <div className="contact-form__field contact-form__field--email">
            <input
              type="email"
              name="email"
              id="email"
              {...register('email', {
                required: true,
              })}
              placeholder="e-mail"
            />
            {errors.email && errors.email.type === 'required' && (
              <span>Veuillez renseigner votre e-mail</span>
            )}
          </div>
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
          placeholder="Votre message"
        ></textarea>
        <input disabled={!isValid} type="submit" value="Envoyer" />
      </form>
      <p>{data}</p>
    </section>
  )
}

export default Contact
