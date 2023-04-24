import React, { useEffect, useState } from 'react'

export default function BlogList() {
  const [blog, setBlog] = useState([])
  useEffect(() => {
    const url = 'https://appatico.com/wp-json/wp/v2/posts?_embed'

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setBlog(data.slice(0, 4))
      })
  }, [])
  return (
    <section className="work section" id="blog">
      <span className="section__subtitle">My Blog</span>
      <h2 className="section__title">Recent Posts</h2>
      <div className="work__container container grid">
        {blog.map((item, index) => {
          const { title, link } = item
          return (
            <div className="work__card mix web" key={index}>
              <div className="work__img">
                <a
                  className="blog__link"
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={item._embedded['wp:featuredmedia'][0].source_url}
                    alt="blog"
                    className="blog__img"
                    loading="lazy"
                  />
                </a>
              </div>
              <h3 className="blog__title">
                <a
                  className="blog__link"
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {title.rendered}
                </a>
              </h3>
            </div>
          )
        })}
      </div>
    </section>
  )
}
