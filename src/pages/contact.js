import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Head from "../components/Head"

const ContactPage = () => {
  return (
    <div>
      <Layout>
        <Head title="Contact" />

        <h2>Zwei noch</h2>
        <p>
          <Link to="/">Home</Link>
        </p>
        <p>
          Mail uns mal: <a href="mailto:j.lutz@gingco.net">Hier</a>
        </p>
      </Layout>
    </div>
  )
}

export default ContactPage
