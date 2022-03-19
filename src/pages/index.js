import React, { useEffect } from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import FeatureSection from '../components/tailwindComps/FeatureSection'
import CTA from '../components/tailwindComps/HomeCTA'
import Portfolio from '../components/tailwindComps/Portfolio'
import Gradient from '../components/commonComps/Gradient'
const IndexPage = () => {
  useEffect(() => {
    new Gradient(document === 'undefined' ? undefined : document.querySelector('#app'));
   }, [])
  return (
  <Layout title="Small Business Web Design & Development" pageLayout={{gridTemplateRows: "[top-gutter] auto [top-padding] auto [first] auto [second] auto [third] auto [fourth] auto [fifth] auto [sixth] auto [seventh] auto"}}>
    <SEO title="Home" />

    <FeatureSection />
    <Portfolio />
    <CTA />

  </Layout>
  )
}
export default IndexPage
