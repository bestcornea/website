import { useRouter } from 'next/router'
import Head from 'next/head'
import Header from 'components/header'
import Footer from 'components/footer'

const LayoutWrapper = ({ app, children = [] }) => {
  const startNavigation = () => {
    app.startLoading()
    // Force close of menu on mobile if it is open
    if (app.primaryNavigation) app.setPrimaryNavigation(false)
  }

  const router = useRouter()
  router.events?.on('routeChangeStart', startNavigation)
  router.events?.on('routeChangeComplete', () => app.stopLoading())

  return (
    <div
      className={`
    flex flex-col justify-between
    min-h-screen
    bg-base-100
    `}
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header app={app} />
      <main className="grow">{children}</main>
      <Footer app={app} />
    </div>
  )
}

export default LayoutWrapper
