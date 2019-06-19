import React from "react"

import Layout from "../components/structure/layout"
import SEO from "../components/structure/seo"

import { Redirect } from '@reach/router'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <Redirect to="/home" noThrow />
    {/* @todo check this redirect is ok with seo */}
  </Layout>
)

export default IndexPage
