import React, { useRef } from 'react'
import { BiRightArrowAlt, BiMailSend } from 'react-icons/bi'
import { BsTwitter, BsWhatsapp } from 'react-icons/bs'
// import APIKEY from '../../config/ApiKey'
import emailjs from '@emailjs/browser'

const Contact = () => {
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
    <section className="contact container" id="contact">
      <h2 className="is-size-2 has-text-weight-bold">Contacta conmigo</h2>
      <div className="columns">
        <div className="column">
          <h3 className="is-size-4">Formas de contacto</h3>
          <div className="is-flex is-justify-content-space-around mt-6">
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
            <div className="is-flex is-flex-direction-column is-align-items-center">
              <BsTwitter />
              <h3 className="contact__card-title">Twitter</h3>
              <span className="has-text-weight-bold">jlarteagap</span>
              <a
                href="http://twitter.com/jlarteagap"
                target="_blank"
                className="is-flex is-justify-content-center is-align-items-center"
                rel="noreferrer"
              >
                Escríbeme <BiRightArrowAlt />
              </a>
            </div>
          </div>
        </div>
        <div className="column">
          <h3 className="contact__title">Write me your project</h3>

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
              <label className="label">Project</label>
              <textarea
                name="message"
                className="input"
                id=""
                cols="30"
                rows="10"
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
