import { Fragment } from 'react'
import LocaleIcon from 'components/icons/i18n.js'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { Popover, Transition } from '@headlessui/react'
import DownIcon from 'components/icons/down'
import Link from 'next/link'

const LocalePicker = ({ app, iconOnly = false }) => {
  const { t } = useTranslation(['locales'])
  const router = useRouter()

  const text = {
    en: 'English',
    nl: 'Nederlands',
    fr: 'français',
  }

  return (
    <Popover className="relative">
      {() => (
        <>
          <Popover.Button
            className={`group inline-flex items-center px-3 py-2 text-base font-medium text-neural-content hover:bg-neutral-focus rounded-lg px-4`}
          >
            <span className="font-medium text-lg capitalize">{text[router.locale]}</span>
            <DownIcon className={`ml-2 h-5 w-5`} aria-hidden="true" />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 mt-3 w-48 max-w-xs transform px-4 sm:px-0 right-0">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <div className="relative grid gap-8 bg-base-100 border-base-200 border p-7 lg:grid-cols-1">
                  {router.locales.map((locale) => (
                    <Link href={'/'+app.slug} key={locale} locale={locale}>
                      <a className="-m-3 flex rounded-lg p-2 transition duration-150 ease-in-out-50 hover:translate-x-2 hover:cursor-pointer hover:font-bold">
                        <div className="ml-4">
                          <p className="text-base left -mt-4">{text[locale]}</p>
                        </div>
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}

export default LocalePicker
