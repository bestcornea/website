import { useState, useEffect } from 'react'
import set from 'lodash.set'
// Stores state in local storage
import useLocalStorage from 'hooks/useLocalStorage.js'
import useTheme from 'hooks/useTheme'
// Prebuild navigation
import preNavigation from '../prebuild/navigation.js'

function useApp(pageSlug='/', pageLanguage='en') {

  // Persistent state
  const [account, setAccount] = useLocalStorage('account', { username: false })
  const [theme, setTheme] = useTheme();

  // React State
  const [primaryMenu, setPrimaryMenu] = useState(false)
  const [slug, setSlug] = useState(pageSlug)
  const [language, setLanguage] = useState(pageLanguage)
  const [navigation, setNavigation] = useState(preNavigation[language])
  const [loading, setLoading] = useState(true)
  const [popup, setPopup] = useState(false)

  useEffect(() => {
    setLanguage(pageLanguage) 
    setNavigation(preNavigation[pageLanguage])
    console.log(pageLanguage)
  }, [pageLanguage, language])

  // State methods
  const togglePrimaryMenu = () => setPrimaryMenu(!primaryMenu)

  return {
    // Static vars
    language,

    // State
    loading,
    navigation,
    popup,
    primaryMenu,
    slug,
    theme,

    // State setters
    setLoading,
    setNavigation,
    setPopup,
    setPrimaryMenu,
    setSlug,
    setTheme,
    startLoading: () => { setLoading(true); setPrimaryMenu(false) }, // Always close menu when navigating
    stopLoading: () => setLoading(false),

    // State handlers
    togglePrimaryMenu,

    // Dummy translation method
    t: s => s,
    i18n: false,
  }
}

export default useApp

