import { Fragment } from 'react'
import themes from 'themes/index.js'
import LightIcon from 'components/icons/light.js'
import DarkIcon from 'components/icons/dark.js'
import { useTranslation } from 'next-i18next'
import { Switch } from '@headlessui/react'

const icons = {
  light : <LightIcon className="w-6 h-6 text-orange-300"/>,
  dark: <DarkIcon className="h-6 w-6 text-yellow-300"/>
}

const ThemePicker = ({ app, className, iconOnly = false }) => {
  const { t } = useTranslation(['themes', 'common'])
  const dark = app.theme === 'dark'
  const toggleTheme = () => {
    if (dark) app.setTheme('light')
    else app.setTheme('dark')
  }

  return (
        <div className="flex flex-row gap-2">
          {icons[app.theme]}
          <Switch
            checked={dark}
            onChange={toggleTheme}
            className={`${
              dark ? 'bg-gray-600' : 'bg-gray-300'
            } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span className="sr-only">Enable dark mode</span>
            <span
              className={`${
                dark ? 'translate-x-6 bg-gray-900' : 'translate-x-1 bg-gray-700'
              } inline-block h-4 w-4 transform rounded-full transition`}
            />
          </Switch>
        </div>
  )
}

export default ThemePicker
