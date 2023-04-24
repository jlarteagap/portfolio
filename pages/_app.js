import React from 'react'
import ThemeContextWrapper from '../src/theme/ThemeContextWrapper'
import Layout from '../src/components/layout'
import 'bulma/css/bulma.min.css'
import '../public/stl.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeContextWrapper>
  )
}
