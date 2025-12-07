import { Download } from 'lucide-react'

export const DownloadButton = () => {
  return (
    <a
      download
      href="../assets/pdf/jorge-luis-arteaga-cv.pdf"
      className="px-4 py-2 rounded inline-flex items-center border border-slate-200 text-slate-200 hover:text-slate-500 hover:border-slate-500 transition-colors"
    >
      <Download className="mr-2" />
      <div>
        <span className="hidden sm:inline mr-1">Download</span> CV
      </div>
    </a>
  )
}
