import Page from 'components/wrappers/page.js'
import useApp from 'hooks/useApp.js'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Layout from 'components/layouts/bare'
import { Icons } from 'components/navigation/primary'
import Popout from 'components/popout'
import WebLink from 'components/web-link'
import PageLink from 'components/page-link'
import { WordMark } from 'components/wordmark'

import Logo from 'components/logos/best.js'
import ChuLogo from 'components/logos/chu.js'
import ImeldaLogo from 'components/logos/imelda.js'
import KceLogo from 'components/logos/kce.js'
import MmLogo from 'components/logos/mm.js'
import OkLogo from 'components/logos/ok.js'
import StJanLogo from 'components/logos/stjan.js'
import UlbLogo from 'components/logos/ulb.js'
import UzaLogo from 'components/logos/uza.js'
import UzbLogo from 'components/logos/uzb.js'
import UzgLogo from 'components/logos/uzg.js'
import UzlLogo from 'components/logos/uzl.js'
import ZolLogo from 'components/logos/zol.js'

const logoSize = "h-24"

const HomePage = () => {
  const app = useApp()

  return (
    <Page app={app} title="FIXME" layout={Layout}>
      <div className="flex flex-col items-center gap-8 justify-center py-6 mt-24">
        <Logo className="w-2/3 sm:w-64" />
        
          <h2 className="block border-0">DSAEK<span role="img" className="px-4">⚔️</span>DMEK</h2>
      </div>
      <div>
        <div className="max-w-7xl m-auto lg:my-32 px-4">
          <div className="flex flex-row flex-wrap gap-4 justify-between">
            <div className="max-w-xl">
              <h3>{app.navigation.about.__title}</h3>
              <p>Fixme</p>
            </div>
            <div className="max-w-xl">
              <h3>{app.navigation.info.__title}</h3>
              <p>Fixme</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-center gap6">
          <ChuLogo    className={logoSize}/>
          <ImeldaLogo className={logoSize}/>
          <KceLogo    className={logoSize}/>
          <MmLogo     className={logoSize}/>
          <OkLogo     className={logoSize}/>
          <StJanLogo  className={logoSize}/>
          <UlbLogo    className={logoSize}/>
          <UzaLogo    className={logoSize}/>
          <UzbLogo    className={logoSize}/>
          <UzgLogo    className={logoSize}/>
          <UzlLogo    className={logoSize}/>
          <ZolLogo    className={logoSize}/>
        </div>
        <div className="flex flex-row flex-wrap justify-center gap6 mt-24">
          <ChuLogo    brand className={logoSize}/>
          <ImeldaLogo brand className={logoSize}/>
          <KceLogo    brand className={logoSize}/>
          <MmLogo     brand className={logoSize}/>
          <OkLogo     brand className={logoSize}/>
          <StJanLogo  brand className={logoSize}/>
          <UlbLogo    brand className={logoSize}/>
          <UzaLogo    brand className={logoSize}/>
          <UzbLogo    brand className={logoSize}/>
          <UzgLogo    brand className={logoSize}/>
          <UzlLogo    brand className={logoSize}/>
          <ZolLogo    brand className={logoSize}/>
        </div>
        <div className="w-full m-auto lg:my-32">
          <div
            className="bg-cover bg-neutral w-full bg-center shadow p-4 py-12"
            style={{ backgroundImage: 'url(/img/splash.jpg)' }}
          >
            <div className="max-w-6xl flex flex-row items-center justify-center">
              <div>
                <h2 className="text-neutral-content p-4 text-4xl font-bold sm:font-light sm:text-6xl drop-shadow w-1/2 border-0">
                  Partners
                </h2>
                <p className="text-neutral-content p-4 font-bold max-w-md text-lg drop-shadow">
                  The BEST Cornea study is a collaboration between 11 Belgian hospitals with the financial support of the Belgian Healthcare Knowledge Center
                </p>
                <a
                  role="button"
                  className="btn btn-accent btn-wide ml-4 mb-8"
                  href="fixme"
                >
                  Learn more
                </a>
              </div>
              <div className="w-1/2 bg-base-100 bg-opacity-50 rounded-lg p-4">
                <img src="/logos/partners.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default HomePage

export async function getStaticProps() {
  return {
    props: {
      ...(await serverSideTranslations('en')),
    },
  }
}
