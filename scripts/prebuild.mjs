import path from 'path'
import fs from 'fs'
import { getPublicNavigation, getTranslation } from '../lib/sanity.mjs'

const nav = await getPublicNavigation()
fs.writeFileSync(
  path.resolve('prebuild', `navigation.js`),
  `export default ${JSON.stringify(nav)}`
)
const translation = await getTranslation()
for (const lang of ['en', 'nl', 'fr']) fs.writeFileSync(
  path.resolve('public', 'locales', lang, `common.json`),
  JSON.stringify(translation[lang])
)

