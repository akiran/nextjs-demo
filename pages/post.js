import React from 'react'
import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'

export default class Post extends React.Component {
  render() {
    const {post} = this.props
    return (
      <Layout>
        <h1>{post.title}</h1>
        <div>{post.content}</div>
      </Layout>
    )
  }
}

Post.getInitialProps = async function(req) {
  console.log(req.query, 'query')
  const res = await fetch(`http://localhost:3000/api/post/${req.query.id}`)
  const post = await res.json()
  return {post}
}
