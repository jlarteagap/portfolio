import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

export const EmailForm = () => {
  const form = useRef()
  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_98zraxi',
        'template_a34y8wi',
        form.current,
        '93BAteTRApolzmkNo'
      )
      .then(
        result => {
          alert('!Mensaje enviado correctamente')
          console.log(result.text)
        },
        error => {
          alert(`!Error al enviar el mensaje - ${error}`)
          console.log(error.text)
        }
      )
  }
  return (
    <form ref={form} className="contact__form" onSubmit={sendEmail}>
      <div className="contact__form-div">
        <label className="label">Nombres</label>
        <input
          type="text"
          name="from_name"
          className="input"
          placeholder="Insertar nombres"
        />
      </div>
      <div className="contact__form-div">
        <label className="label">Correo electrónico</label>
        <input
          type="email"
          name="reply_to"
          placeholder="Insertar un correo"
          className="input"
        />
      </div>
      <div className="contact__form-div contact__form-area">
        <label className="label">Mensaje</label>
        <textarea
          name="message"
          className="input"
          id=""
          placeholder="Describe tu proyecto"
        ></textarea>
      </div>
      <button className="button ja__buttons mt-4" type="submit">
        Enviar mensaje
      </button>
    </form>
  )
}
