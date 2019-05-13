import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Head from "../components/Head"

const Index = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h2>Bootcamp auf Youtube</h2>

      <div>
        Haben wir noch Peps?
        <p>
          <a href="/contact"> Keinen mehr?</a>
        </p>
        <p>
          <Link to="/contact">Gar keinen?</Link>
        </p>
        <p>
          <a href="https://www.youtube.com/watch?v=UGxr2tnzGS4" target="_blank">
            Ist das der Mars?
          </a>
        </p>
      </div>
    </Layout>
  )
}

export default Index
