import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

import About from '../components/tailwindComps/FrontPageInfo'
const IndexPage = () => {


return(
  <Layout title="About"  pageLayout={{gridTemplateRows: "[top-gutter] auto [top-padding] auto [first] auto [second] auto [third] auto [fourth] auto"}}>
    <SEO title="Home" description="Learn about the owner, her story, and how she grew to become a successful collagen retailer." />
      <About />
  </Layout>
)
}
export default IndexPage