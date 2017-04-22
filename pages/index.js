import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
const POST_IDS = [1, 2, 3, 4]

const PostLink = ({postId}) => (
  <li>
    <Link as={`/post/${postId}`} href={`/post?id=${postId}`}>
      <a>{`Post ${postId}`}</a>
    </Link>
  </li>
)

export default function Home() {
  return (
    <Layout>
      <div>Welcome to Next.js</div>
      <h1>Posts</h1>
      <div>
        { POST_IDS.map(postId => <PostLink postId={postId} />) }
      </div>
    </Layout>
  )
}
