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
    <section className="container" id="blog">
      <span className="is-size-1">My Blog</span>
      <h2 className="is-size-3">Recent Posts</h2>
      <div className="columns">
        {blog.map((item, index) => {
          const { title, link } = item
          return (
            <div className="column" key={index}>
              <div className="card">
                <div className="card-image">
                  <a
                    className="blog__link"
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <figure className="image is-4by3">
                      <img
                        src={item._embedded['wp:featuredmedia'][0].source_url}
                        alt="Placeholder image"
                      />
                    </figure>
                  </a>
                </div>
                <div className="card-content">
                  <div className="content">
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
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
