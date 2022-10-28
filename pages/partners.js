import Page from 'components/wrappers/page.js'
import useApp from 'hooks/useApp.js'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { logos, links } from 'components/logos/index.js'

const Row = ({ children }) => <div className="my-8 flex flex-row gap-12 items-center">{children}</div>

const Partner = ({name, t}) => {
  const Logo = logos[name]
  return (
    <Row>
      <Logo brand compact className="w-36 lg:w-1/5"/>
      <h3><a href={links[name]}>{t(name)}</a></h3>
    </Row>
  )
}

const PartnersPage = (props) => {
  const app = useApp(props.slug, props.locale)
  const { t } = useTranslation()
  
  return (
    <Page app={app} title={props.title} {...props.page}>
      <div className="grid grid-cols-3 lg:gap-4">
        {props.toc && (
          <div className="mb-8 w-full col-span-3 row-start-1 col-start-1 xl:col-span-1 xl:col-start-3">
            <TocWrapper toc={props.toc} app={app} />
          </div>
        )}
        <div className="col-span-3 col-start-1 xl:col-span-2 xl:row-start-1 row-start-2 xl:pl-4 mdx">
          <h2>Financing</h2>
          <Partner name="kce" t={t}/>
          <h2>Sponsor</h2>
          <Partner name="uza" t={t}/>
          <h2>Chief Investigator</h2>
          <Row>
            <img className="w-36 lg:w-1/5 rounded-full" src="/img/SorchaNiDhubhghaill.jpg" />
            <h3><a href="https://be.linkedin.com/in/sorcha-n%C3%AD-dhubhghaill">Prof. Dr. Sorcha Ní Dhubhghaill</a></h3>
          </Row>
          <h2>Cornea Banks</h2>
          <Partner name="chu" t={t}/>
          <Partner name="uza" t={t}/>
          <h2>Hospitals</h2>
          <Partner name="uza" t={t}/>
          <Partner name="uzb" t={t}/>
          <Partner name="ulb" t={t}/>
          <Partner name="uzg" t={t}/>
          <Partner name="uzl" t={t}/>
          <Partner name="chu" t={t}/>
          <Partner name="stjan" t={t}/>
          <Partner name="imelda" t={t}/>
          <Partner name="mm" t={t}/>
          <Partner name="ok" t={t}/>
          <Partner name="zol" t={t}/>
        </div>
      </div>
    </Page>
  )
}

export default PartnersPage

export async function getStaticProps({ locale, params }) {

  return {
    props: {
      title: 'Partners',
      page: {
        slug: 'partners',
        path: '/partners'
      },
      locale,
      ...(await serverSideTranslations(locale)),
    },
  }
}
