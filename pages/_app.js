import React from 'react'
import Layout from '../src/components/layout'

import '../public/stl.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
