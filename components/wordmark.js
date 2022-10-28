import Link from 'next/link'

export const InnerWordMark = () => (
  <span style={{ letterSpacing: '-0.14rem' }}>
    <span className="text-yellow-400">BEST</span>
    <span className="text-red-400">cornea</span>
  </span>
)

export const WordMark = () => (
  <Link href="/">
    <a
      role="button"
      className="normal-case hover:bg-transparent font-bold"
    >
      <InnerWordMark />
    </a>
  </Link>
)
