import React, { useEffect, useState } from 'react'
import { FaLinkedin } from 'react-icons/fa'
export const SocialMedia = () => {
  const [icons, setIcons] = useState(null)
  useEffect(() => {
    fetch('/api/about')
      .then(res => res.json())
      .then(({ social }) => {
        setIcons(social)
      })
  }, [])

  console.log(icons)
  return (
    <>
      {icons.map(icon => {
        return <>hola</>
      })}
      <FaLinkedin />
    </>
  )
}
