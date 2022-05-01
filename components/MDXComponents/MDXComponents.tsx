import Image from 'next/image'
import Link from 'next/link'

import ExternalLink from '@components/ExternalLink'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomLink = (props: any) => {
  const href = props.href
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>{props.children}</a>
      </Link>
    )
  }

  return <a target='_blank' rel='noopener noreferrer' {...props} />
}

const MDXComponents = {
  Image,
  a: CustomLink,
  // TwitterAt,
  // DownloadImage,
  ExternalLink,
}

export default MDXComponents
