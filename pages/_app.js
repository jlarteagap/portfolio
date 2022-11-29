import './public/style.css'
import ThemeContextWrapper from '../src/theme/ThemeContextWrapper'
import Layout from '../src/components/layout'

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeContextWrapper>
  )
}
