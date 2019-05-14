import React from "react"

import Layout from "../components/Layout"
import Head from "../components/Head"
import ContentfulList from "../components/PostList/ContentfulList"
import WordpressList from "../components/PostList/WordpressList"

const BlogPage = () => {
  return (
    <Layout>
      <Head title="Blog" />
      <ContentfulList />
      <WordpressList />
    </Layout>
  )
}

export default BlogPage
