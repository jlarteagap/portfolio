import React from 'react'

export const AboutContent = ({ content }) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: content }}
      className="is-size-5 is-size-6-mobile"
    ></div>
  )
}
