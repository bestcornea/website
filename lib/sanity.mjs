// Sanity client
import sanityClient from '@sanity/client'
// MDX compiler
import { compile } from '@mdx-js/mdx'
// Remark plugins we want to use
import remarkGfm from 'remark-gfm'
import { remarkIntroPlugin } from './remark-intro-plugin.mjs'
import mdxPluginToc from './mdx-plugin-toc.mjs'
import smartypants from 'remark-smartypants'
// Rehype plugins we want to use
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
//import rehypeJargon from 'pkgs/rehype-jargon/src/index.mjs'

export const getSanityClient = (token) => sanityClient({ 
  projectId: '1w51ttnd',
  dataset: token ? 'internal' : 'public',
  token:'',
  apiVersion: '2022-10-25',
  useCdn: true
})

//const jargonTransform = (term, html) => `<details class="inline jargon-details">
//  <summary class="jargon-term">
//    ${term}
//    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 jargon-close" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M6 18L18 6M6 6l12 12" />
//    </svg>
//  </summary>
//  <div class="jargon-info">
//  ${html}</div></details>`

export const sanityLoader = async (language, slug, token) => {
  const client = getSanityClient(token)
  const q = `*[_type=='page' && slug.current == '${slug}']`
  const doc = (await client.fetch(`*[_type=='page' && slug.current == '${slug}']`)).pop()
  const data = {
    intro: [],
    title: doc[`title${language}`] || ''
  }
  data.mdx = String(
    await compile(doc[`body${language}`], {
      outputFormat: 'function-body',
      remarkPlugins: [
        remarkGfm,
        smartypants,
        [remarkIntroPlugin, { intro: data.intro }],
      ],
      rehypePlugins: [
        //[rehypeJargon, { jargon, transform: jargonTransform }],
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: 'wrap',
            properties: { className: 'heading-autolink' },
          },
        ],
      ],
    })
  )

  // This is not ideal as we're adding a second pass but for now it will do
  // See: https://github.com/remarkjs/remark-toc/issues/37
  data.toc = String(
    await compile(doc[`body${language}`], {
      outputFormat: 'function-body',
      remarkPlugins: [remarkGfm, smartypants, [mdxPluginToc, { language }]],
      rehypePlugins: [rehypeSlug],
    })
  )

  return data
}

const getSanityPaths = async (client, type) => client.fetch(`*[_type == '${type}'] {slug}`)
  .then(result => result.map(item => '/' + item.slug.current))

export const getPublicPaths = async () => await getSanityPaths(getSanityClient(), 'page')

export const getPublicNavigation = async () => {
  const client = getSanityClient()

  return client.fetch(`*[_type == 'page'] {slug, titleen, titlefr, titlenl}`)
  .then(list => {
    const nav = {
      en: {},
      nl: {},
      fr: {},
    }
    for (const item of list) {
      nav.en[item.slug.current] = {
        __title: item.titleen,
        __slug: item.slug.current
      }
      nav.nl[item.slug.current] = {
        __title: item.titlenl,
        __slug: item.slug.current
      }
      nav.fr[item.slug.current] = {
        __title: item.titlefr,
        __slug: item.slug.current
      }
    }
    
    return nav
  })
}
