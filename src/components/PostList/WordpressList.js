import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import BlogStyles from "./list.module.css"

const WordpressList = props => {
  const wpPosts = useStaticQuery(graphql`
    query {
      allWordpressPost(sort: { fields: date, order: DESC }) {
        edges {
          node {
            title
            slug
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  `)

  return (
    <>
      <h2>Wordpress</h2>
      <ol className={BlogStyles.posts}>
        {wpPosts.allWordpressPost.edges.map(p => {
          return (
            <li className={BlogStyles.post}>
              <Link to={`/blog/${p.node.slug}`}>
                <h2>{p.node.title}</h2>
                <p>{p.node.date}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </>
  )
}

export default WordpressList
