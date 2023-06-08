import React from 'react'

import { DownloadButton } from './Utils/utils'
import Image from 'next/image'

const Home = ({ siteTitle }) => {
  console.log(siteTitle)
  return (
    <>
      <section className="is-flex is-justify-content-center is-flex-direction-column is-align-items-center container home__section pb-6">
        <figure className="image is-128x128">
          <Image
            src="/images/ja.webp"
            className="is-rounded"
            alt={siteTitle.name}
            width="400"
            height="300"
          />
        </figure>
        <div className="has-text-centered">
          <h2 className="mt-4 has-text-weight-bold is-size-3 is-uppercase">
            {siteTitle.name}
          </h2>
          <p>{siteTitle.description}</p>

          <h3 className="is-size-1 is-size-4-mobile my-6  p-2 has-text-weight-semibold home__phrase headings__titles">
            {siteTitle.slogan}
          </h3>

          <div className="is-flex is-justify-content-center">
            <DownloadButton />
            <a href="#contacto" className="mx-3 button ja__button-inverted">
              Contacto
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
