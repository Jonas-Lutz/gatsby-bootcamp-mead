import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Head from "../components/Head"

/* export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
` */

export const query = graphql`
  query($id: String) {
    wordpressPost(id: { eq: $id }) {
      slug
      date(formatString: "MMMM DD, YYYY")
      title
      content
    }
  }
`

const Blog = props => {
  console.log(props.data.wordpressPost.date)
  return (
    <Layout>
      <Head title={props.data.wordpressPost.title} />
      <h1>{props.data.wordpressPost.title}</h1>
      <p>{props.data.wordpressPost.date}</p>
      <div
        dangerouslySetInnerHTML={{ __html: props.data.wordpressPost.content }}
      />
    </Layout>
  )
}

export default Blog
