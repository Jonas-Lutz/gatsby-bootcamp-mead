import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import FooterStyles from "./footer.module.css"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <div className={FooterStyles.Footer}>
      <p>Created by {data.site.siteMetadata.author}.</p>
    </div>
  )
}

export default Footer
