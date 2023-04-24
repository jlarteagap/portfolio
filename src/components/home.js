import React from 'react'

import { DownloadButton } from './Utils/utils'
import Image from 'next/image'

const Home = ({ siteTitle }) => {
  return (
    <>
      <section className="is-flex is-justify-content-center is-flex-direction-column is-align-items-center container">
        <figure className="image is-128x128">
          <Image
            src="/images/perfil.png"
            className="is-rounded"
            alt="Jorge Luis Arteaga"
            width="400"
            height="300"
          />
        </figure>
        <div className="has-text-centered">
          <h2 className="mt-4 is-size-4 has-text-weight-semibold is-uppercase">
            {siteTitle}
          </h2>
          <p>Frontend & React Developer</p>

          <h3 className="is-size-1 is-size-3-mobile my-4">
            Building digital products, brands, and experience.
          </h3>

          <div className="is-flex is-justify-content-center">
            <DownloadButton />
            <a href="#contacto" className="btn button mx-3">
              Contacto
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
