import React, { useEffect, useState } from 'react'
import './articles.css'
const Article = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)

  const url = 'https://appatico.com/wp-json/wp/v2/'
  useEffect(() => {
    async function getPost() {
      setLoading(true)
      await fetch(`${url}posts?_fields=id,title,link,featured_media`)
        .then(res => res.json())
        .then(data => {
          data.slice(0, 4).map(post => {
            return setPosts(posts => [...posts, post])
          })
        })
      setLoading(false)
    }
    getPost()
  }, [])

  async function getImage() {
    const data = Promise.all(
      posts.map(
        async data =>
          await (
            await fetch(
              `https://appatico.com/wp-json/wp/v2/media/${data.featured_media}?_fields=guid,id`
            )
          ).json()
      )
    )
    return data
  }

  getImage().then(data => {
    console.log(data)
  })

  return (
    <div className="blog">
      <div className="title">
        <h2>Artículos publicados en blogs</h2>
      </div>
      {loading
        ? 'cargando'
        : posts.map(post => {
            return (
              <div key={post.id}>
                <p>{post.featured_media} </p>
                <h3>
                  <a href={post.link} target="_blank" rel="noopener noreferrer">
                    {post.title.rendered}
                  </a>
                </h3>
              </div>
            )
          })}
    </div>
  )
}

export default Article
