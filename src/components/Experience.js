import React from 'react'
import { DownloadButton } from './Utils/utils'

export const Experience = () => {
  return (
    <section className="container">
      <h2 className="is-size-1">Experiencia</h2>
      <div className="columns is-4">
        <div className="column card">
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
              <p className="title is-4">Multipago / Ticketeg</p>
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
          <footer className="card-footer">
            <span className="card-footer-item">Javascript</span>
            <span className="card-footer-item">Bootstrap</span>
            <span className="card-footer-item">Html</span>
            <span className="card-footer-item">CSS</span>
          </footer>
        </div>
        <div className="column card">
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
              <p className="title is-4">Multipago / Ticketeg</p>
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
          <footer className="card-footer">
            <span className="card-footer-item">Javascript</span>
            <span className="card-footer-item">Bootstrap</span>
            <span className="card-footer-item">Html</span>
            <span className="card-footer-item">CSS</span>
          </footer>
        </div>
        <div className="column card">
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
              <p className="title is-4">Multipago / Ticketeg</p>
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
          <footer className="card-footer">
            <span className="card-footer-item">Javascript</span>
            <span className="card-footer-item">Bootstrap</span>
            <span className="card-footer-item">Html</span>
            <span className="card-footer-item">CSS</span>
          </footer>
        </div>
      </div>
      <DownloadButton />
    </section>
  )
}
