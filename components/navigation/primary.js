import Link from 'next/link'
import orderBy from 'lodash.orderby'

/* helper method to order nav entries */
const order = (obj) => orderBy(obj, ['__order', '__title'], ['asc', 'asc'])

// Helper method to filter out the real children
const currentChildren = (current) =>
  Object.values(order(current)).filter((entry) => typeof entry === 'object')

// Shared classes for links
// Exported for re-use
export const linkClasses = `text-lg lg:text-xl py-1`

// Figure out whether a page is on the path to the active page
const isActive = (slug, active) => {
  if (slug === active) return true
  let result = true
  const slugParts = slug.split('/')
  const activeParts = active.split('/')
  for (const i in slugParts) {
    if (slugParts[i] !== activeParts[i]) result = false
  }

  return result
}

export const MainSections = ({ app, active }) => {
  if (!app.navigation) return null
  const output = []
  let last
  for (const page of order(app.navigation)) {
    const act = isActive(page.__slug, active)

    const item = (
      <li key={page.__slug}>
        {act ? (
          <span
            className={`${linkClasses}
                flex flex-row gap-4 items-center
                text-secondary sm:text-secondary
                border-secondary
                font-medium
                p-4
                border-l-8
              `}
            title={page.__linktitle}
          >
            {page.__linktitle}
          </span>
        ) : (
          <Link href={`${page.__slug}`}>
            <a
              className={`${linkClasses}
                flex flex-row gap-4 items-center
                text-base-content sm:text-base-content
                hover:text-secondary
                sm:hover:text-secondary
                hover:border-secondary
                hover:bg-secondary hover:bg-opacity-10
                border-base-300
                border-l-4 p-6
              `}
              title={page.__linktitle}
            >
              {page.__linktitle}
            </a>
          </Link>
        )}
      </li>
    )
    output.push(item)
  }

  return <ul>{output}</ul>
}

export const ActiveSection = ({ app, active }) => (
  <div className="-ml-5 mt-4 pt-4 border-t-2">
    <SubLevel
      hasChildren={1}
      nav={app.navigation}
      active={active}
      nodes={order(app.navigation[active.split('/')[0]])}
    />
  </div>
)

