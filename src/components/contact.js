import React from 'react'
import { BiRightArrowAlt, BiMailSend } from 'react-icons/bi'
import { BsWhatsapp } from 'react-icons/bs'
import SocialMedia from './SocialMedia'
// import APIKEY from '../../config/ApiKey'

import { EmailForm } from './EmailForm'

const Contact = ({ social, contact }) => {
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
              <span className="has-text-weight-bold">{contact.email}</span>
              <a
                href={`mailto:${contact.email}`}
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
              <span className="has-text-weight-bold">+{contact.phone}</span>
              <a
                href={`https://wa.me/${contact.phone}`}
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
          <EmailForm />
        </div>
      </div>
    </section>
  )
}

export default Contact
