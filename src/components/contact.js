import React, { useRef } from 'react'
import { BiRightArrowAlt, BiMailSend } from 'react-icons/bi'
import { BsWhatsapp } from 'react-icons/bs'
import SocialMedia from './SocialMedia'
// import APIKEY from '../../config/ApiKey'
import emailjs from '@emailjs/browser'

const Contact = ({ social }) => {
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
    <section className="contact container py-6" id="contacto">
      <h2 className="is-size-2 has-text-weight-bold is-size-4-mobile">
        Contacta conmigo
      </h2>
      <div className="columns">
        <div className="column">
          <h3 className="is-size-4 is-size-6-mobile">
            Elije una forma de contactarte directamente
          </h3>
          <div className="is-flex is-justify-content-space-around mt-6 contact__data">
            <div className="is-flex is-flex-direction-column is-align-items-center">
              <BiMailSend />
              <h3 className="contact__card-title">Email</h3>
              <span className="has-text-weight-bold">
                jorgelarteagap@gmail.com
              </span>
              <a
                href="mailto:jorgelarteagap@gmail.com"
                target="_blank"
                className="is-flex is-justify-content-center is-align-items-center"
                rel="noreferrer"
              >
                Escríbeme <BiRightArrowAlt />
              </a>
            </div>
            <div className="is-flex is-flex-direction-column is-align-items-center">
              <BsWhatsapp />
              <h3 className="contact__card-title">WhatsApp</h3>
              <span className="has-text-weight-bold">+591 77633551</span>
              <a
                href="https://wa.me/59177633551"
                target="_blank"
                className="is-flex is-justify-content-center is-align-items-center"
                rel="noreferrer"
              >
                Escríbeme <BiRightArrowAlt />
              </a>
            </div>
          </div>
          <SocialMedia social={social} />
        </div>
        <div className="column">
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
        </div>
      </div>
    </section>
  )
}

export default Contact
