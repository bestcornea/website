import Page from 'components/wrappers/page.js'
import useApp from 'hooks/useApp.js'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Layout from 'components/layouts/bare'
import { Icons } from 'components/navigation/primary'
import Popout from 'components/popout'
import WebLink from 'components/web-link'
import PageLink from 'components/page-link'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'

import { logos, links, order } from 'components/logos/index.js'
import Logo from 'components/logos/best.js'
// Classes
const link = 'hover:pointer hover:-translate-y-2 transition ease-out duration-200'
const logoSize = "h-16 sm:h-20 md:h-24 -mt-8"

const ReadMore = ({ href, t }) => (
  <Link href={href}>
    <a className="btn btn-lg btn-primary mt-4">
      {t('readMore')}
    </a>
  </Link>
)

const HomePage = (props) => {
  const app = useApp('/', props.locale)
  const { t } = useTranslation()

  return (
    <Page app={app} title="FIXME" layout={Layout}>

      <div className="flex flex-col items-center gap-8 justify-center py-6 mt-24">
        <Logo className="w-2/3 sm:w-64" theme={app.theme}/>
        <h2 className="block border-0 mb-0 pb-0">DSAEK<span role="img" className="px-4">⚔️</span>DMEK</h2>
        <p className="px-4 text-lg text-center mb-8 max-w-lg">{t('studyTagline', props.locale)}</p>
        <div className="flex flex-row flex-wrap justify-center gap-8 md:gap-12 py-16 md:py-24 bg-primary text-primary-content w-full px-4">
          {order.map(partner => {
            const Components = logos[partner]
            return <a key={partner} className={link} href={links[partner]}><Components className={logoSize}/></a>
          })}
        </div>
      </div>

      <div className="max-w-7xl m-auto lg:my-32 px-4">
        <div className="flex flex-row flex-wrap gap-8 lg:gap-16 justify-center">
          <div className="max-w-xl">
            <h3>{app.navigation.info.__title}</h3>
            <p>{app.navigation.info.__lead}</p>
            <ReadMore href="/info" t={t}/>
          </div>
          <div className="max-w-xl">
            <h3>{app.navigation.contact.__linktitle}</h3>
            <p>{app.navigation.contact.__lead}</p>
            <ReadMore href="/contact" t={t}/>
          </div>
          <div className="max-w-xl">
            <h3>{app.navigation.about.__title}</h3>
            <p>{app.navigation.about.__lead}</p>
            <ReadMore href="/about" t={t}/>
          </div>
          <div className="max-w-xl">
            <h3>{t('partners')}</h3>
            <p>{t('partnersLead')}</p>
            <ReadMore href="/partners" t={t}/>
          </div>
        </div>
      </div>

    </Page>
  )
}

export default HomePage

export async function getStaticProps({ locale }) {
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale)),
    },
  }
}
