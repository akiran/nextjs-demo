import React from 'react'
import Link from 'next/link'

const linkStyle = {
  marginRight: 20
}

export default function Header() {
  return (
    <div>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  )
}
