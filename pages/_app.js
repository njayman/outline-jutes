import { Fragment } from 'react'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ? Component.Layout : Fragment;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
