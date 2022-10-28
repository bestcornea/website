import Ribbon from 'components/ribbon.js'
import Link from 'next/link'

// Classes
const link = 'text-secondary font-bold hover:pointer hover:underline px-1'
const accent = 'text-accent font-bold text-lg px-1 block sm:inline'

const Footer = ({ app }) => {
  return (
    <footer className="bg-neutral">
      <Ribbon loading={app.loading} theme={app.theme} />
      <div className="grid grid-cols-1 lg:grid-cols-4 py-12 2xl:py-20 text-neutral-content px-4">
      </div>
    </footer>
  )
}

export default Footer
