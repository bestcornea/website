import Link from 'next/link'
import GithubIcon from 'components/icons/github.js'
import Logo from 'components/logos/best.js'
import { logos, links, order } from 'components/logos/index.js'

const logoSize = "h-16 sm:h-20 md:h-24 -mt-8"

// Classes
const link = 'hover:pointer hover:-translate-y-2 transition ease-out duration-200'
const accent = 'text-accent font-bold text-lg px-1 block sm:inline'

const Footer = ({ app }) => {
  return (
    <footer className="bg-base-200 border-t-2 bg-opacity-30">
      <div className="flex flex-row justify-center pt-16 pb-8">
        <Link href="/"><Logo className="h-32" theme={app.theme}/></Link>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-8 md:gap-12 py-16 md:py-24 w-full px-4">
        {order.map(partner => {
          const Components = logos[partner]
          return <a ley={partner} className={link} href={links[partner]}><Components className={logoSize} brand/></a>
        })}
      </div>
      <div className="text-center pt-12 pb-8 flex flex-row flex-wrap gap-6 items-center justify-center text-lg">
        <Link href="/info"><a>{app.navigation.info.__linktitle}</a></Link>
        <span>|</span>
        <Link href="/contact"><a>{app.navigation.contact.__linktitle}</a></Link>
      </div>
      <div className="text-center pb-8 flex flex-row gap-6 items-center justify-center text-lg">
        <a href="https://github.com/bestcornea" className="text-primary opacity-50 hover:opacity-100">
          <GithubIcon className="h-12 w-12"/>
        </a>
      </div>
    </footer>
  )
}

export default Footer
