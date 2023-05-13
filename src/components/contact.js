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
        'user_0WvNAjKetmDQc67xcne1A'
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
    <section className="contact section" id="contact">
      <span className="section__subtitle">Get in touch</span>
      <h2 className="section__title">Contact me</h2>
      <div className="columns">
        <div className="column">
          <h3 className="contact__title">Talk to me</h3>
          <div className="contact__info">
            <div className="contact__card">
              <BiMailSend className="contact__card-icon" />
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                jorgelarteagap@gmail.com
              </span>
              <a
                href="mailto:jorgelarteagap@gmail.com"
                target="_blank"
                className="contact__button"
                rel="noreferrer"
              >
                Write me <BiRightArrowAlt className="contact__button-icon" />
              </a>
            </div>
            <div className="contact__card">
              <BsWhatsapp className="contact__card-icon" />
              <h3 className="contact__card-title">WhatsApp</h3>
              <span className="contact__card-data">+591 77633551</span>
              <a
                href="https://wa.me/59177633551"
                target="_blank"
                className="contact__button"
                rel="noreferrer"
              >
                Write me <BiRightArrowAlt className="contact__button-icon" />
              </a>
            </div>
            <div className="contact__card">
              <BsTwitter className="contact__card-icon" />
              <h3 className="contact__card-title">Twitter</h3>
              <span className="contact__card-data">jlarteagap</span>
              <a
                href="http://twitter.com/jlarteagap"
                target="_blank"
                className="contact__button"
                rel="noreferrer"
              >
                Write me <BiRightArrowAlt className="contact__button-icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="column">
          <h3 className="contact__title">Write me your project</h3>

          <form ref={form} className="contact__form" onSubmit={sendEmail}>
            <div className="contact__form-div">
              <label className="label">Names</label>
              <input
                type="text"
                name="from_name"
                className="input"
                placeholder="Insert your names"
              />
            </div>
            <div className="contact__form-div">
              <label className="label">Mail</label>
              <input
                type="email"
                name="reply_to"
                placeholder="Insert your email"
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
                placeholder="Write your project"
              ></textarea>
            </div>
            <button className="button ja__buttons" type="submit">
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
