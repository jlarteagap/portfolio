import React from 'react'
import { DownloadButton } from './Utils/utils'
import Image from 'next/image'
import { BiCaretRight } from 'react-icons/bi'

export const Experience = () => {
  return (
    <section className="container py-6" id="experiencia">
      <h2 className="is-size-1 my-6">Experiencia</h2>
      <div className="columns is-4 is-3">
        <div className="column card ja__card" style={{ gap: '1.5rem' }}>
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <Image
                  width="48"
                  height="48"
                  src="/images/experiencie/digicorp.jpeg"
                />
              </figure>
            </div>
            <div className="media-content">
              <p className="title ja__card-title is-4">Digicorp</p>
              <p className="subtitle is-6">www.digicorp.com.bo</p>
            </div>
          </div>
          <div className="card-content">
            <div className="content">
              <p>
                Digicorp es una empresa distrubuidora mayorista de productos de
                video vigilangia y redes. Mi trabajo fué ayudar al equipo de
                marketing a adminsitrar y controlar: banners, cursos, webinars y
                actualizar productos desde un panel de administración con
                JavaScript / HTML.
              </p>
            </div>
          </div>
        </div>
        <div className="column card ja__card">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <Image
                  src="/images/experiencie/workcore.jpeg"
                  width="48"
                  height="48"
                />
              </figure>
            </div>
            <div className="media-content">
              <p className="title ja__card-title is-4">Workcore</p>
              <p className="subtitle is-6">www.workcore.net</p>
            </div>
          </div>
          <div className="card-content">
            <div className="content">
              <p>
                Workcore es un sistema de administración de recursos
                empresariales &quot;ERP&quot; en el que desarrolle diferentes
                template/ plantillas en <b>ReactJs</b> para diferentes empresas.
              </p>

              <div className="is-flex">
                <a
                  href="https://air.comb.bo"
                  className="is-flex is-align-items-center"
                >
                  <BiCaretRight /> Air.com.bo
                </a>
                <a
                  href="https://weclean.com.bo/"
                  className="is-flex is-align-items-center ml-4"
                >
                  <BiCaretRight /> We Clean
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="column card ja__card">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <Image
                  width="48"
                  height="48"
                  src="/images/experiencie/ticketeg.jpeg"
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
              <p>
                Ticketeg es una empresa de control de entradas y Multipago su
                pasarela de pago. Desarrollé diferentes landing page y web page
                en HTML/CSS/JS y ReactJs para diferentes eventos que contrataban
                los servicios.
              </p>
              <div className="is-flex">
                <a
                  href="https://celina.comb.bo"
                  className="is-flex is-align-items-center"
                >
                  <BiCaretRight /> celina.com.bo
                </a>
              </div>
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
