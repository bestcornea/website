import Page from 'components/wrappers/page.js'
import useApp from 'hooks/useApp.js'
import { sanityLoader, getPublicPaths } from 'lib/sanity.mjs'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import MdxWrapper from 'components/wrappers/mdx'
import TocWrapper from 'components/wrappers/toc'
//import jargon from 'site/jargon.mjs'

const PublicSanityPage = (props) => {
  const app = useApp(props.page.slug, props.locale)
  return (
    <Page app={app} title={props.title} {...props.page}>
      <div className="grid grid-cols-3 lg:gap-4">
        {props.toc && (
          <div className="mb-8 w-full col-span-3 row-start-1 col-start-1 xl:col-span-1 xl:col-start-3">
            <TocWrapper toc={props.toc} app={app} />
          </div>
        )}
        <div className="col-span-3 col-start-1 xl:col-span-2 xl:row-start-1 row-start-2 xl:pl-4">
          <MdxWrapper mdx={props.mdx} app={app} />
        </div>
      </div>
    </Page>
  )
}

export default PublicSanityPage

export async function getStaticProps({ locale, params }) {
  const data = await sanityLoader(locale, params.publicslug)

  return {
    props: {
      ...data,
      page: {
        slug: params.publicslug,
        path: '/' + params.publicslug,
      },
      params,
      locale,
      ...(await serverSideTranslations(locale)),
    },
  }
}

export async function getStaticPaths() {
  const paths = await getPublicPaths()
  const allPaths = []
  for (const path of paths) {
    allPaths.push(path, `/nl${path}`, `/fr${path}`)
  }

  return {
    paths: allPaths,
    fallback: false,
  }
}
