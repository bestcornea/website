import Page from 'components/wrappers/page.js'
import useApp from 'hooks/useApp.js'
import Layout from 'components/layouts/bare'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import Logo from 'components/logos/best.js'

const Page404 = (props) => {
  const app = useApp()
  const { t } = useTranslation()

  return (
    <Page app={app} title="404: Page not found" layout={Layout}>
      <div className="flex flex-col items-center gap-8 justify-center py-6 mt-24">
        <Link href="/"><a><Logo className="w-2/3 sm:w-64" theme={app.theme}/></a></Link>
        <div className="py-36 text-center">
        <h1>404: {t('404')}</h1>
        <span className="text-7xl" role="img">🤔</span>
        </div>
      </div>
    </Page>
  )
}

export default Page404

export async function getStaticProps({ locale }) {
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale)),
    },
  }
}

