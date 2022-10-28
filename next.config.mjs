import path from 'path'
import i18nConfig from './next-i18next.config.js'
import { banner } from './scripts/banner.mjs'
import withBundleAnalyzer from '@next/bundle-analyzer'
import remarkGfm from 'remark-gfm'

// Say hi
console.log(banner)

/*
 * This is the NextJS configuration
 */
const config = {
  eslint: {
    // Ignore linter for now
    ignoreDuringBuilds: true,
  },
  i18n: i18nConfig.i18n,
  pageExtensions: [ 'md', 'js', 'mjs' ],
  webpack: (config, options) => {

		// Fixes npm packages that depend on node modules
    if (!options.isServer) {
      config.resolve.fallback.fs = false
      config.resolve.fallback.path = false
      config.resolve.fallback.child_process = false
    }

    // MDX support
    config.module.rules.push({
      test: /\.md?$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          options: { remarkPlugins: [ remarkGfm ] }
        }
      ]
    })

    // YAML support
    config.module.rules.push({
      test: /\.ya?ml$/,
      use: 'yaml-loader'
    })

    // Fix for nextjs bug #17806
    config.module.rules.push({
      test: /index.mjs$/,
      type: "javascript/auto",
      resolve: {
        fullySpecified: false
      }
    })

    // Aliases to facilitate resolving imports
    config.resolve.alias.components = path.resolve(`./components/`)
    config.resolve.alias.hooks = path.resolve(`./hooks/`)
    config.resolve.alias.themes = path.resolve(`./themes/`)
    config.resolve.alias.lib = path.resolve(`./lib/`)


    return config
  }
}

// To run the bundle analyzer, run:
// ANALYZE=true yarn build
const exportedConfig = (process.env.ANALYZE) 
  ? withBundleAnalyzer(config)(config)
  : config

export default exportedConfig
