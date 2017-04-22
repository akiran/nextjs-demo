import React from 'react'
import Layout from '../components/Layout'

export default function Post({url}) {
  return (
    <Layout>
      {`Post ${url.query.id} Content`}
    </Layout>
  )
}
