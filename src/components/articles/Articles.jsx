import React, { useEffect, useState } from 'react'

const Article = () => {
  const [posts, setPosts] = useState([])
  // eslint-disable-next-line no-unused-vars
  const [image, setImage] = useState()
  // const [loading, setLoading] = useState()

  const url = 'https://appatico.com/wp-json/wp/v2/'
  useEffect(() => {
    async function getPost() {
      await fetch(`${url}posts?_fields=id,title,link,featured_media`)
        .then(res => res.json())
        .then(data => {
          data.slice(0, 4).map(post => {
            return setPosts(posts => [...posts, post])
          })
        })
    }
    getPost()
  }, [])

  return (
    <div>
      {posts.map(post => {
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
