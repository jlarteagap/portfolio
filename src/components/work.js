import React from 'react'
import Image from 'next/image'
import work1 from '../../public/images/work1.png'
import work2 from '../../public/images/work2.png'
import work3 from '../../public/images/work3.png'
import work4 from '../../public/images/work4.png'
import { BiRightArrowAlt } from 'react-icons/bi'

const Work = () => {
  return (
    <section className="work section" id="work">
      <span className="section__subtitle">My Portfolio</span>
      <h2 className="section__title">Recent Works</h2>

      <div className="work__filters">
        <span className="work__item active-work" data-filter="all">
          All
        </span>
        <span className="work__item" data-filter="web">
          Web
        </span>
      </div>

      <div className="work__container container grid">
        <div className="work__card mix web">
          <Image src={work1} className="work__img" alt="Job Boards" />
          <h3 className="work__title">Job Board</h3>
          <p className="work__description">
            <strong>SIDE PROJECT: </strong> React, MongoDB, GraphQl, Express
          </p>
          <a
            href="https://itempleos.netlify.app/"
            target="_blank"
            className="work__button"
            rel="noreferrer"
          >
            Demo <BiRightArrowAlt className="work__icon" />
          </a>
        </div>
        <div className="work__card mix web">
          <Image
            src={work2}
            className="work__img"
            alt="Web3 Crypto Wallet"
            width={100}
            height={100}
          />
          <h3 className="work__title">Web3 Crypto Wallet</h3>
          <p className="work__description">
            <strong>SIDE PROJECT: </strong> React, Solidity, Ether.js, Metatask
          </p>
          <a
            href="krypsto.netlify.app"
            target="_blank"
            className="work__button"
            rel="noreferrer"
          >
            Demo <BiRightArrowAlt className="work__icon" />
          </a>
        </div>
        <div className="work__card mix web">
          <Image
            src={work3}
            className="work__img"
            alt="Rare Flats"
            width={100}
            height={100}
          />
          <h3 className="work__title">Rare Flats</h3>
          <p className="work__description">
            PSD to HTML: Bootstrap, Gulp4, CSS3
          </p>
          <a
            href="https://jlarteagap.github.io/rare_flats/"
            target="_blank"
            className="work__button"
            rel="noreferrer"
            width={100}
            height={100}
          >
            Demo <BiRightArrowAlt className="work__icon" />
          </a>
        </div>
        <div className="work__card mix movil">
          <Image
            src={work4}
            className="work__img"
            alt="Coopama"
            width={100}
            height={100}
          />
          <h3 className="work__title">Coopama</h3>
          <p className="work__description">
            PSD to HTML: Bootstrap, Gulp4, CSS3
          </p>
          <a
            href="https://jlarteagap.github.io/coopama/"
            target="_blank"
            className="work__button"
            rel="noreferrer"
          >
            Demo <BiRightArrowAlt className="work__icon" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Work
