import React from "react"

import Footer from "../Footer"
import Header from "../Header"

import "../../styles/index.css"
import LayoutStyles from "./layout.module.css"

const Layout = props => {
  return (
    <div className={LayoutStyles.container}>
      <div className={LayoutStyles.content}>
        <Header />
        {props.children}
      </div>

      <Footer />
    </div>
  )
}

export default Layout
