import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

const NotFoundPage = () => (
  <Layout title="404">
    <SEO title="404: Not found" />
    <div className="" style={{gridColumn:"span 7", gridRowStart:"first", gridRowEnd:"second"}}>
    <h1 className="">404: Not Found!</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </div>
  </Layout>
)

export default NotFoundPage
