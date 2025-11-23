import '../public/stl.css'
import Layout from '../src/components/layout'

export const metadata = {
  title: 'Jorge Arteaga',
  description: 'Portfolio of Jorge Arteaga',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
