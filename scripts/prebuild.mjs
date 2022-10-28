import path from 'path'
import fs from 'fs'
import { getPublicNavigation } from '../lib/sanity.mjs'

const nav = await getPublicNavigation()
fs.writeFileSync(
  path.resolve('prebuild', `navigation.js`),
  `export default ${JSON.stringify(nav)}`
)
