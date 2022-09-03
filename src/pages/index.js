import React, { useEffect } from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import Supplment from '../components/tailwindComps/FeatureSection'
import CTA from '../components/tailwindComps/HomeCTA'
import About from '../components/tailwindComps/Portfolio'
import FAQ from '../components/tailwindComps/FAQs'
import Contact from '../components/tailwindComps/Contact'
import Gradient from '../components/commonComps/Gradient'
const IndexPage = () => {

  return (
  <Layout title="Small Business Web Design & Development" pageLayout={{gridTemplateRows: "[top-gutter] auto [top-padding] auto [first] auto [second] auto [third] auto [fourth] auto [fifth] auto [sixth] auto [seventh] auto"}}>
    <SEO title="Home" />

    <Supplment />
    <About />
    <FAQ />
    <Contact />

  </Layout>
  )
}
export default IndexPage
