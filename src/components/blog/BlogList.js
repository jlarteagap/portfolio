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
    <section className="container mx-auto" id="blog">
      <span className="text-5xl">My Blog</span>
      <h2 className="text-3xl">Recent Posts</h2>
      <div className="flex flex-wrap -mx-4">
        {blog.map((item, index) => {
          const { title, link } = item
          return (
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8" key={index}>
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="w-full">
                  <a
                    className="blog__link"
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <figure className="relative pb-[75%]">
                      <img
                        src={item._embedded['wp:featuredmedia'][0].source_url}
                        alt="Placeholder image"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </figure>
                  </a>
                </div>
                <div className="p-4">
                  <div className="text-gray-700">
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
