import React from 'react'

import SocialMedia from './SocialMedia'
import { ContactInfo } from './ContactInfo'

const Contact = ({ social, contact }) => {
  return (
    <section className="contact container py-6" id="contacto">
      <div className="has-text-centered">
        <h2 className="is-size-2 has-text-weight-bold is-size-4-mobile">
          Contacta conmigo
        </h2>
      </div>
      <ContactInfo contact={contact} />
      <SocialMedia social={social} />
    </section>
  )
}

export default Contact
