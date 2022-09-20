import React, { useState, useEffect, useRef } from "react"
import { Helmet } from "react-helmet"
import { Script } from "gatsby"
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { ChevronRightIcon } from '@heroicons/react/solid'
import { Link } from "gatsby"
import emailjs from 'emailjs-com';
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import Supplment from '../components/tailwindComps/FeatureSection'
import CTA from '../components/tailwindComps/HomeCTA'
import About from '../components/tailwindComps/Portfolio'
import FAQ from '../components/tailwindComps/FAQs'
import Contact from '../components/tailwindComps/Contact'
import Gradient from '../components/commonComps/Gradient'
import Confirm from '../components/tailwindComps/Confirmation'
import Popup from '../components/tailwindComps/Popup'

const IndexPage = () => {
  const [confirm, setConfirm] = useState(false)
  const [email, setEmail] = useState('')
  const form = useRef()
  const onSubmit = (e) => {
    emailjs.sendForm('service_arikqvn', 'template_ht51ufi', e.target, 'user_kC0T8kmC4F1GOkt3Q06Q4')
       e.preventDefault()
       console.log('sent')
  }
  const handleChange = (e) => {

            setEmail(e.target.value)

  }
  useEffect(() => {
    setConfirm(true)
  }, [])
  const isSet = () => {
    setConfirm(true)
    console.log(confirm)
  }
  const confirmMessage = ['Thanks for choosing Earth & Elle!', ' We will reach out ASAP to start collaborating on your new free site']

  return (
  <Layout title="Small Business Web Design & Development" pageLayout={{gridTemplateRows: "[top-gutter] auto [top-padding] auto [first] auto [second] auto [third] auto [fourth] auto [fifth] auto [sixth] auto [seventh] auto"}}>
    <SEO title="Home" description="Supplements by women for women. Empowering collagen supplments that do wonders for your skin, hair, and health." />
    <Helmet>
        <Script id="refersion">{`! function(e, n, t, i, o, c, s, a) {
    e.TrackingSystemObject = "r", (s = n.createElement(t)).async = 1, s.src = "https://cdn.refersion.com/refersion.js", s.onload = function() {
        r.pubKey = "your_pub_key", r.settings.fp_off = 1;
        r.initializeXDLS().then(() => {
            r.launchDefault()
        })
    }, (a = n.getElementsByTagName(t)[0]).parentNode.insertBefore(s, a)
}(window, document, "script");`}</Script>
        </Helmet>

    {confirm ? <Popup prompt={true} isConfirm={confirm} message={confirmMessage} confirm={() =>setConfirm(false)} /> : null}

    <Supplment  prompt={true} message={confirmMessage} />
    <About />
    <FAQ />
    <Contact />

  </Layout>
  )
}
export default IndexPage
