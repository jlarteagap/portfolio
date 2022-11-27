import "/public/style.css"
import ThemeContextWrapper from "../src/theme/ThemeContextWrapper"

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeContextWrapper>
  )
}
