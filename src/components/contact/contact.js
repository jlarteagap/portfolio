import React from 'react'

import SocialMedia from './SocialMedia'
import { ContactInfo } from './ContactInfo'

const Contact = ({ social, contact }) => {
  return (
    <section className="contact container mx-auto py-12" id="contacto">
      <div className="text-center">
        <h2 className="text-4xl font-bold max-sm:text-2xl">Contacta conmigo</h2>
      </div>
      <ContactInfo contact={contact} />
      <SocialMedia social={social} />
    </section>
  )
}

export default Contact
