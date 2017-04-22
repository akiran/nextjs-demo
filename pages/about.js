import React from 'react'
import Link from 'next/link'

export default function About() {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <div>Next.js is minimalistic framework for server-side rendering apps</div>
    </div>
  )
}
