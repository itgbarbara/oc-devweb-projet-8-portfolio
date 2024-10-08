import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
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
        Si vous souhaitez que l'on travaille ensemble, n'hésitez pas à me
        contacter !
      </p>
      <form className="contactForm" onSubmit={handleSubmit(onSubmit)}>
        <div className="contactForm__id">
          <div>
            <label htmlFor="username">Nom</label>
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
          <div>
            <label htmlFor="email">Email</label>
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
          name="message"
          id="message"
          {...register('message', {
            required: true,
            minLength: 5,
          })}
          placeholder="Message"
        ></textarea>
        <p>{data}</p>
        <input type="submit" value="Envoyer" />
      </form>
    </section>
  )
}

export default Contact
