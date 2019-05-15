import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Head from "../components/Head"

export const query = graphql`
  query($slug: String) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      published(formatString: "MMMM DD, YYYY")
      body {
        json
      }
    }
  }
`

const AmpBlog = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        const { height, width } = node.data.target.fields.file[
          "en-US"
        ].details.image
        return (
          <amp-img
            alt={alt}
            src={url}
            height={height}
            width={width}
            layout="responsive"
          />
        )
      },
    },
  }
  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.published}</p>
      {documentToReactComponents(
        props.data.contentfulBlogPost.body.json,
        options
      )}
    </Layout>
  )
}

export default AmpBlog
