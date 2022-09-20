import React, { useState, useEffect, useRef } from "react"

import emailjs from 'emailjs-com';
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import Supplment from '../components/tailwindComps/FeatureSection'
import About from '../components/tailwindComps/Portfolio'
import FAQ from '../components/tailwindComps/FAQs'
import Contact from '../components/tailwindComps/Contact'
import Popup from '../components/tailwindComps/Popup'

const IndexPage = () => {
  const [confirm, setConfirm] = useState(false)

  useEffect(() => {
    setConfirm(true)
  }, [])

  const confirmMessage = ['Thanks for choosing Earth & Elle!', ' We will reach out ASAP to start collaborating on your new free site']

  return (
  <Layout title="Small Business Web Design & Development" pageLayout={{gridTemplateRows: "[top-gutter] auto [top-padding] auto [first] auto [second] auto [third] auto [fourth] auto [fifth] auto [sixth] auto [seventh] auto"}}>
    <SEO title="Home" description="Supplements by women for women. Empowering collagen supplments that do wonders for your skin, hair, and health." />


    {confirm ? <Popup prompt={true} isConfirm={confirm} message={confirmMessage} confirm={() =>setConfirm(false)} /> : null}

    <Supplment  prompt={true} message={confirmMessage} />
    <About />
    <FAQ />
    <Contact />

  </Layout>
  )
}
export default IndexPage
