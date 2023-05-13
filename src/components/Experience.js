import React from 'react'
import { DownloadButton } from './Utils/utils'

export const Experience = () => {
  return (
    <section className="container py-6">
      <h2 className="is-size-1 my-6">Experiencia</h2>
      <div className="columns is-4 is-3">
        <div className="column card ja__card" style={{ gap: '1.5rem' }}>
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img
                  src="https://bulma.io/images/placeholders/96x96.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div className="media-content">
              <p className="title ja__card-title is-4">Multipago / Ticketeg</p>
              <p className="subtitle is-6">www.multipago.com</p>
            </div>
          </div>
          <div className="card-content">
            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris.
              <a href="#">@bulmaio</a>. <a href="#">#css</a>{' '}
              <a href="#">#responsive</a>
            </div>
          </div>
        </div>
        <div className="column card ja__card">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img
                  src="https://bulma.io/images/placeholders/96x96.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div className="media-content">
              <p className="title ja__card-title is-4">Multipago / Ticketeg</p>
              <p className="subtitle is-6">www.multipago.com</p>
            </div>
          </div>
          <div className="card-content">
            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris.
              <a href="#">@bulmaio</a>. <a href="#">#css</a>{' '}
              <a href="#">#responsive</a>
            </div>
          </div>
        </div>
        <div className="column card ja__card">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img
                  src="https://bulma.io/images/placeholders/96x96.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div className="media-content">
              <p className="title ja__card-title is-4">Multipago / Ticketeg</p>
              <p className="subtitle is-6">www.multipago.com</p>
            </div>
          </div>
          <div className="card-content">
            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris.
              <a href="#">@bulmaio</a>. <a href="#">#css</a>{' '}
              <a href="#">#responsive</a>
            </div>
          </div>
        </div>
      </div>
      <div className="is-flex mt-6 is-flex-direction-column is-align-items-center">
        <p className="mb-4">Descargar el Curriculum completo...</p>
        <div>
          <DownloadButton />
        </div>
      </div>
    </section>
  )
}
