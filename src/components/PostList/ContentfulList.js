import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import BlogStyles from "./list.module.css"

const ContentfulList = props => {
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
    <>
      <h2>Contentful</h2>
      <ol className={BlogStyles.posts}>
        {posts.allContentfulBlogPost.edges.map(p => {
          return (
            <li
              className={BlogStyles.post}
              key={`${p.node.title}-${p.node.published}`}
            >
              <Link to={`/blog/${p.node.slug}`}>
                <h2>{p.node.title}</h2>
                <p>{p.node.published}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </>
  )
}

export default ContentfulList
