import React from 'react'

import { DownloadButton } from './Utils/utils'

const Home = ({ siteTitle }) => {
  return (
    <>
      <section className="flex justify-center flex-col items-center container mx-auto home__section pb-12">
        <figure className="w-32 h-32">
          <img
            src="/images/ja.webp"
            className="rounded-full"
            alt={siteTitle.name}
            style={{ width: '128px', height: '128px' }}
          />
        </figure>
        <div className="text-center">
          <h2 className="mt-4 font-bold text-5xl uppercase">
            {siteTitle.name}
          </h2>
          <p>{siteTitle.description}</p>

          <h3 className="text-3xl max-sm:text-2xl my-12 p-2 font-semibold home__phrase">
            {siteTitle.slogan}
          </h3>

          <div className="flex justify-center">
            <DownloadButton />
            <a
              href="#contacto"
              className="mx-3 px-4 py-2 rounded border border-current ja__button-inverted"
            >
              Contacto
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
