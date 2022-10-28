import path from 'path'
import fs from 'fs'
import { getPublicNavigation, getTranslation } from '../lib/sanity.mjs'

const translation = await getTranslation()
for (const lang of ['en', 'nl', 'fr']) fs.writeFileSync(
  path.resolve('public', 'locales', lang, `common.json`),
  JSON.stringify(translation[lang])
)
const nav = await getPublicNavigation(translation)
fs.writeFileSync(
  path.resolve('prebuild', `navigation.js`),
  `export default ${JSON.stringify(nav)}`
)

