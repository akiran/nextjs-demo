import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Link href="/about">
        <a>About</a>
      </Link>
      <div>Welcome to Next.js</div>
    </div>
  )
}
