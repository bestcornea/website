const colors = require('tailwindcss/colors')

module.exports = {
  fontFamily:
    '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',

  'base-100': colors.neutral['900'],
  'base-200': colors.neutral['700'],
  'base-300': colors.neutral['600'],
  'base-content': colors.neutral['300'],

  primary: colors.violet['700'],
  'primary-focus': colors.violet['600'],
  'primary-content': colors.violet['50'],

  secondary: colors.sky['500'],
  'secondary-focus': colors.sky['400'],
  'secondary-content': colors.sky['50'],

  accent: colors.pink['500'],
  'accent-focus': colors.pink['400'],
  'accent-content': colors.pink['50'],

  neutral: '#000000', // Dark as my soul
  'neutral-focus': colors.neutral['800'],
  'neutral-content': colors.neutral['50'],

  info: colors.indigo['700'],
  success: colors.green['700'],
  warning: colors.orange['500'],
  error: colors.red['700'],

  '--btn-info-content': colors.neutral[50],
  '--btn-success-content': colors.neutral[50],
  '--btn-warning-content': colors.neutral[50],
  '--btn-error-content': colors.neutral[50],

  '--theme-gradient': `repeating-linear-gradient(
    90deg,
    ${colors.violet[700]} 0,
    ${colors.violet[400]} 25%,
    ${colors.violet[700]} 50%,
    ${colors.violet[400]} 75%,
    ${colors.violet[700]} 100%
  )`,

  '--rounded-box': '0.5rem',
  '--rounded-btn': '0.5rem',
  '--rounded-badge': '1.9rem',
  '--animation-btn': '0.25s',
  '--animation-input': '.4s',
  '--padding-card': '2rem',
  '--btn-text-case': 'uppercase',
  '--navbar-padding': '.5rem',
  '--border-btn': '1px',
  '--focus-ring': '2px',
  '--focus-ring-offset': '2px',
}
