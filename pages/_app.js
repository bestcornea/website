import '../styles/globals.css'
import { appWithTranslation } from 'next-i18next'

const BestCorneaWebsite = ({ Component, pageProps }) => <Component {...pageProps} />

export default appWithTranslation(BestCorneaWebsite)
