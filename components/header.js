import { useState, useEffect } from 'react'
import Link from 'next/link'
import LocalePicker from 'components/locale-picker.js'
import ThemePicker from 'components/theme-picker.js'
import CloseIcon from 'components/icons/close.js'
import MenuIcon from 'components/icons/menu.js'
import SearchIcon from 'components/icons/search.js'
import Ribbon from 'components/ribbon.js'
import { WordMark } from 'components/wordmark.js'
import Logo from 'components/logos/best.js'

const Header = ({ app, setSearch }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [show, setShow] = useState(true)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        const curScrollPos = typeof window !== 'undefined' ? window.pageYOffset : 0
        if (curScrollPos >= prevScrollPos) {
          if (show && curScrollPos > 20) setShow(false)
        } else setShow(true)
        setPrevScrollPos(curScrollPos)
      }
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [prevScrollPos, show])

  return (
    <header
      className={`
      fixed top-0 left-0
      bg-neutral
      w-full
      z-30
      transition-transform
      ${show ? '' : 'fixed top-0 left-0 -translate-y-20'}
      drop-shadow-xl
    `}
    >
      <div>
        <div className="p-2 flex flex-row gap-2 justify-between text-neutral-content max-w-7xl m-auto">
          <div className="flex flex-row items-center">
            <button
              className={`
                  btn btn-sm btn-ghost
                  text-neutral-content bg-transparent
                  hover:text-secondary-focus
                  lg:hidden
                `}
              onClick={app.togglePrimaryMenu}
            >
              {app.primaryMenu ? <CloseIcon /> : <MenuIcon />}
            </button>
            <div className="absolute -top-64 lg:top-0 lg:relative lg:block">
              <Link href="/"><a><Logo  className="h-8 ml-4" theme={app.theme}/></a></Link>
            </div>
          </div>
          <div className="flex flex-row items-center lg:hidden pr-4">
            <LocalePicker app={app} iconOnly />
            <ThemePicker app={app} />
          </div>
          <div className="hidden lg:flex flex-row items-center gap-8">
            <LocalePicker app={app} />
            <ThemePicker app={app} />
          </div>
        </div>
      </div>
      <Ribbon loading={app.loading} theme={app.theme} />
    </header>
  )
}

export default Header
