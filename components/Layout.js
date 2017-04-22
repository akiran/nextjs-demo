import React from 'react'
import Header from './Header'
import Head from 'next/head'

export default function Layout(props) {
  return (
    <div>
      <Head>
        <link
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </Head>
      <div className='container'>
        <Header />
        {props.children}
      </div>
    </div>
  )
}
