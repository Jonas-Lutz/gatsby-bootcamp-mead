import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

// import "./header.module.css"
import HeaderStyles from "./header.module.css"

// 1. Author -> in Footer

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={HeaderStyles.Header}>
      <h1>
        <Link className={HeaderStyles.Title} to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h1>

      <nav>
        <ul className={HeaderStyles.Navigation}>
          <li>
            <Link
              activeClassName={HeaderStyles.activeNavigationItem}
              className={HeaderStyles.NavigationItem}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClassName={HeaderStyles.activeNavigationItem}
              className={HeaderStyles.NavigationItem}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              activeClassName={HeaderStyles.activeNavigationItem}
              className={HeaderStyles.NavigationItem}
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              activeClassName={HeaderStyles.activeNavigationItem}
              className={HeaderStyles.NavigationItem}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
