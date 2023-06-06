import React from 'react'

export const AboutContent = ({ content }) => {
  return <div dangerouslySetInnerHTML={{ __html: content }}></div>
}
