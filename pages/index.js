import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'

const POST_IDS = [1, 2, 3, 4]

const PostLink = ({postId}) => (
  <div>
    <Link as={`/post/${postId}`} href={`/post?id=${postId}`}>
      <button className='btn btn-default'>{`Post ${postId}`}</button>
    </Link>
  </div>
)

export default function Home() {
  return (
    <Layout>
      <div>Welcome to Next.js</div>
      <h1>Posts</h1>
      <div>
        { POST_IDS.map(postId => <PostLink key={postId} postId={postId} />) }
      </div>
    </Layout>
  )
}
