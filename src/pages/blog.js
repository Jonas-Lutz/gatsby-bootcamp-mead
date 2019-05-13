import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import BlogStyles from "./blog.module.css"
import Head from "../components/Head"

// Swap out md for contentful
// update component to render new data

const BlogPage = () => {
  const posts = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: published, order: DESC }) {
        edges {
          node {
            title
            slug
            published(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <ol className={BlogStyles.posts}>
        {posts.allContentfulBlogPost.edges.map(p => {
          return (
            <li className={BlogStyles.post}>
              <Link to={`/blog/${p.node.slug}`}>
                <h2>{p.node.title}</h2>
                <p>{p.node.published}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
