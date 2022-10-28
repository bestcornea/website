import { useRouter } from 'next/router'
// Shared components
import Aside from 'components/navigation/aside.js'

const DefaultLayout = ({ app, title = false, children = [] }) => {
  const router = useRouter()
  const slug = router.asPath.slice(1)

  return (
    <div className="grid grid-cols-4 m-auto justify-center place-items-stretch">
      <Aside app={app} slug={slug} />
      <section className="col-span-4 lg:col-span-3 py-24 px-4 lg:pl-8 bg-base-50">
        {title && (
          <div className="xl:pl-4">
            <h1 className="break-words">{title}</h1>
          </div>
        )}
        {children}
      </section>
    </div>
  )
}

export default DefaultLayout
