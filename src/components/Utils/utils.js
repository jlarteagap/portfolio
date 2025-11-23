import React from 'react'
import { Download } from 'lucide-react'

export const DownloadButton = () => {
  return (
    <a
      download
      href="../assets/pdf/jorge-luis-arteaga-cv.pdf"
      className="px-4 py-2 rounded inline-flex items-center ja__buttons"
    >
      <Download className="mr-2" />
      <div>
        <span className="hidden sm:inline mr-1">Download</span> CV
      </div>
    </a>
  )
}
