import React from 'react'

import SocialMedia from './SocialMedia'
import { EmailForm } from './EmailForm'
import { ContactInfo } from './ContactInfo'

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
          <ContactInfo contact={contact} />
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
