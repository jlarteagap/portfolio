import React from 'react'
import { ArrowRight, Mail, MessageCircle } from 'lucide-react'

export const ContactInfo = ({ contact }) => {
  return (
    <div className="flex justify-around mt-12 contact__data flex-col md:flex-row gap-8">
      <div className="flex flex-col items-center">
        <Mail size={32} />
        <h3 className="contact__card-title font-bold text-lg">Email</h3>
        <span className="font-bold">{contact.email}</span>
        <a
          href={`mailto:${contact.email}`}
          target="_blank"
          className="flex justify-center items-center mt-2 hover:text-blue-500"
          rel="noreferrer"
        >
          Escríbeme <ArrowRight />
        </a>
      </div>
      <div className="flex flex-col items-center">
        <MessageCircle size={32} />
        <h3 className="contact__card-title font-bold text-lg">WhatsApp</h3>
        <span className="font-bold">+{contact.phone}</span>
        <a
          href={`https://wa.me/${contact.phone}`}
          target="_blank"
          className="flex justify-center items-center mt-2 hover:text-green-500"
          rel="noreferrer"
        >
          Escríbeme <ArrowRight />
        </a>
      </div>
    </div>
  )
}
