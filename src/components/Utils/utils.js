import React from 'react'
import { BiDownload } from 'react-icons/bi'

export const DownloadButton = () => {
  return (
    <a
      download
      href="../assets/pdf/jorge-luis-arteaga-cv.pdf"
      className="button ja__buttons"
    >
      <BiDownload className="mr-2" />
      <div>
        <span className="is-hidden-mobile mr-1">Download</span> CV
      </div>
    </a>
  )
}
